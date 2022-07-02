import React from 'react';

const Service = ({service}) => {
    const { name} = service;
    return (
        <div className='service'>
            <h2>{name}</h2>
        </div>
    );
};

export default Service;