import { useReducer } from "react";
import Swal from "sweetalert2";
import { loginReducer } from '../../auth/reducers/loginReducer';
import { getLoginInicial } from '../../services/servicioUsuarios';
const logiInicial = JSON.parse(sessionStorage.getItem('login')) || getLoginInicial();

export const useAuth = () => {

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
            sessionStorage.setItem('login',JSON.stringify({isAuth: true, user: user}));
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