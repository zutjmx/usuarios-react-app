import { VistaFormaUsuario } from './components/VistaFormaUsuario';
import { VistaListaUsuarios } from './components/VistaListaUsuarios';
import { useUsuarios } from './hooks/useUsuarios';

export const UsuariosApp = () => {

    const { usuarios, 
        usuarioFormaInicial, 
        usuarioSeleccionado, 
        handlerAgregaUsuario, 
        handlerBorrarUsuario, 
        handlerUsuarioSeleccionadoForma } = useUsuarios();

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
