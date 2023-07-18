/* eslint-disable no-useless-catch */
import axios from "axios";

export const loginUser = async ({username, password}) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_USUARIOS_BASE_URL}/login`,{username, password});
    } catch (error) {
        throw error;
    }
}
