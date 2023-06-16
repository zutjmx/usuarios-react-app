import PropTypes from 'prop-types';
import { VistaRenglonUsuario } from './VistaRenglonUsuario';

export const VistaListaUsuarios = ({handlerBorrarUsuario,handlerUsuarioSeleccionadoForma,usuarios=[]}) => {
    return (
        <>
            <div className="card">
                <h5 className="card-header">Lista de Usuarios</h5>
                <div className="card-body">                    
                    <table className="table table-hover table-striped table-success">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Usuario</th>
                                <th>Email</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map(({id, username, email, password}) => (
                                    <VistaRenglonUsuario key={id}
                                                         id={id} 
                                                         username={username}
                                                         email={email}
                                                         password={password}
                                                         handlerBorrarUsuario={handlerBorrarUsuario}
                                                         handlerUsuarioSeleccionadoForma={handlerUsuarioSeleccionadoForma}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

VistaListaUsuarios.propTypes = {
    usuarios: PropTypes.array.isRequired,
    handlerBorrarUsuario: PropTypes.any.isRequired,
    handlerUsuarioSeleccionadoForma: PropTypes.any.isRequired
}
