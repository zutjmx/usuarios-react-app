import axios from 'axios';

const BASE_URL = 'http://192.168.1.136:8080/api/v1/usuarios';

const config = () => {
    return {
        headers : {
            'Authorization': sessionStorage.getItem('token'),
            'Content-Type': 'application/json',
        }
    }
} 

export const listarUsuarios = async () => {    
    try {
        const respuesta = await axios.get(BASE_URL.concat('/listar'));        
        return respuesta;
    } catch (error) {
        console.error('error en listarUsuarios: ', error);
    }
    return null;
}

export const guardar = async ({username, email, password, admin}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await axios.post(BASE_URL.concat('/crear'),
            {
                username, 
                email, 
                password,
                admin
            }, config()
        );
    } catch (error) {
        console.error('error en guardar: ', error);
        throw error;
    }
}

export const actualizar = async ({id, username, email, admin}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await axios.put(`${BASE_URL}/modificar/${id}`,
            {
                username, 
                email,
                admin
            }, config()
        );
    } catch (error) {
        console.error('error en actualizar: ', error);
        throw error;
    }
}

export const borrar = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/borrar/${id}`, config());
    } catch (error) {
        console.error('error en borrar: ', error);
        throw error;
    }
    return undefined;
}
