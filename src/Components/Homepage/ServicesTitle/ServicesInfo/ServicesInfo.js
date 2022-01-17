import React from 'react';
import './ServicesInfo.css'

const ServicesInfo = ({items}) => {
    const {title, info} = items;
    return (
        <div className='info_cart'>
            <h5>{title}</h5>
            <h3>{info}</h3>
        </div>
    );
};

export default ServicesInfo;