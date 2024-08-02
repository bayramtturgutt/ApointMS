import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../redux/actions/appointmentActions';

const AppointmentList = () => {
    const dispatch = useDispatch();
    const appointments = useSelector((state) => state.appointments);

    useEffect(() => {
        dispatch(fetchAppointments());
    }, [dispatch]);

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        {appointment.title} - {appointment.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
