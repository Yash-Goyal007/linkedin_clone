import React, { useState } from 'react';
import { editProfile } from '../../api/FirestoreAPI';
import './ProfileEdit.scss';

const ProfileEdit = props => {
    const [editInputs, setEditInputs] = useState(props.currentUser);
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
                <label htmlFor="">Name</label>
                <input value={editInputs.name} onChange={getInput} name='name' className='common-input' placeholder='Name' />
                <label htmlFor="">Headline</label>
                <input value={editInputs.headline} onChange={getInput} name='headline' className='common-input' placeholder='Headline' />
                <label htmlFor="">Location</label>
                <input value={editInputs.location} onChange={getInput} name='location' className='common-input' placeholder='Location' />
                <label htmlFor="">Company</label>
                <input value={editInputs.company} onChange={getInput} name='company' className='common-input' placeholder='Company' />
                <label htmlFor="">College</label>
                <input value={editInputs.college} onChange={getInput} name='college' className='common-input' placeholder='College' />
            </div>
            <div className='save-container'>
                <button onClick={updateProfileData} className='save-btn'>Save</button>
            </div>
        </div>
    );
};

export default ProfileEdit;