import React from 'react';

const Doctor = ({doctor}) => {
    const {urlImage} = doctor;
    return (
        <div className="single_doctor_box  img-fluid">
            <img src={urlImage} className='img-fluid' />
        </div>
    );
};

export default Doctor;