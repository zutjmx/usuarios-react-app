import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { useContext } from 'react';
import { VistaListaUsuarios } from '../components/VistaListaUsuarios';
import { VistaUsuarioModal } from '../components/VistaUsuarioModal';
//import { UsuarioContexto } from '../context/UsuarioContexto';
//import { AuthContexto } from '../auth/context/AuthContexto';
import { useUsuarios } from '../hooks/useUsuarios';
import { useAuth } from '../auth/hooks/useAuth';
import { Paginator } from '../components/Paginator';

export const PaginaUsuarios = () => {
    
    const {pagina} = useParams();
    
    /* const {usuarios, 
        formularioVisible,
        handlerAbreForma,
        obtenerUsuarios
    } = useContext(UsuarioContexto); */

    const { 
        usuarios,
        formularioVisible,
        handlerAbreForma,
        obtenerUsuarios,
        isLoading, 
        paginator
    } = useUsuarios();

    //const {login} = useContext(AuthContexto);
    const { login } = useAuth();

    useEffect(() => {
        obtenerUsuarios(pagina);
    }, [obtenerUsuarios,pagina]);

    if (isLoading) {
        return (
            <>
                <div className="card my-4 mx-4 text-center">
                    {/* <h3 className="card-header">Cargando Datos</h3> */}
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Cargando Datos...</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {!formularioVisible ||
                <VistaUsuarioModal />
            }
            <div className="card my-4 mx-4">
                <h3 className="card-header">Bienvenido a Usuarios App</h3>
                <div className="card-body">
                    <h5 className="card-title">Aplicación CRUD creada en React</h5>
                    <p className="card-text">zutjmx@gmail.com</p>
                    <div className="row">
                        <div className="col">
                            {(formularioVisible || !login.isAdmin) ||
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
                                    :<>
                                        <VistaListaUsuarios />
                                        <Paginator 
                                            url="/usuarios/paginar" 
                                            paginator={paginator}
                                        />
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
