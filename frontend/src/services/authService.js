import axios from 'axios';

const API_URL = 'http://localhost:3500/api/clients';

const register = (clientData) => {
    return axios.post(`${API_URL}/register`, clientData);
};

const login = (credentials) => {
    return axios.post(`${API_URL}/login`, credentials);
};

const getProfile = (token) => {
    return axios.get(`${API_URL}/profile`, {
        headers: { 'x-auth-token': token }
    });
};

export default {
    register,
    login,
    getProfile,
};