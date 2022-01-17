import React, { useEffect, useState } from 'react';

const useServices = () => {

    // load data from extranal server......... if data not loaded i will add this json file in the public folder => our_sirvices.json
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arefinbayazid/services-api/main/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))
    }, []);
    return services;
};

export default useServices;