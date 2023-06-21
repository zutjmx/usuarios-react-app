import { PaginaUsuarios } from './pages/PaginaUsuarios';
import { PaginaLogin } from "./auth/pages/PaginaLogin";
import { Navbar } from './components/layout/Navbar';
import { useAuth } from './auth/hooks/useAuth';

export const UsuariosApp = () => {

    const {login, handlerLogin, handlerLogout} = useAuth();

    return (
        <>
            {
                login.isAuth? 
                (<>
                    <Navbar handlerLogout={handlerLogout} login={login} />
                    <PaginaUsuarios />
                </>)
                 
                : <PaginaLogin handlerLogin={handlerLogin} />
            }
        </>
    );
}
