import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query'


const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState([]);

    const formattedDate = format(date || new Date(), "PP")
    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json()))
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
    if(isLoading){
        return <Loading></Loading>
    }
    if(error){
        console.log(error);
    }
    return (
        <div className='w-11/12 mx-auto'>
            <p className='text-center text-xl text-secondary font-bold'>Avaliable appointments on{format(date || new Date(), 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                   services && services.map(service => <Service service={service} setTreatment={setTreatment} key={service._id}></Service>)
                }
            </div>
            {treatment && <BookingModal
             date={date} 
             treatment={treatment}
             setTreatment={setTreatment}
             refetch={refetch}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;