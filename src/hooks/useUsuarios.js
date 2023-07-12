import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { usuariosReducer } from "../reducers/usuariosReducer";
import { getUsuarioInicial/* , getUsuarios */, getErrorInicial } from "../services/servicioUsuarios";
import { actualizar, borrar, guardar, listarUsuarios } from "../services/usuarioService";
import { AuthContexto } from '../auth/context/AuthContexto';

const usuariosIniciales = [];
const usuarioFormaInicial = getUsuarioInicial();
const errorInicial = getErrorInicial();

export const useUsuarios = () => {
    const [usuarios, dispatch] = useReducer(usuariosReducer, usuariosIniciales);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioFormaInicial);
    const [formularioVisible, setFormularioVisible] = useState(false);
    const [errores, setErrores] = useState(errorInicial);
    const navigate = useNavigate();
    const {login} = useContext(AuthContexto);

    const obtenerUsuarios = async () => {
        const resultado = await listarUsuarios();
        //console.log('resultado: ', resultado);
        dispatch({
            type: 'cargandoUsuarios',
            payload: resultado.data,
        });
    }

    const handlerUsuarioSeleccionadoForma = (usuario) => {
        setUsuarioSeleccionado({...usuario});
        setFormularioVisible(true);
    }

    const handlerAgregaUsuario = async (usuario) => {
        let type;
        let titulo = '';
        let mensaje = '';
        let respuesta;

        if(!login.isAdmin) {
            return;
        }

        try {
            if(usuario.id === 0) {
                titulo = 'Usuario Creado';
                type = 'agregarUsuario';
                mensaje = 'Se agregó el usuario';
                respuesta = await guardar(usuario);
            } else {
                titulo = 'Usuario Actualizado';
                type = 'actualizarUsuario';
                mensaje = 'Se actualizó el usuario';
                respuesta = await actualizar(usuario);
            }
    
            dispatch({
                type,
                payload: respuesta.data,
            });
    
            Swal.fire(
                titulo,
                mensaje,
                'success'
            );
    
            handlerCierraForma();
            navigate('/usuarios');
        } catch (error) {            
            if (error.response && error.response.status == 400) {
                setErrores(error.response.data);
                //console.error(error.response.data);
            } else if (error.response && error.response.status == 500) {
                //console.log("Error en la petición");
                setErrores({username: error.response.data.error, email:error.response.data.error});
            } else {
                setErrores({errorGeneral: error.response.data.error});
                throw error;
            }
        }

    }

    const handlerBorrarUsuario = (id) => {
        
        if(!login.isAdmin) {
            return;
        }

        Swal.fire({
            title: `¿Quiere borrar el usuario con ID: ${id}?`,
            text: 'El borrado no podrá revertirse.',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Borrar',
            denyButtonText: `No Borrar`,
        }).then((result) => {
            if (result.isConfirmed) {
                borrar(id);
                dispatch({
                    type: 'borrarUsuario',
                    payload: id,
                });
                Swal.fire('Borrado', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('No se borró', '', 'info')
            }
        })
    }

    const handlerAbreForma = () => {
        setFormularioVisible(true);
    }

    const handlerCierraForma = () => {
        setFormularioVisible(false);
        setUsuarioSeleccionado(usuarioFormaInicial);
        setErrores(errorInicial);
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
