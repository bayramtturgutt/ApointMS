import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import appointmentReducer from './reducers/appointmentReducer';
import customerReducer from './reducers/customerReducer';

const rootReducer = combineReducers({
    user: userReducer,
    appointments: appointmentReducer,
    customers: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
