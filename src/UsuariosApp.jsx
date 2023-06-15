import { VistaFormaUsuario } from './components/VistaFormaUsuario';
import { VistaListaUsuarios } from './components/VistaListaUsuarios';
import { getUsuarios } from './services/servicioUsuarios';

export const UsuariosApp = () => {

    const usuariosIniciales = getUsuarios();
    const handlerAgregaUsuario = (usuario) => {
        console.log('usuario: ', usuario);
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
                                usuarios={usuariosIniciales}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
