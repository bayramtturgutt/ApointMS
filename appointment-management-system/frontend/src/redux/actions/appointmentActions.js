import axios from 'axios';

export const fetchAppointments = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/appointments');
        dispatch({ type: 'FETCH_APPOINTMENTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_APPOINTMENTS_FAILURE', payload: error.message });
    }
};

export const createAppointment = (appointment) => async (dispatch) => {
    try {
        await axios.post('/api/appointments', appointment);
        dispatch({ type: 'CREATE_APPOINTMENT_SUCCESS' });
    } catch (error) {
        dispatch({ type: 'CREATE_APPOINTMENT_FAILURE', payload: error.message });
    }
};
