import React, { useMemo, useState } from 'react';
import { getStatus, PostStatus } from '../../api/FirestoreAPI';
import { getUniqueID } from '../../helpers/getUniqueId';
import getCurrentTimeStamp from '../../helpers/useMoment';
import ModalComponent from '../Modal/Modal';
import PostsCard from '../PostsCard/PostsCard';
import './PostUpdate.scss';

const PostUpdate = props => {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [allStatuses, setAllStatus] = useState([]);
    const sendStatus = async () => {
        let object = {
            status: status,
            timeStamp: getCurrentTimeStamp('LLL'),
            userEmail: props.currentUser.email,
            userName: props.currentUser.name,
            postId: getUniqueID(),
        }
        await PostStatus(object);
        await setModalOpen(false);
        await setStatus('');
    }

    useMemo(() => {
        getStatus(setAllStatus);
    }, [])
    return (
        <div className='post-status-main'>
            <div className="post-status">
                <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
            </div>
            <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} setStatus={setStatus} status={status} sendStatus={sendStatus} />
            <div>

                {allStatuses.map(posts => <PostsCard posts = {posts} />)}
            </div>
        </div>
    );
};

export default PostUpdate;