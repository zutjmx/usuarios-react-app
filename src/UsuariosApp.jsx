import { useReducer } from 'react';
import Swal from 'sweetalert2';
import { VistaFormaUsuario } from './components/VistaFormaUsuario';
import { VistaListaUsuarios } from './components/VistaListaUsuarios';
import { usuariosReducer } from './reducers/usuariosReducer';
import { getUsuarios } from './services/servicioUsuarios';

export const UsuariosApp = () => {

    const usuariosIniciales = getUsuarios();

    const [usuarios, dispatch] = useReducer(usuariosReducer, usuariosIniciales);

    const handlerAgregaUsuario = (usuario) => {
        dispatch({
            type: 'agregarUsuario',
            payload: usuario,
        });
        Swal.fire(
            'Nuevo Usuario',
            'Se guardó el usuario',
            'success'
        );
    }

    const handlerBorrarUsuario = (id) => {
        Swal.fire({
            title: `¿Quiere borrar el usuario con ID: ${id}?`,
            showDenyButton: true,
            confirmButtonText: 'Borrar',
            denyButtonText: `No Borrar`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'borrarUsuario',
                    payload: id,
                });
                Swal.fire('Borrado', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('No se borró', '', 'info')
            }
        })
    }

    return (
        <>
            <div className="card my-4 mx-4">
                <h5 className="card-header">Usuarios App</h5>
                <div className="card-body">
                    <h5 className="card-title">Usuarios App</h5>
                    <p className="card-text">Usuarios App</p>
                    <div className="row">
                        <div className="col">
                            <VistaFormaUsuario
                                handlerAgregaUsuario={handlerAgregaUsuario}
                            />
                        </div>
                        <div className="col">
                            <VistaListaUsuarios
                                usuarios={usuarios}
                                handlerBorrarUsuario={handlerBorrarUsuario}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
