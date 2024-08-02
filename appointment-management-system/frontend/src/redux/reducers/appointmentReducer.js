const initialState = {
    appointments: [],
    error: null,
};

const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_APPOINTMENTS_SUCCESS':
            return {
                ...state,
                appointments: action.payload,
                error: null,
            };
        case 'FETCH_APPOINTMENTS_FAILURE':
        case 'CREATE_APPOINTMENT_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        case 'CREATE_APPOINTMENT_SUCCESS':
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default appointmentReducer;
