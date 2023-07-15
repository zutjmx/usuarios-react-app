import axios from 'axios';

const usuariosApi = axios.create({
    baseURL: 'http://192.168.1.136:8080/api/v1/usuarios'
});

usuariosApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token'),        
    }
    return config;
});

export default usuariosApi;
