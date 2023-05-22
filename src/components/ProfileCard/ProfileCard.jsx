import React, { useMemo, useState } from 'react';
import { getStatus } from '../../api/FirestoreAPI';
import PostsCard from '../PostsCard/PostsCard';
import './ProfileCard.scss';

const ProfileCard = props => {
    const [allStatuses, setAllStatus] = useState([]);
    useMemo(() => {
        getStatus(setAllStatus)
    })
    return (
        <>
            <div className="profile-card">
                <div className='edit-btn'>
                    <button onClick={props.onEdit}>Edit</button>
                </div>
                <div className="profile-info">
                    <div>
                        <h3 className='userName'>{props.currentUser.name}</h3>
                        <p className='heading'>{props.currentUser.headline}</p>
                        <p>{props.currentUser.location}</p>
                    </div>
                    <div className='right-info'>
                        <p className='college'>{props.currentUser.college}</p>
                        <p className='company'>{props.currentUser.company}</p>
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