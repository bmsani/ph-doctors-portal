import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'> Try another day</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : "space"} Available</p>
                    <div className="card-actions justify-end">
                        <label
                            htmlFor="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-sm btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase my-2">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;