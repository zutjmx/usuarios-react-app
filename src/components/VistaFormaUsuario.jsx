import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from "react";
import Swal from 'sweetalert2';
import { validaEmail } from '../services/servicioUsuarios';
import { UsuarioContexto } from '../context/UsuarioContexto';

export const VistaFormaUsuario = ({ usuarioSeleccionado, handlerCierraForma }) => {
    const {handlerAgregaUsuario, usuarioFormaInicial, errores } = useContext(UsuarioContexto);
    const [formaUsuario, setFormaUsuario] = useState(usuarioFormaInicial);
    const [checked, setChecked] = useState(formaUsuario.admin);
    const { id, username, email, password, admin } = formaUsuario;
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
                'Email inválido, debe ser de la forma username@dominio',
                'info'
            );
            return;
        }
        if (id <= 0 && !password) {
            Swal.fire(
                tituloMensajes,
                'Se requiere la contraseña',
                'info'
            );
            return;
        }
        handlerAgregaUsuario(formaUsuario);        
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

    const onCheckboxChange = () => {
        setChecked(!checked);
        setFormaUsuario({
            ...formaUsuario,
            admin: checked,
        });
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
                            <p className="text-danger">{errores?.username}</p>
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
                            <p className="text-danger">{errores?.email}</p>
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
                        <div className="mb-3 form-check">
                            <input 
                                type="checkbox" 
                                name="admin" 
                                checked={admin}
                                className="form-check-input"
                                onChange={onCheckboxChange}
                            />
                        </div>
                        <p className="text-danger">{errores?.password}</p>
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
