import { generaArregloUsuarios, generaUsuarioVacio, generaUsuarioLoginVacio, generaDatos } from '../data/datosUsuarios';

export const getUsuarios = () => {
    return generaArregloUsuarios();
}

export const getUsuarioInicial = () => {
    return generaUsuarioVacio();
}

export const getErrorInicial = () => {
	const errorInicial = {
		username: '',
		email: '',
		password: '',
	}
	return errorInicial;
}

export const getUsuarioLoginInicial = () => {
    return generaUsuarioLoginVacio();
}

export const getLoginInicial = () => {
	const loginInicial = {
		isAuth: false,
		isAdmin: false,
		user: undefined,
	}
	return loginInicial;
}

export const getDatos = () => {
	return generaDatos();
}

export const validaEmail = (email) => {
    // Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(email) ){
		return true;
	}else{
		return false;
	}
}
