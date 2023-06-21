import { useState } from "react";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { getUsuarioLoginInicial } from '../../services/servicioUsuarios';

const formaLoginInicial = getUsuarioLoginInicial();

export const PaginaLogin = ({handlerLogin}) => {

    const tituloMensajes = 'Login';
    const [formaLogin, setFormaLogin] = useState(formaLoginInicial);
    const {username, password} = formaLogin;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormaLogin({
            ...formaLogin,
            [name]: value,
        });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!username) {
            Swal.fire(
                tituloMensajes,
                'Se requiere el usuario',
                'info'
            );
            return;
        }
        if (!password) {
            Swal.fire(
                tituloMensajes,
                'Se requiere la contraseña',
                'info'
            );
            return;
        }
        
        handlerLogin({username, password});
        
        setFormaLogin(formaLoginInicial);
    }

    return (
        <>
            <div className="modal" style={{display: 'block'}} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="/circulo-de-usuario.svg" id="icon" alt="User Icon" width="100px" height="100px" />
                            <h5 className="modal-title">Capture sus datos de usuario</h5>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <input 
                                    type="text" 
                                    className="form-control my-3 w-75" 
                                    placeholder="Usuario" 
                                    name="username"
                                    value={username}
                                    onChange={onInputChange}
                                />
                                <input 
                                    type="password" 
                                    className="form-control my-3 w-75" 
                                    placeholder="Contraseña" 
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

PaginaLogin.propTypes = {
    handlerLogin: PropTypes.any.isRequired
}
