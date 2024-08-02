import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../redux/actions/customerActions';

const CustomerList = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
