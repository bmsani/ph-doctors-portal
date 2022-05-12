import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
  
    return (
        <div>
            <div class="hero h-[60vh] bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;