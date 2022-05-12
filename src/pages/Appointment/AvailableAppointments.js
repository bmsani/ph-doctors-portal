import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='w-11/12 mx-auto'>
            <p className='text-center text-xl text-secondary font-bold'>Avaliable appointments on{format(date || new Date(), 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;