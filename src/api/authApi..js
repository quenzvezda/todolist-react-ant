import axios from './axios';

export const authenticate = async (credentials) => {
    const { data } = await axios.post('/authenticate', credentials);
    return data;
};

export const register = async (user) => {
    const { data } = await axios.post('/register', user);
    return data;
};
