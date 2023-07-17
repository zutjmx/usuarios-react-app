import { createSlice } from '@reduxjs/toolkit';
import { getErrorInicial, getUsuarioInicial } from '../../../services/servicioUsuarios';

export const usuarioFormaInicial = getUsuarioInicial();
const errorInicial = getErrorInicial();

export const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: {
        usuarios: [],
        usuarioSeleccionado: usuarioFormaInicial,
        formularioVisible: false,
        errores: errorInicial,
    },
    reducers: {
        agregarUsuario: (state, action) => {
            state.usuarios = [
                ...state.usuarios,
                {
                    ...action.payload
                }
            ];
            state.usuarioSeleccionado = usuarioFormaInicial;
            state.formularioVisible = false;
        },
        borrarUsuario: (state, action) => {
            state.usuarios = state.usuarios.filter(usuario => usuario.id !== action.payload);
        },
        actualizarUsuario: (state, action) => {
            state.usuarios = state.usuarios.map(u => {
                if(u.id === action.payload.id) {
                    return {
                        ...action.payload,
                        //password: u.password
                    };
                }
                return u;
            });
            state.usuarioSeleccionado = usuarioFormaInicial;
            state.formularioVisible = false;
        },
        cargandoUsuarios: (state, action) => {
            state.usuarios = action.payload;
        },
        onUsuarioSeleccionadoForma: (state, action) => {
            state.usuarioSeleccionado = action.payload;
            state.formularioVisible = true;
        },
        onAbreForma: (state) => {
            state.formularioVisible = true;
        },
        onCierraForma: (state) => {
            state.formularioVisible = false;
            state.usuarioSeleccionado = usuarioFormaInicial;
        },
        cargandoError: (state, {payload}) => {
            state.errores = payload;
        }
    },
});

export const {
    agregarUsuario,
    actualizarUsuario,
    borrarUsuario,
    cargandoUsuarios,
    onUsuarioSeleccionadoForma,
    onAbreForma,
    onCierraForma,
    cargandoError
} = usuariosSlice.actions;
