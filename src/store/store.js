import { configureStore } from "@reduxjs/toolkit";
import { usuariosSlice } from "./slices/usuarios/usuariosSlice";

export const store = configureStore({
    reducer: {
        usuarios: usuariosSlice.reducer,
    },
});