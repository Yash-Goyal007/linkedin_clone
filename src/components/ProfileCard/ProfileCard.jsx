import React from 'react';
import './ProfileCard.scss';

const ProfileCard = props => {
    return(
        <div className="profile-card">{props.currentUser.name}</div>
    );
};

export default ProfileCard;