import React from 'react';
import './SelectOption.css'

const SelectOption = ({option}) => {
    const {imgUrl, info} = option;
    return (
        <div className='why_select_us_option_container p-3'>
            <div className='option_cotainer_image'>
                <img width={50} src={imgUrl} />
            </div>
            <p className='mt-3 text-center text-secondary'>{info}</p>
        </div>
    );
};

export default SelectOption;