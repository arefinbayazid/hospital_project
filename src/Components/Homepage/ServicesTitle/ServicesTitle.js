import React, { useEffect, useState } from 'react';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import './ServicesTitle.css'

const ServicesTitle = () => {

    // load data from public folder for showing our services experience and others information. this file are very small but i think this value change dynamically in feature .
    const[serviceInfo, setServiceInfo] = useState([])
    useEffect(()=>{
        fetch('./info.json')
        .then(res => res.json())
        .then(data => setServiceInfo(data))
    })
    
    return (
        <div className='service_title_container' id='services'>
            <div className='services_title_box py-5'>
                <p className='services_title'>Our Services</p>
                <h1>Food village provide fresh foods</h1>
                <div className='service_info_container pt-3'>
                    {
                        serviceInfo.map(item => <ServicesInfo key = {item.id} items = {item}></ServicesInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesTitle;