import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { usuariosSlice } from "./slices/usuarios/usuariosSlice";

export const store = configureStore({
    reducer: {
        usuarios: usuariosSlice.reducer,
        auth: authSlice.reducer,
    },
});