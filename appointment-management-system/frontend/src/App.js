import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AppointmentList from './components/AppointmentList';
import AppointmentForm from './components/AppointmentForm';
import CustomerList from './components/CustomerList';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Appointment Management System</h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/appointments" component={AppointmentList} />
                    <Route path="/create-appointment" component={AppointmentForm} />
                    <Route path="/customers" component={CustomerList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
