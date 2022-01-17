import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <div id="home" className='header_box'>
            <div className=' container'>
                <div className='wellcome_title_box'>
                    <p className='wellcome_title'>WELCOME TO MEDICO</p>
                    <h1>We are here for your Care</h1>
                    <p>A hospital is a health care institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment. </p>
                    <HashLink to = "/home#about">
                    <button className='regular_button custom_bg_primary mt-2'>About Us</button>
                    </HashLink>
                </div>
            </div>            
        </div>
    );
};

export default Header;