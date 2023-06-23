import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContexto } from '../../auth/context/AuthContexto';

export const Navbar = () => {

    const { handlerLogout, login } = useContext(AuthContexto);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Usuarios App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usuarios">Usuarios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usuarios/registro">Registrar Usuario</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usuarios/primereact">Componentes Primereact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usuarios/tablapf">Data Table Primereact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/usuarios/posts">Lista de Posts</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                        <span className="nav-item nav-link text-primary mx-3">
                            {login.user?.username}
                        </span>
                        <button className="btn btn-outline-success" onClick={handlerLogout}>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
