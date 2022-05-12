import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-11/12 mx-auto text-white py-10'>
                <div className='text-center mx-auto w-[400px]'>
                    <h4 className='text-xl text-primary'>Contact us</h4>
                    <h4 className='text-3xl text-white font-bold my-5'>Stay connected with us</h4>
                    <div>
                        <form className='flex flex-col gap-4 text-accent' action="">
                        <input type="email" placeholder="Email Address" class="input" />
                        <input type="text" placeholder="Subject" class="input" />
                        <textarea class="textarea" placeholder="Bio"></textarea>
                        <PrimaryBtn>Submit</PrimaryBtn>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;