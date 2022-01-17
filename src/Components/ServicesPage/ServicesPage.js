import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../hooks/useServices';
import ServicesSelected from './ServicesSelected/ServicesSelected';

const ServicesPage = () => {

    // use params give me a object which and which component was click so i use this method for khow which service want to learn user.
    const {id} = useParams()

    // get this services data form useServices hook.
    const servicesItem = useServices()
    
    // filtered form all services by clicked service and return me the actual value.
    const [selectedItem, setSelectedItem] = useState([]);
    useEffect(()=>{
        const filtedItem = servicesItem.filter(item=> item.id === parseFloat(id));
        setSelectedItem(filtedItem)
    }, [servicesItem]);
    
    return (
        <div className='container pt-5'>
            <div className='pt-5'>
                {
                    selectedItem.map(item => <ServicesSelected key = {item.id} item = {item}></ServicesSelected>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;