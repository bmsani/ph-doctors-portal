import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <div>
            <div style={{background: `url(${appointment})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='flex mt-24'>
                <div className="flex-1 hidden lg:block">
                    <img className='mt-[-150px]' src={doctor} alt="" />
                </div>
                <div className="flex-1 flex justify-center flex-col p-5">
                    <h4 className='text-2xl text-primary my-1'>Appointment</h4>
                    <h4 className='text-4xl text-white font-bold my-2'>Make an appointment Today</h4>
                    <p className="text-white my-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get the party</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;