import React, { useMemo, useState } from 'react';
import { getCurrentUserData } from '../api/FirestoreAPI';
import Topbar from '../components/Topbar/Topbar';
import Home from '../Pages/Home';

const HomeLayout = props => {
    const [currentUser, setCurrentUser] = useState({});
    useMemo(()=>{
        getCurrentUserData(setCurrentUser);
    },[]);
    return(
        <div>
            <Topbar/>
            <Home currentUser={currentUser} />
        </div>
    );
};

export default HomeLayout;