import { useContext } from 'react';
import { VistaFormaUsuario } from "./VistaFormaUsuario";
import { UsuarioContexto } from '../context/UsuarioContexto';

export const VistaUsuarioModal = () => {
    
    const {usuarioSeleccionado,handlerCierraForma} = useContext(UsuarioContexto);

    return (
        <>
            <div className="abrir-modal animacion fadeIn">
                <div className="modal" style={{ display: "block" }} tabIndex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {usuarioSeleccionado.id > 0 ? 'Editar' : 'Crear'} Usuario
                                </h5>
                            </div>
                            <div className="modal-body">
                                <VistaFormaUsuario
                                    usuarioSeleccionado={usuarioSeleccionado}
                                    handlerCierraForma={handlerCierraForma}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
