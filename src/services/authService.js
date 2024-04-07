import { authenticate, register } from '../api/authApi.';
import { setAuthToken, removeAuthToken } from '../utils/auth';

const login = async (credentials) => {
    const token = await authenticate(credentials);
    setAuthToken(token);
    return token;
};

const logout = () => {
    removeAuthToken();
};

const registerUser = async (user) => {
    const response = await register(user);
    return response;
};

export const authService = {
    login,
    logout,
    registerUser,
};
