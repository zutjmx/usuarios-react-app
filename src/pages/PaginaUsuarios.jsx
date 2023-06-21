import { VistaListaUsuarios } from '../components/VistaListaUsuarios';
import { VistaUsuarioModal } from '../components/VistaUsuarioModal';
import { useUsuarios } from '../hooks/useUsuarios';

export const PaginaUsuarios = () => {

    const { 
        usuarios, 
        usuarioFormaInicial, 
        usuarioSeleccionado, 
        formularioVisible,
        handlerAgregaUsuario, 
        handlerBorrarUsuario, 
        handlerUsuarioSeleccionadoForma, 
        handlerAbreForma, 
        handlerCierraForma 
    } = useUsuarios();

    return (
        <>
            {!formularioVisible || 
                <VistaUsuarioModal 
                    usuarioFormaInicial={usuarioFormaInicial}
                    usuarioSeleccionado={usuarioSeleccionado}
                    handlerAgregaUsuario={handlerAgregaUsuario}
                    handlerCierraForma={handlerCierraForma}
                />
            }
            <div className="card my-4 mx-4">
                <h3 className="card-header">Bienvenido a Usuarios App</h3>
                <div className="card-body">
                    <h5 className="card-title">Aplicación CRUD creada en React</h5>
                    <p className="card-text">zutjmx@gmail.com</p>
                    <div className="row">                        
                        <div className="col">
                            {formularioVisible || 
                                <button 
                                    className="btn btn-primary my-2" 
                                    onClick={handlerAbreForma}
                                >
                                    Nuevo Usuario
                                </button>
                            }                            
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
