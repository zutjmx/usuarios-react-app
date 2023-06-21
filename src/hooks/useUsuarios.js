import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { usuariosReducer } from "../reducers/usuariosReducer";
import { getUsuarioInicial, getUsuarios } from "../services/servicioUsuarios";

const usuariosIniciales = getUsuarios();
const usuarioFormaInicial = getUsuarioInicial();

export const useUsuarios = () => {
    const [usuarios, dispatch] = useReducer(usuariosReducer, usuariosIniciales);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioFormaInicial);
    const [formularioVisible, setFormularioVisible] = useState(false);
    const navigate = useNavigate();

    const handlerUsuarioSeleccionadoForma = (usuario) => {
        setUsuarioSeleccionado({...usuario});
        setFormularioVisible(true);
    }

    const handlerAgregaUsuario = (usuario) => {
        let type;
        let titulo = '';
        let mensaje = '';

        if(usuario.id === 0) {
            titulo = 'Usuario Creado';
            type = 'agregarUsuario';
            mensaje = 'Se agregó el usuario';
        } else {
            titulo = 'Usuario Actualizado';
            type = 'actualizarUsuario';
            mensaje = 'Se actualizó el usuario';
        }

        dispatch({
            type,
            payload: usuario,
        });

        Swal.fire(
            titulo,
            mensaje,
            'success'
        );

        handlerCierraForma();
        navigate('/usuarios');
    }

    const handlerBorrarUsuario = (id) => {
        Swal.fire({
            title: `¿Quiere borrar el usuario con ID: ${id}?`,
            text: 'El borrado no podrá revertirse.',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Borrar',
            denyButtonText: `No Borrar`,
        }).then((result) => {
            if (result.isConfirmed) {
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
        handlerCierraForma
    }
}
