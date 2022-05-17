
import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase my-2">{children}</button>
        </div>
    );
};

export default PrimaryBtn;