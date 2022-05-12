import React from 'react';
import Service from './Service';
import dentalOne from '../../assets/images/fluoride.png';
import dentalTow from '../../assets/images/cavity.png';
import dentalThree from '../../assets/images/whitening.png';
import treatmentPic from '../../assets/images/treatment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Services = () => {
    return (
        <div>
            <h4 className='uppercase text-center font-bold text-primary mt-14 text-xl'>Our Services</h4>
            <h4 className='text-center font-bold text-accent mt-6 text-5xl mb-14'>Services We Provide</h4>
            <div className=' w-11/12 mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <Service img={dentalOne} ServiceTitle={'Fluride Treatment'}></Service>
                <Service img={dentalTow} ServiceTitle={'Cavity Filling'}></Service>
                <Service img={dentalThree} ServiceTitle={'Teeth Whitening'}></Service>
            </div>
            </div>
            <div className='w-11/12 mx-auto mt-12'>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row gap-10">
                        <img src={treatmentPic} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryBtn>Get started</PrimaryBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;