import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostsCard.scss';

const PostsCard = props => {
    let navigate = useNavigate();
    return(
        <div className='posts-card' >
            <p className='name' onClick={() => navigate('/profile',{
                state: {id:props.posts?.userID,email:props.posts.userEmail},
            })} >{props.posts.userName}</p>
            <p className='timestamp'>{props.posts.timeStamp}</p>
            <p className='status'>{props.posts.status}</p>
        </div>
    );
};

export default PostsCard;