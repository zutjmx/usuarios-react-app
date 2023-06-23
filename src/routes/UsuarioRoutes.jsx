import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { PaginaUsuarios } from '../pages/PaginaUsuarios';
import { PaginaRegistro } from '../pages/PaginaRegistro';
import { VistaPrimeReact } from '../components/VistaPrimeReact';
import { UsuarioProvider } from '../context/UsuarioProvider';
import { VistaTablaPF } from '../components/VistaTablaPF';
import { VistaGetPosts } from '../components/VistaGetPosts';

export const UsuarioRoutes = () => {

    return (
        <>
            <UsuarioProvider>
                <Navbar />
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
