import { PaginaLogin } from "./auth/pages/PaginaLogin";
import { useAuth } from './auth/hooks/useAuth';
import { UsuarioRoutes } from './routes/UsuarioRoutes';
import { Navigate, Route, Routes } from 'react-router-dom';

export const UsuariosApp = () => {

    const {login, handlerLogin, handlerLogout} = useAuth();

    return (
        <Routes>
            {
                login.isAuth? 
                (
                    <Route path="/*" element={<UsuarioRoutes login={login} handlerLogout={handlerLogout} />}/>
                )                 
                : <>
                    <Route path="/login" element={<PaginaLogin handlerLogin={handlerLogin} />}/> 
                    <Route path="/*" element={<Navigate to="/login" />}/> 
                </>                
            }
        </Routes>
    );
}
