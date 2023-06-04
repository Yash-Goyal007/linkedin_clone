import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onLogout } from '../../api/AuthAPI';
import { getCurrentUserData } from '../../api/FirestoreAPI';
import Button from '../common/Button/Button';
import './ProfilePopup.scss';

const ProfilePopup = props => {
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() => {
        getCurrentUserData(setCurrentUser);
    }, [])
    return (
        <div className="popup-card">
            <p className='name'>{currentUser.name}</p>
            <p className='headline'>{currentUser.headline}</p>
            <Button title="View Profile" onClick={() =>
                navigate("/profile", {
                    state: {
                        id: currentUser?.userID,
                    },
                })
            } />
            <Button title="Log Out" onClick={onLogout} />
        </div>
    );
};

export default ProfilePopup;