import React from 'react';
import PostUpdate from '../PostUpdate/PostUpdate';
import './HomeComponent.scss';

const HomeComponent = props => {
    return(
        <div className='home-component'>
            <PostUpdate currentUser = {props.currentUser} />
        </div>
    );
};

export default HomeComponent;