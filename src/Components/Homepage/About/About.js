import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './About.css'

const About = () => {
    return (
        <div id='about' className='container mb-5'>
            <div className='row about_us_home_box'>
                <div className='col-lg-7 col-sm-12 col-md-12'>
                    <h1>We Are Medico A Medical Clinic</h1>
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
                    <HashLink to = "/home#services">
                    <button className='regular_button custom_bg_secondary mt-3'>Our Services</button>
                    </HashLink>
                </div>
                <div className='col-lg-5 col-sm-12 col-md-12 img_about_box'>
                    <img src='https://i.ibb.co/P4T9j2Q/resized-image-Promo-3.jpg' className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default About;