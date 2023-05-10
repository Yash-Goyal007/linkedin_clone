import React, { useState } from 'react';
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI';
import '../Sass/LoginComponent.scss';
import LinkedinLogo from '../assets/linkedinLogo.png';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
// import { navigate } from '../helpers/useNavigate';
import { useNavigate } from 'react-router-dom';

const LoginComponent = props => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success('Signed In to Linkedin!');
            navigate('/home');
        }
        catch (err) {
            toast.error('Please check your email and password');
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
                <h1 className='heading'>Sign In</h1>
                <p className='sub-heading'>Stay updated on your professional world</p>
                <div className="auth-inputs">
                    <input type='email' onChange={(event) => setCredentials({ ...credentials, email: event.target.value })} className='common-input' placeholder='Email or Phone' />
                    <input type='password' onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} className='common-input' placeholder='Password' />
                </div>
                <button onClick={login} className='login-btn'>Sign in</button>
            </div>
            <div className='google-btn-container'>
                <hr className='hr-text' data-content='or' />
                <GoogleButton className='google-btn' onClick={googleSignIn}/>
                <p className='go-to-signup'>New to LinkedIn? <span className='join-now' onClick={() => navigate("/register")}>Join now</span></p>
            </div>
        </div>
    );
};

export default LoginComponent;