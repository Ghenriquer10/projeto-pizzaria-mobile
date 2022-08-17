import axios from "axios";

const api = axios.create({
    baseURL: 'https://projeto-pizzaria-backend.herokuapp.com'
})

export { api }