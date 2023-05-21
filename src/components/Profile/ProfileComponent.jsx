import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';

const ProfileComponent = props => {
    return (
        <div>
            <ProfileCard currentUser={props.currentUser} />
        </div>
    );
};

export default ProfileComponent;