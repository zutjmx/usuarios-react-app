import usuariosApi from '../api/usuariosApi';

const BASE_URL = '';

export const listarUsuarios = async () => {    
    try {
        const respuesta = await usuariosApi.get(BASE_URL.concat('/listar'));        
        return respuesta;
    } catch (error) {
        console.error('error en listarUsuarios: ', error);
        throw error;
    }
}

export const paginarUsuarios = async (pagina = 0) => {    
    try {
        const respuesta = await usuariosApi.get(`${BASE_URL}/paginar/${pagina}`);        
        return respuesta;
    } catch (error) {
        console.error('error en paginarUsuarios: ', error);
        throw error;
    }
}

export const guardar = async ({username, email, password, admin}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await usuariosApi.post(BASE_URL.concat('/crear'),
            {
                username, 
                email, 
                password,
                admin
            }
        );
    } catch (error) {
        console.error('error en guardar: ', error);
        throw error;
    }
}

export const actualizar = async ({id, username, email, admin}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return await usuariosApi.put(`${BASE_URL}/modificar/${id}`,
            {
                username, 
                email,
                admin
            }
        );
    } catch (error) {
        console.error('error en actualizar: ', error);
        throw error;
    }
}

export const borrar = async (id) => {
    try {
        await usuariosApi.delete(`${BASE_URL}/borrar/${id}`);
    } catch (error) {
        console.error('error en borrar: ', error);
        throw error;
    }
    return undefined;
}
