import PropTypes from 'prop-types';
import { UsuarioContexto } from './UsuarioContexto';
import { useUsuarios } from "../hooks/useUsuarios";

export const UsuarioProvider = ({children}) => {
    
    const {
        usuarios,
        usuarioFormaInicial,
        usuarioSeleccionado,
        formularioVisible,
        handlerAgregaUsuario,
        handlerBorrarUsuario,
        handlerUsuarioSeleccionadoForma,
        handlerAbreForma,
        handlerCierraForma,
        obtenerUsuarios
    } = useUsuarios();

    return (
        <>
            <UsuarioContexto.Provider
                value={
                    {
                        usuarios,
                        usuarioFormaInicial,
                        usuarioSeleccionado,
                        formularioVisible,
                        handlerAgregaUsuario,
                        handlerBorrarUsuario,
                        handlerUsuarioSeleccionadoForma,
                        handlerAbreForma,
                        handlerCierraForma,
                        obtenerUsuarios
                    }
            }
            >
                {children}
            </UsuarioContexto.Provider>
        </>
    );
}

UsuarioProvider.propTypes = {
    children: PropTypes.any,
}