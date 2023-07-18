import { createSlice } from '@reduxjs/toolkit';
import { getLoginInicial } from '../../../services/servicioUsuarios';

const loginInicial = JSON.parse(sessionStorage.getItem('login')) || getLoginInicial();

export const authSlice = createSlice({
    name: 'auth',
    initialState: loginInicial,
    reducers: {
        onLogin: (state, action) => {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;
        },
        onLogout:  (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
        }
    }
});

export const {onLogin,onLogout} = authSlice.actions;
