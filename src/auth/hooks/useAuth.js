import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginReducer } from '../../auth/reducers/loginReducer';
import { getLoginInicial } from '../../services/servicioUsuarios';
import { loginUser } from "../services/authService";
const logiInicial = JSON.parse(sessionStorage.getItem('login')) || getLoginInicial();

export const useAuth = () => {

    const tituloMensajes = 'Login';

    const [login, dispatch] = useReducer(loginReducer, logiInicial);
    const navigate = useNavigate();

    const handlerLogin = async ({username, password}) => {
        try {
            const respuestaLogin = await loginUser({username, password});
            const token = respuestaLogin.data.token;
            const user = {username: respuestaLogin.data.username};
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login',JSON.stringify({isAuth: true, user: user}));
            sessionStorage.setItem('token',token); //temporal
            Swal.fire(
                tituloMensajes,
                'Login exitoso',
                'success'
            );
            navigate('/usuarios');
        } catch(error) {
            Swal.fire(
                tituloMensajes,
                'Login inválido',
                'error'
            );
        }
    }

    const handlerLogout = () => {
        Swal.fire({
            title: 'Logout',
            text: '¿Está seguro que quiere cerrar su sesión?',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'logout',            
                });
                sessionStorage.removeItem('login');
                Swal.fire('Se cerró sesión', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Se permanece en la sesión', '', 'info')
            }
        });        
    }

    return {
        login,
        handlerLogin,
        handlerLogout
    }
}