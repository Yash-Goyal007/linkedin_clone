import React from 'react';
import './PostsCard.scss';

const PostsCard = props => {
    return(
        <div className='posts-card' >
            <p className='name'>{props.posts.userName}</p>
            <p className='timestamp'>{props.posts.timeStamp}</p>
            <p className='status'>{props.posts.status}</p>
        </div>
    );
};

export default PostsCard;