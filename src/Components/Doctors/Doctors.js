import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {

    // load data from public folder and show it in doctor component : for showing our some doctor images
    const [doctor, setDoctor] = useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    }, [])
    return (
        <div id='doctor' className='container doctors_container'>
            {
                doctor.map(item => <Doctor key={item.imgID} doctor = {item} />)           
            }
        </div>
    );
};

export default Doctors;