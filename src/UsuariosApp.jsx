import { PaginaLogin } from "./auth/pages/PaginaLogin";
import { UsuarioRoutes } from './routes/UsuarioRoutes';
import { AuthContexto } from './auth/context/AuthContexto';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from "react";

export const UsuariosApp = () => {

    const {login} = useContext(AuthContexto);

    return (
        <Routes>
            {
                login.isAuth? 
                (
                    <Route path="/*" element={<UsuarioRoutes />}/>
                )                 
                : <>
                    <Route path="/login" element={<PaginaLogin />}/> 
                    <Route path="/*" element={<Navigate to="/login" />}/> 
                </>                
            }
        </Routes>
    );
}
