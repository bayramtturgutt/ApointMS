import axios from 'axios';

export const fetchCustomers = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/customers');
        dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_CUSTOMERS_FAILURE', payload: error.message });
    }
};
