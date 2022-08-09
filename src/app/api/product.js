import axios from 'axios';
import config from "../../config"

export const getProduct = async({params}) => {
    return await axios.get(`${config.api_host}/api/products`, {params}, { headers: config.authHeader()})
}

export const getCategory = async() => {
    return await axios.get(`${config.api_host}/api/categories`, { headers: config.authHeader()})
}