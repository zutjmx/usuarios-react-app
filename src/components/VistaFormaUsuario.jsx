import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from "react";
import Swal from 'sweetalert2';
import { validaEmail } from '../services/servicioUsuarios';

export const VistaFormaUsuario = ({ handlerAgregaUsuario, usuarioFormaInicial, usuarioSeleccionado, handlerCierraForma }) => {
    const [formaUsuario, setFormaUsuario] = useState(usuarioFormaInicial);
    const { id, username, email, password } = formaUsuario;
    const tituloMensajes = 'Formulario de Usuario';

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormaUsuario({
            ...formaUsuario,
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
        if (!email) {
            Swal.fire(
                tituloMensajes,
                'Se requiere el email',
                'info'
            );
            return;
        }
        if (!validaEmail(email)) {
            Swal.fire(
                tituloMensajes,
                'Email inválido',
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
        handlerAgregaUsuario(formaUsuario);
        setFormaUsuario(usuarioFormaInicial);
    }

    useEffect(() => {
        setFormaUsuario({
            ...usuarioSeleccionado,
        })
    }, [usuarioSeleccionado]);

    const onCierraForma = () => {
        handlerCierraForma();
        setFormaUsuario(usuarioFormaInicial);
    }

    return (
        <>
            <div className="card my-3">
                <h5 className="card-header">Capture los datos del Usuario</h5>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={username}
                                placeholder="Usuario"
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={onInputChange}
                            />
                        </div>
                        {id > 0 ||
                            <div className="mb-3">
                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder="Contraseña"
                                    onChange={onInputChange}
                                />
                            </div>
                        }
                        <input type="hidden" name="id" value={id} />
                        <button type="submit" className="btn btn-primary">
                            {id > 0 ? 'Actualizar' : 'Agregar'}
                        </button>
                        {!handlerCierraForma || 
                            <button 
                                className="btn btn-info mx-2" 
                                type="button"
                                onClick={() => onCierraForma()}
                            >
                                Cerrar Formulario
                            </button>
                        }                        
                    </form>
                </div>
            </div>
        </>
    );
}

VistaFormaUsuario.propTypes = {
    handlerAgregaUsuario: PropTypes.any,
    usuarioFormaInicial: PropTypes.object,
    usuarioSeleccionado: PropTypes.object,
    handlerCierraForma: PropTypes.any,
}
