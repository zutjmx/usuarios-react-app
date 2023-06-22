import { useContext } from 'react';
import { VistaRenglonUsuario } from './VistaRenglonUsuario';
import { UsuarioContexto } from '../context/UsuarioContexto';

export const VistaListaUsuarios = () => {

    const {usuarios} = useContext(UsuarioContexto);
    
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
                                <th>Editar con Ruta</th>
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
