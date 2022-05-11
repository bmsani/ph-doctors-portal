import React from 'react';
import Service from './Service';
import dentalOne from '../../assets/images/fluoride.png'
import dentalTow from '../../assets/images/cavity.png'
import dentalThree from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div>
            <h4 className='uppercase text-center font-bold text-primary mt-14 text-xl'>Our Services</h4>
            <h4 className='text-center font-bold text-accent mt-6 text-5xl mb-14'>Services We Provide</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Service img={dentalOne} ServiceTitle={'Fluride Treatment'}></Service>
                <Service img={dentalTow} ServiceTitle={'Cavity Filling'}></Service>
                <Service img={dentalThree} ServiceTitle={'Teeth Whitening'}></Service>
            </div>
        </div>
    );
};

export default Services;