import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333/'
});

export const useAPI = () => ({
    validacaoToken: async (token: string) =>{
        const resposta = await api.post('validacao', { token });
        return resposta.data;
    },

    signin: async (formValores:object) => {
        const resposta = await api.post('login', {formValores});
        return resposta.data;
    },

    logout: async () => {
        const resposta = await api.post('logout');
        return resposta.data;
    } 
})
