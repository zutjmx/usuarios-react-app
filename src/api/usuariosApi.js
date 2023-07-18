import axios from 'axios';

const usuariosApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_USUARIOS_BASE_URL}/api/v1/usuarios`
});

usuariosApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token'),        
    }
    return config;
});

export default usuariosApi;
