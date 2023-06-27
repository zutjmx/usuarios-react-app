import axios from 'axios';

const urlBase = 'http://192.168.1.136:8080/api/v1/usuarios';

export const listarUsuarios = async () => {    
    try {
        const respuesta = await axios.get(urlBase.concat('/listar'));
        //console.log('respuesta listarUsuarios: ', respuesta);
        return respuesta;
    } catch (error) {
        console.error('error en listarUsuarios: ', error);        
    }
    return null;
}
