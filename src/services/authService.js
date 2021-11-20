import http from "./httpService"
import { Success, Error } from '../utils/exceptionHandler';

export const onLogin = async (payload) => {
    await http.post('/login', payload)
        .then(res => {
            Success(res);
            const username = res.data.data.username;
            const fullName = res.data.data.full_name;
            const token = res.data.data.token;

            localStorage.getItem('username');
            localStorage.getItem('fullName');
            localStorage.getItem('token');

            localStorage.setItem("username", username);
            localStorage.setItem("fullName", fullName);
            localStorage.setItem("token", token);
        })
        .catch(err => Error(err))
}