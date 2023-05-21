import React from 'react';
import { onLogout } from '../../api/AuthAPI';
import './ProfilePopup.scss';

const ProfilePopup = props => {
    return (
        <div className="popup-card">
            <ul className="popup-options">
                <li className="popup-option" onClick={onLogout}>Logout</li>
            </ul>
        </div>
    );
};

export default ProfilePopup;