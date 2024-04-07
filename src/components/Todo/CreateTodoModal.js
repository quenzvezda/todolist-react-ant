import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';

const CreateTodoModal = ({ visible, onCreate, onCancel }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreate = () => {
        onCreate({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <Modal
            title="Create Todo"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="create" type="primary" onClick={handleCreate}>
                    Save
                </Button>,
            ]}
        >
            <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: '1rem' }}
            />
            <Input.TextArea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </Modal>
    );
};

export default CreateTodoModal;
