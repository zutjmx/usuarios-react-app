import { useState } from 'react';
import { useReducer } from 'react';
import Swal from 'sweetalert2';
import { VistaFormaUsuario } from './components/VistaFormaUsuario';
import { VistaListaUsuarios } from './components/VistaListaUsuarios';
import { usuariosReducer } from './reducers/usuariosReducer';
import { getUsuarios, getUsuarioInicial } from './services/servicioUsuarios';

export const UsuariosApp = () => {

    const usuariosIniciales = getUsuarios();
    const usuarioFormaInicial = getUsuarioInicial();

    const [usuarios, dispatch] = useReducer(usuariosReducer, usuariosIniciales);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioFormaInicial);

    const handlerUsuarioSeleccionadoForma = (usuario) => {
        setUsuarioSeleccionado({...usuario});
    }

    const handlerAgregaUsuario = (usuario) => {
        let type;
        let mensaje = '';

        if(usuario.id === 0) {
            type = 'agregarUsuario';
            mensaje = 'Se agregó el usuario';
        } else {
            type = 'actualizarUsuario';
            mensaje = 'Se actualizó el usuario';
        }

        dispatch({
            type,
            payload: usuario,
        });

        Swal.fire(
            'Nuevo Usuario',
            mensaje,
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
                                usuarioSeleccionado={usuarioSeleccionado}
                                handlerAgregaUsuario={handlerAgregaUsuario}
                                usuarioFormaInicial={usuarioFormaInicial}
                            />
                        </div>
                        <div className="col">
                            {
                                usuarios.length === 0
                                ? <div className="alert alert-info">No hay usuarios registrados</div>
                                : <VistaListaUsuarios
                                    usuarios={usuarios}
                                    handlerBorrarUsuario={handlerBorrarUsuario}
                                    handlerUsuarioSeleccionadoForma={handlerUsuarioSeleccionadoForma}
                                  />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
