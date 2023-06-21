import { useReducer } from "react";
import Swal from "sweetalert2";
import { PaginaUsuarios } from './pages/PaginaUsuarios';
import { PaginaLogin } from "./auth/pages/PaginaLogin";
import { loginReducer } from './auth/reducers/loginReducer';
import { getLoginInicial } from './services/servicioUsuarios';

const logiInicial = getLoginInicial();

export const UsuariosApp = () => {

    const tituloMensajes = 'Login';

    const [login, dispatch] = useReducer(loginReducer, logiInicial);

    const handlerLogin = ({username, password}) => {
        //TODO: Implementar validación de acceso del backend.
        if(username === 'zutjmx' && password === 'sistemas') {
            const user = {username: 'zutjmx'};
            dispatch({
                type: 'login',
                payload: user,
            });
            Swal.fire(
                tituloMensajes,
                'Login exitoso',
                'success'
            );
        } else {
            Swal.fire(
                tituloMensajes,
                'Login inválido',
                'error'
            );
        }
    }

    return (
        <>
            {
                login.isAuth? 
                <PaginaUsuarios /> 
                : <PaginaLogin handlerLogin={handlerLogin} />
            }
        </>
    );
}
