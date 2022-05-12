import React from 'react';
import Chair from '../../assets/images/chair.png'
import PrimaryBtn from '../Shared/PrimaryBtn';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className=''>
            <div class="hero min-h-screen container">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>Get started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;