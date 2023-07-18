//import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//import { loginReducer } from '../../auth/reducers/loginReducer';
import { onLogin, onLogout } from "../../store/slices/auth/authSlice";
//import { getLoginInicial } from '../../services/servicioUsuarios';
import { loginUser } from "../services/authService";
//const logiInicial = JSON.parse(sessionStorage.getItem('login')) || getLoginInicial();

export const useAuth = () => {

    const tituloMensajes = 'Login';

    const dispatch = useDispatch();
    //const [login, dispatch] = useReducer(loginReducer, logiInicial);
    const {user,isAdmin,isAuth} = useSelector(state => state.auth);
    
    const navigate = useNavigate();

    const handlerLogin = async ({username, password}) => {
        try {
            const respuestaLogin = await loginUser({username, password});
            const token = respuestaLogin.data.token;
            const claims = JSON.parse(window.atob(token.split('.')[1]));
            console.log(claims);
            const user = {username: claims.username};
            dispatch(onLogin({user, isAdmin: claims.isAdmin}));
            sessionStorage.setItem('login',JSON.stringify({
                isAuth: true, 
                isAdmin: claims.isAdmin, 
                user: user
            }));
            sessionStorage.setItem('token',`Bearer ${token}`);
            Swal.fire(
                tituloMensajes,
                'Login exitoso',
                'success'
            );
            navigate('/usuarios');
        } catch(error) {
            if(error.response?.status == 401) {
                Swal.fire(
                    tituloMensajes,
                    'Login inválido',
                    'error'
                );
            } else if (error.response?.status == 403) {
                Swal.fire(
                    tituloMensajes,
                    'No tiene permisos',
                    'error'
                );
            } else {
                throw error;
            }            
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
                dispatch(onLogout());
                sessionStorage.removeItem('login');
                sessionStorage.removeItem('token');
                sessionStorage.clear();
                Swal.fire('Se cerró sesión', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Se permanece en la sesión', '', 'info')
            }
        });        
    }

    return {
        login: {user,isAdmin,isAuth},
        handlerLogin,
        handlerLogout
    }
}