import axios from 'axios';
import config from "../../config";

export const login = async (email, password) => {
    return await axios
    .post(`${config.api_host}/auth/login`,{email, password})
    .then(function (response) {
                console.log(response);
                localStorage.setItem("user", JSON.stringify(response.data));
        })
    .catch(function (error) {
                console.log(error);
        });
}

export const about = () => {
    return axios.get(`${config.api_host}/auth/me`, { headers: config.authHeader()});
}

export const logout = () => {
    localStorage.removeItem("user");
}