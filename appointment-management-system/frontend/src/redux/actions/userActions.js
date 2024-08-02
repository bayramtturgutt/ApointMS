import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/login', { username, password });
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
};

export const register = (username, password) => async (dispatch) => {
    try {
        await axios.post('/api/auth/register', { username, password });
        dispatch({ type: 'REGISTER_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
};
