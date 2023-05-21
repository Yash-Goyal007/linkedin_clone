import React,{useEffect, useState} from 'react';
import LoginComponent from '../components/Login/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Login = props => {
    const [loading,setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if(res?.accessToken)
                navigate('/home');
            else    
                setLoading(false);
        });
    }, []);
    return loading? <Loader/>:<LoginComponent />;
};

export default Login;