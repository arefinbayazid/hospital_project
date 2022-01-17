import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Profile.css'

const Profile = () => {
    const {userInfo} = useAuth()
    return (
        <div className='user_profile_container'>
            <div className='profile_box px-3'>
                <h1>Welcome to '{userInfo?.displayName ? userInfo.displayName : "No Name"}'</h1>
                <p><b>Your email :</b> {userInfo?.email ? userInfo?.email : "No Email"}</p>
                <small className='text-secondary py-2 mt-1 d-block'>We are update this page few days letter Thank You</small>
                <Link to = "/home">
                    <button className='btn btn-outline-warning text-dark mt-2'>Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;