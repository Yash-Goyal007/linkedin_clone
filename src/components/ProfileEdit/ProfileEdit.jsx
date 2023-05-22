import React, { useState } from 'react';
import { editProfile } from '../../api/FirestoreAPI';
import './ProfileEdit.scss';

const ProfileEdit = props => {
    const [editInputs, setEditInputs] = useState({});
    const getInput = (event) => {
        let { name, value } = event.target;
        let input = { [name]: value };
        setEditInputs({ ...editInputs, ...input });
    }

    const updateProfileData = async () => {
        await editProfile(props.currentUser?.userID,editInputs);
        await props.onEdit();
    }

    return (
        <div className='profile-card'>
            <div className="edit-btn">
                <button onClick={props.onEdit}>Go Back</button>
            </div>
            <div className="profile-edit-inputs">
                <input onChange={getInput} name='name' className='common-input' placeholder='Name' />
                <input onChange={getInput} name='headline' className='common-input' placeholder='Headline' />
                <input onChange={getInput} name='location' className='common-input' placeholder='Location' />
                <input onChange={getInput} name='company' className='common-input' placeholder='Company' />
                <input onChange={getInput} name='college' className='common-input' placeholder='College' />
            </div>
            <div className='save-container'>
                <button onClick={updateProfileData} className='save-btn'>Save</button>
            </div>
        </div>
    );
};

export default ProfileEdit;