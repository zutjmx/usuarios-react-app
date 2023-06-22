import { Navigate, Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';
import { Navbar } from "../components/layout/Navbar";
import { PaginaUsuarios } from '../pages/PaginaUsuarios';
import { PaginaRegistro } from '../pages/PaginaRegistro';
import { VistaPrimeReact } from '../components/VistaPrimeReact';
import { useUsuarios } from "../hooks/useUsuarios";

export const UsuarioRoutes = ({handlerLogout,login}) => {
    const { 
        usuarios, 
        usuarioFormaInicial, 
        usuarioSeleccionado, 
        formularioVisible,
        handlerAgregaUsuario, 
        handlerBorrarUsuario, 
        handlerUsuarioSeleccionadoForma, 
        handlerAbreForma, 
        handlerCierraForma 
    } = useUsuarios();

    return (
        <>
            <Navbar handlerLogout={handlerLogout} login={login} />
            <Routes>
                <Route path="usuarios" element={<PaginaUsuarios 
                                                    usuarios={usuarios}
                                                    usuarioFormaInicial={usuarioFormaInicial}
                                                    usuarioSeleccionado={usuarioSeleccionado} 
                                                    formularioVisible={formularioVisible}
                                                    handlerAgregaUsuario={handlerAgregaUsuario}
                                                    handlerBorrarUsuario={handlerBorrarUsuario} 
                                                    handlerUsuarioSeleccionadoForma={handlerUsuarioSeleccionadoForma} 
                                                    handlerAbreForma={handlerAbreForma} 
                                                    handlerCierraForma={handlerCierraForma}  
                />}/>
                <Route path="usuarios/registro" element={<PaginaRegistro
                                                            handlerAgregaUsuario={handlerAgregaUsuario}
                                                            usuarioFormaInicial={usuarioFormaInicial}
                />}/>
                <Route path="usuarios/edicion/:id" element={<PaginaRegistro
                                                            usuarios={usuarios}
                                                            handlerAgregaUsuario={handlerAgregaUsuario}
                                                            usuarioFormaInicial={usuarioFormaInicial}
                />}/>
                <Route path="usuarios/primereact" element={<VistaPrimeReact/>}/>
                <Route path="/" element={<Navigate to="usuarios" />}/>
            </Routes>
        </>
    );
}

UsuarioRoutes.propTypes = {
    login: PropTypes.object.isRequired,
    handlerLogout: PropTypes.any.isRequired,
}