import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UsuarioContexto } from '../context/UsuarioContexto';

export const VistaRenglonUsuario = ({id, username, email, password}) => {

    const { handlerBorrarUsuario, handlerUsuarioSeleccionadoForma} = useContext(UsuarioContexto);

    const onBorrarUsuario = (id) => {
        handlerBorrarUsuario(id);
    }

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <button 
                        type="button" 
                        className='btn btn-info btn-sm'
                        onClick={() => handlerUsuarioSeleccionadoForma(
                            {
                                id,
                                username,
                                email,
                                password                                
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
            </tr>
        </>
    );
}

VistaRenglonUsuario.propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}
