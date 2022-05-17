import React from 'react';
import Chair from '../../assets/images/chair.png'
import PrimaryBtn from '../Shared/PrimaryBtn';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=''>
            <div className="hero min-h-screen container">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>Get started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;