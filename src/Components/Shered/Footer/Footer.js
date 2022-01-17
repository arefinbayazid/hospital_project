import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-0'>
                        <HashLink to="/home#home">
                            <h1 className='logo text-dark'>MediCo</h1>
                        </HashLink>
                        <p className='fs-5 text-secondary'>Far far away, behind the word mountains, far from the countries.</p>
                        <div className='social_link'>
                            <img width={35} src='https://i.ibb.co/0Zv3MXM/5296516-tweet-twitter-twitter-logo-icon.png' className='me-2' />
                            <img width={35} src='https://i.ibb.co/FbZLyVG/5296499-fb-facebook-facebook-logo-icon.png' className='me-2' />
                            <img width={35} src='https://i.ibb.co/TkVF2YL/5296520-bubble-chat-mobile-whatsapp-whatsapp-logo-icon.png' className='me-2' />
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-0 mt-2'>
                        <h4 className='important_link_title'>Important Links</h4>
                        <ul className="footer_important_links mb-lg-0 w-100 p-0 ">
                            <li><HashLink to="/home#home">Home</HashLink></li>
                            <li><HashLink to="/home#about">About</HashLink></li>
                            <li><HashLink to="/home#services">Services</HashLink></li>
                            <li><HashLink to="/doctors#doctor">Doctors</HashLink></li>
                            <li><HashLink to="/contact#contact">Contact</HashLink></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-0 mt-2'>
                        <h4>Contact</h4>
                        <ul className="footer_important_links mb-lg-0 w-100 p-0 ">
                            <li className='text-secondary'>Email</li>
                            <li className='text-secondary'>Address</li>
                            <li className='text-secondary'>Phone Number</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-0 mt-2'>
                        <h4>Subscribe</h4>
                        <div>
                            <input className='footer_input_email' type="email" placeholder = "Enter your email" />
                            <br />
                            <button className='footer_input_button'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr className='copyright_horizontal' />
                <p className='text-center text-secondary mb-0'>Bayazid Arefin</p>
            </div>
        </div>
    );
};

export default Footer;