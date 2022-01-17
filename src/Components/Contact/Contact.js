import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className='container contact_container'>
            <div className='contact_container_box'>

                {/* contact title */}
                <div className='contact_title'>
                    <h1 className='text-center'>Get In Touch</h1>
                    <p className='text-center'>We are friends, Share your problem or feedback for improve us</p>
                </div>
                
                {/* contact type shortcut information */}
                <div className='contact_info_shortcut'>
                    <div className='contact_info_shortcut_child'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <p>102 Fagol Road</p>
                    </div>
                    <div className='contact_info_shortcut_child shortcut_child_bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <p>01867588216</p>
                    </div>
                    <div className='contact_info_shortcut_child'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <p>arefin@gmail.com</p>
                    </div>
                </div>
                
                {/* contact field some input : text email and others */}
                <div className='contact_info_section'>
                    <div className='w-100'>
                        <div className='contact_input_item'>
                            <p>Your Name</p>
                            <div className='contact_option'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <input type="text" placeholder='Enter your name' />
                            </div>
                        </div>
                        <div className='contact_input_item'>
                            <p>Your Email</p>
                            <div className='contact_option'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <input type="email" placeholder='Enter your email' />
                            </div>
                        </div>
                        <div className='contact_input_item'>
                            <p>Your Phone</p>
                            <div className='contact_option'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <input type="email" placeholder='Your Phone Number' />
                            </div>
                        </div>
                    </div>

                    {/* user message type area */}
                    <div className='submission_contact_section'>
                        <p>Message</p>
                        <textarea placeholder='Your Message'></textarea>
                    </div>
                    
                </div>

                {/* submit button */}
                <div className='send_massage_btn'>
                    <button className='mt-4 send_massage_btn'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;