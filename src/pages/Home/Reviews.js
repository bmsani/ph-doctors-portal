import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate pariatur sint numquam adipisci quo. Blanditiis!</p>
                    <div className='flex items-center gap-5 mt-3'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-accent text-2xl'> {review.name}</h4>
                            <h4>California</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;