import { useContext } from 'react';
import { VistaListaUsuarios } from '../components/VistaListaUsuarios';
import { VistaUsuarioModal } from '../components/VistaUsuarioModal';
import { UsuarioContexto } from '../context/UsuarioContexto';

export const PaginaUsuarios = () => {

    const {usuarios, 
        formularioVisible,
        handlerAbreForma} = useContext(UsuarioContexto);
    
    return (
        <>
            {!formularioVisible || 
                <VistaUsuarioModal/>
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
                                : <VistaListaUsuarios/>
                            }                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
