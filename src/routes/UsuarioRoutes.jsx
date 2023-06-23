import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { PaginaUsuarios } from '../pages/PaginaUsuarios';
import { PaginaRegistro } from '../pages/PaginaRegistro';
import { VistaPrimeReact } from '../components/VistaPrimeReact';
import { UsuarioProvider } from '../context/UsuarioProvider';
import { VistaTablaPF } from '../components/VistaTablaPF';
import { VistaGetPosts } from '../components/VistaGetPosts';
import { AuthContexto } from '../auth/context/AuthContexto';
import { useContext } from "react";

export const UsuarioRoutes = () => {
    
    const { handlerLogout, login } = useContext(AuthContexto);

    return (
        <>
            <UsuarioProvider>
                <Navbar handlerLogout={handlerLogout} login={login} />
                <Routes>
                    <Route path="usuarios" element={<PaginaUsuarios/>} />
                    <Route path="usuarios/registro" element={<PaginaRegistro/>} />
                    <Route path="usuarios/edicion/:id" element={<PaginaRegistro/>} />
                    <Route path="usuarios/primereact" element={<VistaPrimeReact />} />
                    <Route path="usuarios/tablapf" element={<VistaTablaPF />} />
                    <Route path="usuarios/posts" element={<VistaGetPosts />} />
                    <Route path="/" element={<Navigate to="usuarios" />} />
                </Routes>
            </UsuarioProvider>
        </>
    );
}
