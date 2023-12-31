import { generaArregloUsuarios, generaUsuarioVacio, generaUsuarioLoginVacio } from '../data/datosUsuarios';

export const getUsuarios = () => {
    return generaArregloUsuarios();
}

export const getUsuarioInicial = () => {
    return generaUsuarioVacio();
}

export const getUsuarioLoginInicial = () => {
    return generaUsuarioLoginVacio();
}

export const getLoginInicial = () => {
	const loginInicial = {
		isAuth: false,
		user: undefined,
	}
	return loginInicial;
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
