import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div>
            <div className='flex'>
                <div className="flex-1">
                    <img src={doctor} alt="" />
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default MakeAppointment;