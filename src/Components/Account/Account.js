import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Account.css'

const Account = () => {

    const {signInWithGoogleHandelar, singUpNewUserHandelar,updateProfileName, signInHandelar} = useAuth()
    
    // email password functionality
    const [firstName, setFirstName]  = useState('')
    const FirstNameFieldInput = e =>{
        setFirstName(e.target.value)
        setInputError('')
    }
    const [lastName, setLastName]  = useState('')
    const LastNameFieldInput = e =>{
        setLastName(e.target.value);
        setInputError('');
    }
    const [email, setEmail]  = useState('')
    const emailFieldInput = e =>{
        setEmail(e.target.value);
        setInputError('');
    }
    const [password, setPassword]  = useState('')
    const passwordFieldInput = e =>{
        setPassword(e.target.value)
        setInputError('');
    }
    const [existingUser, setExistingUser] = useState(false)
    const checkBoxHandelForLogInAndRegistration = e =>{
        setExistingUser(e.target.checked)
        setInputError('');
    }

    // submit input field  
    const [inputError, setInputError] = useState('')
    const submitInputField = () =>{
        if(!existingUser){
            if(!firstName) {
                setInputError('Please Enter Your First Name');
                return;
            };
            if(!lastName){
                setInputError('Please Enter Your Last Name');
                return;
            };
        }
        if(!email){
            setInputError('Please Enter Email Address');
            return;
        };
        if(!password){
            setInputError('Please Enter Your Password');
            return;
        };
        if(password.length < 8){
            setInputError('Please Should Must Be 8 Charecter Of Length');
            return;
        };

        existingUser ? LogInUserHandelar() : signUpUserHandelar()
    }


    
    // google authentication location back home or back private page after login
    const location = useLocation();
    const navigate = useNavigate()
    const location_uri = location?.state?.from || '/home';
    const googleUserLocationHandelar = () =>{
        signInWithGoogleHandelar()
        .then(result => {
            console.log(result.user)
            navigate(location_uri)  
            })
    }
    // email and password authentication location back home or back private page after login
    const fullName = firstName + '' + lastName;
    const signUpUserHandelar = () =>{
        singUpNewUserHandelar(email, password)
        .then(result =>{
            updateProfileName(fullName);
            console.log(result.user);
            navigate(location_uri);
        })
        .catch((error) => {
            error.code==='auth/email-already-in-use' && setInputError('Email Already In Use Please Log In')
        });
    }
    const LogInUserHandelar = () =>{
        signInHandelar(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(location_uri)
        })
        .catch((error) => {
            error.code==='auth/wrong-password' && setInputError('Wrong Password Please Try Again');
            error.code==='auth/user-not-found' && setInputError('Email Not Found Please Try Again');
            const errorMessage = error.message;
        });
    }

    
    return (
        <div id="ac" className='container account_container'>
            <div className='account_box px-3 py-4'>
                <div className='account_type_header mb-3'>
                    <h3 className='text-center'>Welcome To Medico</h3>
                    <p className='text-center'>Enter your information to access your account</p>
                </div>
                {
                    !existingUser && 
                    <div className='user_name_registration'>
                        <div id='first_name-input' className='input_filed border'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                            <input onBlur={FirstNameFieldInput} type="text" placeholder='First Name' />
                            
                        </div>
                        <div className='last_name_input border'>
                            <input onBlur={LastNameFieldInput} type="text" placeholder='Last Name' />
                        </div>
                    </div>
                }
                <div className='input_box pt-3'>
                    <div className='input_filed border'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <input onBlur={emailFieldInput} type="email" placeholder='Enter your email' />
                    </div>
                </div>
                <div className='input_box pt-3'>
                    <div className='input_filed border'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <input onBlur={passwordFieldInput} type="password" placeholder='Enter your password' />
                    </div>
                </div>
                <div className='mt-1'>
                    <p className='text-danger'>{inputError}</p>
                </div>
                <div className='submission_control'>
                    <button onClick={submitInputField}>{existingUser ? 'Log In' : 'Registration'}</button>
                    <label htmlFor="check">
                        <input onChange={checkBoxHandelForLogInAndRegistration} id='check' type="checkbox"/>
                        I have {!existingUser ? 'a ' : 'no '} account<span className='text-primary'>{!existingUser ? ' Log In' : ' Registration'}</span>
                    </label>
                </div>
                <div className='google_log_in mt-3'>
                    <img onClick={googleUserLocationHandelar} width={40} src='https://i.ibb.co/xDLfd2Q/pngegg.png' />
                </div>
            </div>
        </div>
    );
};

export default Account;