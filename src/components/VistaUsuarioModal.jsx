import PropTypes from 'prop-types';
import { VistaFormaUsuario } from "./VistaFormaUsuario";

export const VistaUsuarioModal = ({usuarioSeleccionado,handlerAgregaUsuario,usuarioFormaInicial,handlerCierraForma}) => {
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
                                    handlerAgregaUsuario={handlerAgregaUsuario}
                                    usuarioFormaInicial={usuarioFormaInicial}
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

VistaUsuarioModal.propTypes = {
    handlerAgregaUsuario: PropTypes.any.isRequired,
    usuarioFormaInicial: PropTypes.object.isRequired,
    usuarioSeleccionado: PropTypes.object.isRequired,
    handlerCierraForma: PropTypes.any.isRequired,
}