import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSingleStatus, getSingleUser } from '../../api/FirestoreAPI';

import PostsCard from '../PostsCard/PostsCard';
import './ProfileCard.scss';

const ProfileCard = props => {
    let location = useLocation();
    const [allStatuses, setAllStatus] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});
    console.log(location?.state?.email);
    useMemo(() => {
        if (location?.state?.id)
            getSingleStatus(setAllStatus, location?.state?.email);
        if (location?.state?.email)
            getSingleUser(setCurrentProfile, location?.state?.email);

    }, []);
    // console.log(currentProfile);
    return (
        <>
            <div className="profile-card">
                <div className='edit-btn'>
                    <button onClick={props.onEdit}>Edit</button>
                </div>
                <div className="profile-info">
                    <div>
                        <h3 className='userName'>
                            {Object.values(currentProfile).length === 0 ? props.currentUser.name : currentProfile?.name}
                        </h3>
                        <p className='heading'>
                            {Object.values(currentProfile).length === 0 ? props.currentUser.headline : currentProfile?.headline}
                        </p>
                        <p>
                            {Object.values(currentProfile).length === 0 ? props.currentUser.location : currentProfile?.location}
                        </p>
                    </div>
                    <div className='right-info'>
                        <p className='college'>
                        {Object.values(currentProfile).length === 0 ? props.currentUser.college : currentProfile?.college}
                        </p>
                        <p className='company'>
                        {Object.values(currentProfile).length === 0 ? props.currentUser.company : currentProfile?.company}
                        </p>
                    </div>
                </div>
            </div>
            <div className='post-status-main'>
                {allStatuses.filter(item => item.userEmail === localStorage.getItem("userEmail")).map(posts => <PostsCard posts={posts} key={posts.postId} />)}
            </div>
        </>
    );
};

export default ProfileCard;