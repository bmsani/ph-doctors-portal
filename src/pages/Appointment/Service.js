import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Service = ({ service }) => {
    const {name, slots} = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body items-center">
                    <h2 class="card-title text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                            ? <span>{slots[0]}</span>
                            :<span className='text-red-500'> Try another day</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : "space"} Available</p>
                    <div class="card-actions justify-end">
                        <PrimaryBtn>Book Appointment</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;