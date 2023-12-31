import PropTypes from 'prop-types';

export const VistaRenglonUsuario = ({id, username, email, password, handlerBorrarUsuario, handlerUsuarioSeleccionadoForma}) => {

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
    handlerBorrarUsuario: PropTypes.any.isRequired,
    handlerUsuarioSeleccionadoForma: PropTypes.any.isRequired,
}
