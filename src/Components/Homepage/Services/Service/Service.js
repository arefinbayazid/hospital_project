import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({item}) => {
    const {id, category, profileImg, title} = item;
    return (
        <div className='service_cart border'>
            <div>
                <img width={50} src={profileImg} />
            </div>
            <div className='mt-3 service_cart_info'>
                <h4 className='text-center'>{category}</h4>
                <p className='text-center fw-5'>{title}</p>
                <Link to = {`/services/${id}`}>
                <button className='details_button'>More Info</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;