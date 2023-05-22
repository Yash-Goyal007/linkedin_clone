import React, { useState } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileEdit from '../ProfileEdit/ProfileEdit';

const ProfileComponent = props => {
    const [isEdit, setIsEdit] = useState(false);

    const onEdit = () => {
        setIsEdit(!isEdit)
    }
    return (
        <div>
            {isEdit ? <ProfileEdit currentUser={props.currentUser} onEdit={onEdit}/> : <ProfileCard currentUser={props.currentUser} onEdit={onEdit} />}
        </div>
    );
};

export default ProfileComponent;