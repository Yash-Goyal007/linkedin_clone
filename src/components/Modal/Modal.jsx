import { Button, Modal } from 'antd';
import { useState } from 'react';
import './Modal.scss';

const ModalComponent = props => {
    return (
        <>
            <Modal
                title="Create a post"
                centered
                open={props.modalOpen}
                onOk={() => props.setModalOpen(false)}
                onCancel={() => props.setModalOpen(false)}
                footer={[
                    <Button key="submit" type="primary" disabled={props.status.length > 0 ? false:true} onClick={props.sendStatus}>
                        Post
                    </Button>
                ]}
            >
                <input type="text" name="" className='modal-input' placeholder='What do you want to talk about?' onChange={event => props.setStatus(event.target.value)} value={props.status} />
            </Modal>
        </>
    );
};
export default ModalComponent;