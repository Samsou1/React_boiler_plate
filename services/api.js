import axios from "axios";
import Cookies from "js-cookie"



const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use(({ headers, ...config }) => ({
    ...config,
    headers: {
        ...headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${headers.Authorization ||  Cookies.get('token')}`,
    },
}));

export default class APIManager {
    static async registerUser(data) {
        const response = await API.post('/auth/register', data);
        Cookies.set("token", response.headers.authorization)
        return response.data;
    }

    static async LoginUser (data) {
        const response = await API.post("/users/sign_in", data);
        Cookies.set("token", response.headers.authorization)
        return response.data
    }
}