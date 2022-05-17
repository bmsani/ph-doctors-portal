import React from 'react';

const Service = ({ img, ServiceTitle }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-28" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ServiceTitle}</h2>
                    <p>If a dog chews shoes whose shoes does he choose? You know cavity nowadys</p>
                </div>
            </div>
        </div>
    );
};

export default Service;