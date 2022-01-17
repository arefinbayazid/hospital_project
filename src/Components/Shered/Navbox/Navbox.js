import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Navbox.css'

const Navbox = () => {

    // navbar animated
    window.onscroll = function() {navbarScroll()};
    const [scrollValue, setScrollValue] = useState(0)
    function navbarScroll() {
        const navBar = document.getElementById('navbar')
        setScrollValue(document.documentElement.scrollTop)
        if ( scrollValue > 50 && scrollValue < 300) {
            navBar.classList.remove('navbox_toggle')
            navBar.classList.add('navbox_toggle_first');
        }
        else if(scrollValue > 300 && scrollValue < 400){
            navBar.classList.remove('navbox_toggle');
            navBar.classList.add('top_out_navbar');
        }
        else if(scrollValue > 400){
            navBar.classList.remove('navbox_toggle');
            navBar.classList.remove('top_out_navbar')
            navBar.classList.add('navbox_toggle_first');
        }
        else {
            navBar.classList.remove('navbox_toggle_first')
            navBar.classList.remove('top_out_navbar');
            navBar.classList.add('navbox_toggle');
        }
    }
    useEffect(()=>{
        if(!scrollValue){
            navbarScroll()
        }
    }, [])

    // get user info from firebase authentication
    const {userInfo, singOutHandelar} = useAuth()

    return (
        <div className='navbar_full_cotainer'>
            <nav  id='navbar' className="navbar navbar-expand-lg w-100 navbar-light">
                <div className="container px-0">
                    <HashLink className="navbar-brand" to="/">
                        <h1 className='logo'>MediCo</h1>
                    </HashLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    {/* nav collapsable data */}
                    <div className="collapse navbar-collapse  navlink_container" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-2 mb-lg-0 w-100 nav_links">
                            <li><HashLink to="/home#home">Home</HashLink></li>
                            <li><HashLink to="/home#about">About</HashLink></li>
                            <li><HashLink to="/home#services">Services</HashLink></li>
                            <li><HashLink to="/doctors#doctor">Doctors</HashLink></li>
                            <li><HashLink to="/contact#contact">Contact</HashLink></li>
                            {
                                userInfo && <li><HashLink to="/profile">Profile</HashLink></li>
                            }
                        </ul>

                        {/* log out functionality by using firebase */}
                        <div className='account_btn'>
                            {
                                userInfo ?
                                <button className="btn btn-outline-warning text-dark w-100" type="submit" onClick={singOutHandelar}>Log Out</button>
                                :
                                <HashLink to = "/account#ac">
                                    <button className="btn btn-outline-dark w-100" type="submit">Account</button>
                                </HashLink>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbox;