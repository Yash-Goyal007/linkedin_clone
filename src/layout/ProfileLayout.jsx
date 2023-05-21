import React, { useMemo, useState } from 'react';
import { getCurrentUserData } from '../api/FirestoreAPI';
import Topbar from '../components/Topbar/Topbar';
import Profile from '../Pages/Profile';

const ProfileLayout = props => {
    const [currentUser,setCurrentUser] = useState({});
    useMemo(()=>{
        getCurrentUserData(setCurrentUser);
    },[])
    return(
        <div>
            <Topbar/>
            <Profile currentUser={currentUser} />
        </div>
    );
};

export default ProfileLayout;