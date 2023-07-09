/* eslint-disable no-useless-catch */
import axios from "axios";

export const loginUser = async ({username, password}) => {
    try {
        return await axios.post('http://192.168.1.136:8080/login',{username, password});
    } catch (error) {
        throw error;
    }
}
