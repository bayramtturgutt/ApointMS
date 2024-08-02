import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAppointment } from '../redux/actions/appointmentActions';

const AppointmentForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAppointment({ title, date }));
        setTitle('');
        setDate('');
    };

    return (
        <div>
            <h2>Create Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
