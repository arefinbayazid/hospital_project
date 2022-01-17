import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NotFound.css'
const NotFound = () => {
    
    return (
        <div className='container not_found_container'>
            <div className='not_found_image'>
                <img src="https://i.ibb.co/J25HBNw/2446911-ai.png" className ="img-fluid" />
            </div>
            <HashLink to="/home#home">
                <button className='btn btn-outline-success'>Back to Home</button>
            </HashLink>
        </div>
    );
};

export default NotFound;