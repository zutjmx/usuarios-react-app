//import { useContext } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
//import { AuthContexto } from './auth/context/AuthContexto';
import { useAuth } from "./auth/hooks/useAuth";
import { PaginaLogin } from './auth/pages/PaginaLogin';
import { UsuarioRoutes } from './routes/UsuarioRoutes';

export const AppRoutes = () => {
    //const {login} = useContext(AuthContexto);
    const {login} = useAuth();

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