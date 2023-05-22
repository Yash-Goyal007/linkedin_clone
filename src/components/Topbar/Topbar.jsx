import React, { useState } from 'react';
import './Topbar.scss';
import LinkedinLogo from '../../assets/linkedinLogo.png';
import { AiOutlineBell, AiOutlineHome, AiOutlineMessage, AiOutlineSearch, AiOutlineUserSwitch } from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs';
import User from '../../assets/userIcon.jpg';
import { useNavigate } from 'react-router-dom';
import ProfilePopup from '../ProfilePopup/ProfilePopup';

const Topbar = props => {
    const [popupVisible,setPopupVisible] = useState(false);
    let navigate = useNavigate();
    const goToRoute = route => {
        navigate(route);
    }
    return (
        <div className='topbar-main'>
            {popupVisible ? <div className='popup-position'>
                <ProfilePopup/>
            </div>: <></>}
            <img src={LinkedinLogo} className="linkedin-Logo" alt="" />
            <div className='react-icons'>
                <AiOutlineSearch size={30}  className='react-icon' />
                <AiOutlineHome size={30}  className='react-icon' onClick={() => goToRoute("/home")} />
                <AiOutlineUserSwitch size={30} className='react-icon' onClick={() => goToRoute("/profile")} />
                <BsBriefcase size ={30} className='react-icon' onClick={() => goToRoute("/")} />
                <AiOutlineMessage size={30} className='react-icon' onClick={() => goToRoute("/")}/>
                <AiOutlineBell size={30} className='react-icon' onClick={() => goToRoute("/")}/>
            </div>
            <img src={User} className="user-Logo" alt="" onClick={() => setPopupVisible(!popupVisible)} />
        </div>


    );
};

export default Topbar;