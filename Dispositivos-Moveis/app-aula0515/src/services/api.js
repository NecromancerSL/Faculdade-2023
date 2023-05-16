import axios from "axios";

//acessa a api
export const api = axios.create({
    //pega o link da api
    baseURL: 'htttp://viacep.com.br/ws',
});


