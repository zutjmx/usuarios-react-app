import PropTypes from 'prop-types';
import { useState } from 'react';
import { VistaFormaUsuario } from '../components/VistaFormaUsuario';

export const PaginaRegistro = ({handlerAgregaUsuario, usuarioFormaInicial}) => {
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioFormaInicial);
    return (
        <>
            <div className="card">
                <h4 className="card-header">Registro de Usuario</h4>
                <div className="card-body">
                    <h5 className="card-title">Proporcione los siguientes datos para registrar un usuario</h5>
                    <div className="row">
                        <div className="col">
                            <VistaFormaUsuario
                                usuarioSeleccionado={usuarioSeleccionado}
                                handlerAgregaUsuario={handlerAgregaUsuario}
                                usuarioFormaInicial={usuarioFormaInicial}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

PaginaRegistro.propTypes = {
    handlerAgregaUsuario: PropTypes.any,
    usuarioFormaInicial: PropTypes.object,
}