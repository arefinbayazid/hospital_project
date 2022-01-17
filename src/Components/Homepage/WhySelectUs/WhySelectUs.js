import React, { useEffect, useState } from 'react';
import SelectOption from './SelectOption/SelectOption';
import './WhySelectUs.css'

const WhySelectUs = () => {

    // why select us json data load from public folder and save it selectUs state .
    const [selectUs, setSelectOption] = useState([]);
    useEffect(()=>{
        fetch('./why_select_us.json')
        .then(res => res.json())
        .then(data => setSelectOption(data))
    }, [])
    
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-lg-5 col-sm-12 col-md-12'>
                    <img src='https://i.ibb.co/87PY5Fh/Promo-Facebook-Facebook-feed-1.jpg' className='img-fluid' />
                </div>
                <div className='col-lg-7 col-sm-12 col-md-12 why_selected_box'>
                    <h2 className='text-center ps-3'>Why You Select Us</h2>
                    <div className='why_select_container ps-lg-5 mt-4'>
                        {
                            selectUs.map(item => <SelectOption key = {item.id} option ={item}></SelectOption>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySelectUs;