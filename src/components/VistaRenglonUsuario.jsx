import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
//import { UsuarioContexto } from '../context/UsuarioContexto';
import { AuthContexto } from '../auth/context/AuthContexto';
import { useUsuarios } from '../hooks/useUsuarios';

export const VistaRenglonUsuario = ({ id, username, email, password, admin }) => {

    //const { handlerBorrarUsuario, handlerUsuarioSeleccionadoForma } = useContext(UsuarioContexto);
    const { handlerBorrarUsuario, handlerUsuarioSeleccionadoForma } = useUsuarios();
    const { login } = useContext(AuthContexto);

    const onBorrarUsuario = (id) => {
        handlerBorrarUsuario(id);
    }

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                {!login.isAdmin ||
                    <>
                        <td>
                            <button
                                type="button"
                                className='btn btn-info btn-sm'
                                onClick={() => handlerUsuarioSeleccionadoForma(
                                    {
                                        id,
                                        username,
                                        email,
                                        password,
                                        admin
                                    }
                                )}
                            >
                                Editar
                            </button>
                        </td>
                        <td>
                            <NavLink
                                className={'btn btn-secondary btn-sm'}
                                to={'/usuarios/edicion/' + id}
                            >Editar con Ruta</NavLink>
                        </td>
                        <td>
                            <button
                                type="button"
                                className='btn btn-danger btn-sm'
                                onClick={() => onBorrarUsuario(id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </>
                }
            </tr>
        </>
    );
}

VistaRenglonUsuario.propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string,
    admin: PropTypes.bool
}
