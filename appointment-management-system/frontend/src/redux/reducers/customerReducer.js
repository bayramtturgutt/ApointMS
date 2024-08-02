const initialState = {
    customers: [],
    error: null,
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CUSTOMERS_SUCCESS':
            return {
                ...state,
                customers: action.payload,
                error: null,
            };
        case 'FETCH_CUSTOMERS_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default customerReducer;
