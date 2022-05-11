import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='w-11/12 mx-auto mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <InfoCard img={clock} cardTitle={'Opening Hours'} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
                <InfoCard img={location} cardTitle={'Visit our location'} bgClass="bg-accent"></InfoCard>
                <InfoCard img={phone} cardTitle={'Contact us now'} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            </div>
        </div>
    );
};

export default Info;