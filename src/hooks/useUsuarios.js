//import { useContext/* , useState */ } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {  getErrorInicial } from "../services/servicioUsuarios";
import { actualizar, borrar, guardar, listarUsuarios } from "../services/usuarioService";
//import { AuthContexto } from '../auth/context/AuthContexto';
import { useDispatch, useSelector } from "react-redux";
import { agregarUsuario, actualizarUsuario, 
        borrarUsuario, cargandoUsuarios, 
        onUsuarioSeleccionadoForma, onAbreForma, 
        onCierraForma, usuarioFormaInicial, 
        cargandoError } from "../store/slices/usuarios/usuariosSlice";
import { useAuth } from "../auth/hooks/useAuth";

const errorInicial = getErrorInicial();

export const useUsuarios = () => {
    const {usuarios, usuarioSeleccionado, formularioVisible, errores} = useSelector(state => state.usuarios);
    const dispatch = useDispatch();
    
    //const [errores, setErrores] = useState(errorInicial);
    const navigate = useNavigate();
    //const {login, handlerLogout} = useContext(AuthContexto);
    const {login, handlerLogout} = useAuth();

    const obtenerUsuarios = async () => {        
        try {
            const resultado = await listarUsuarios();
            dispatch(cargandoUsuarios(resultado.data));    
        } catch (error) {
            if (error.response && error.response.status == 401) {
                console.warn('Sesion expirada');
                handlerLogout();
            }
        }        
    }

    const handlerUsuarioSeleccionadoForma = (usuario) => {
        dispatch(onUsuarioSeleccionadoForma({...usuario}));
    }

    const handlerAgregaUsuario = async (usuario) => {
        let titulo = '';
        let mensaje = '';
        let respuesta;

        if(!login.isAdmin) {
            return;
        }

        try {
            if(usuario.id === 0) {
                titulo = 'Usuario Creado';
                mensaje = 'Se agregó el usuario';
                respuesta = await guardar(usuario);
                dispatch(agregarUsuario(respuesta.data));
            } else {
                titulo = 'Usuario Actualizado';
                mensaje = 'Se actualizó el usuario';
                respuesta = await actualizar(usuario);
                dispatch(actualizarUsuario(respuesta.data));
            }
    
            Swal.fire(
                titulo,
                mensaje,
                'success'
            );
    
            handlerCierraForma();
            navigate('/usuarios');
        } catch (error) {            
            if (error.response && error.response.status == 400) {
                //setErrores(error.response.data);
                dispatch(cargandoError(error.response.data));                
            } else if (error.response && error.response.status == 500) {                
                //setErrores({username: error.response.data.error, email:error.response.data.error});
                dispatch(cargandoError({username: error.response.data.error, email:error.response.data.error}));
            } else if (error.response && error.response.status == 401) {
                console.warn('Sesion expirada');
                handlerLogout();
            } else {
                //setErrores({errorGeneral: error.response.data.error});
                dispatch(cargandoError({errorGeneral: error.response.data.error}));
                throw error;
            }
        }

    }

    const handlerBorrarUsuario = (id) => {
        
        if(!login.isAdmin) {
            return;
        }

        try {
            Swal.fire({
                title: `¿Quiere borrar el usuario con ID: ${id}?`,
                text: 'El borrado no podrá revertirse.',
                icon: 'warning',
                showDenyButton: true,
                confirmButtonText: 'Borrar',
                denyButtonText: `No Borrar`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await borrar(id);
                    dispatch(borrarUsuario(id));
                    Swal.fire('Borrado', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('No se borró', '', 'info')
                }
            })
        } catch (error) {
            if (error.response && error.response.status == 401) {
                console.warn('Sesion expirada');
                handlerLogout();
            }
        }

    }

    const handlerAbreForma = () => {
        dispatch(onAbreForma());
    }

    const handlerCierraForma = () => {
        dispatch(onCierraForma());
        //setErrores(errorInicial);
        dispatch(cargandoError(errorInicial));
    }

    return {
        usuarios,
        usuarioSeleccionado,
        usuarioFormaInicial,
        formularioVisible,
        handlerAgregaUsuario,
        handlerBorrarUsuario,
        handlerUsuarioSeleccionadoForma,
        handlerAbreForma,
        handlerCierraForma,
        obtenerUsuarios,
        errores
    }
}
