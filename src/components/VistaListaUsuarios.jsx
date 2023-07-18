import { useContext } from 'react';
import { VistaRenglonUsuario } from './VistaRenglonUsuario';
//import { UsuarioContexto } from '../context/UsuarioContexto';
import { AuthContexto } from '../auth/context/AuthContexto';
import { useUsuarios } from '../hooks/useUsuarios';

export const VistaListaUsuarios = () => {

    //const {usuarios} = useContext(UsuarioContexto);
    const {usuarios} = useUsuarios();
    const {login} = useContext(AuthContexto);
    
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
                                {!login.isAdmin || 
                                    <>
                                        <th>Editar</th>
                                        <th>Editar con Ruta</th>
                                        <th>Eliminar</th>
                                    </>
                                }
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map(({id, username, email, password, admin}) => (
                                    <VistaRenglonUsuario key={id}
                                                         id={id} 
                                                         username={username}
                                                         email={email}
                                                         password={password}
                                                         admin={admin}
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
