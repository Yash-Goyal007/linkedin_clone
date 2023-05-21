import React,{useEffect, useState} from 'react';
import HomeComponent from '../components/Home/HomeComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Home = props => {
    const [loading,setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() =>{
        onAuthStateChanged(auth,res => {
            if(!res?.accessToken)
                navigate('/');
            else
                setLoading(false);
        });
    },[]);
    return loading?<Loader/>:<HomeComponent currentUser = {props.currentUser} />;
};

export default Home;