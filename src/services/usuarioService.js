import axios from 'axios';

const BASE_URL = 'http://192.168.1.136:8080/api/v1/usuarios';

export const listarUsuarios = async () => {    
    try {
        const respuesta = await axios.get(BASE_URL.concat('/listar'));
        //console.log('respuesta listarUsuarios: ', respuesta);
        return respuesta;
    } catch (error) {
        console.error('error en listarUsuarios: ', error);
    }
    return null;
}

export const guardar = async ({username, email, password}) => {
    try {
        return await axios.post(BASE_URL.concat('/crear'),
            {
                username, 
                email, 
                password
            }
        );
    } catch (error) {
        console.error('error en guardar: ', error);
    }
    return undefined;
}

export const actualizar = async ({id, username, email}) => {
    try {
        return await axios.put(`${BASE_URL}/modificar/${id}`,
            {
                username, 
                email
            }
        );
    } catch (error) {
        console.error('error en actualizar: ', error);
    }
    return undefined;
}

export const borrar = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/borrar/${id}`);
    } catch (error) {
        console.error('error en borrar: ', error);
    }
    return undefined;
}
