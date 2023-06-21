import { Navigate, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';
import { Navbar } from "../components/layout/Navbar";
import { PaginaUsuarios } from '../pages/PaginaUsuarios';

export const UsuarioRoutes = ({handlerLogout,login}) => {
    return (
        <>
            <Navbar handlerLogout={handlerLogout} login={login} />
            <Routes>
                <Route path="usuarios" element={<PaginaUsuarios />}/>
                <Route path="/" element={<Navigate to="usuarios" />}/>
            </Routes>
        </>
    );
}

UsuarioRoutes.propTypes = {
    login: PropTypes.object.isRequired,
    handlerLogout: PropTypes.any.isRequired,
}