import React, { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../../api/AuthAPI';
import '../Login/LoginComponent.scss';
import LinkedinLogo from '../../assets/linkedinLogo.png';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { postUserData } from '../../api/FirestoreAPI';
import {getUniqueID} from "../../helpers/getUniqueId"

const RegisterComponent = props => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const register = async () => {
        try {
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success('Account Created');
            localStorage.setItem("userEmail",res.user.email);
            postUserData({userID: getUniqueID() ,name: credentials.name,email:credentials.email})
            navigate('/home');
        }
        catch (err) {
            toast.error('Cannot create your account');
        }
    };

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        navigate('/home');
    }
    return (
        <div className='login-wrapper'>
            <img src={LinkedinLogo} className="linkedinLogo" alt="" />
            <div className='login-wrapper-inner'>
                <h1 className='heading'>Make the most of your professional life.</h1>
                <div className="auth-inputs">
                    <input type='text' onChange={(event) => setCredentials({ ...credentials, name: event.target.value })} className='common-input' placeholder='Your name' />
                    <input type='email' onChange={(event) => setCredentials({ ...credentials, email: event.target.value })} className='common-input' placeholder='Email or Phone number' />
                    <input type='password' onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} className='common-input' placeholder='Password (6 or more characters)' />
                </div>
                <button onClick={register} className='login-btn'>Agree & Join</button>
            </div>
            <div className='google-btn-container'>
                <hr className='hr-text' data-content='or' />
                <GoogleButton className='google-btn' onClick={googleSignIn}/>
                <p className='go-to-signup'>Already on LinkedIn?{" "} <span className='join-now' onClick={() => navigate("/")}>Sign In</span></p>
            </div>
        </div>
    );
};

export default RegisterComponent;