import React, { useState } from 'react';
import { Card, Button, Input } from 'antd';
import { EditOutlined, CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoCard = ({ todo, onUpdate, onDelete, onCancel }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(editedTodo);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedTodo(todo);
        if (onCancel) onCancel();
    };

    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <Card
            className="w-full h-full flex flex-col p-3"
            styles={{
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    padding: 0,
                },
            }}
        >
            <Input
                className="h-10 bg-transparent border-0 cursor-default bold-text mb-1"
                value={isEditing ? editedTodo.title : todo.title}
                onChange={(e) => setEditedTodo({...editedTodo, title: e.target.value})}
                readOnly={!isEditing}
            />
            <Input.TextArea
                className="bg-transparent border-0 cursor-default w-full p-2"
                style={{resize: 'none', height: 'auto'}}
                value={editedTodo.description}
                onChange={(e) => setEditedTodo({...editedTodo, description: e.target.value})}
                autoSize={{minRows: 3, maxRows: 8}}
                readOnly={!isEditing}
            />
            <div className="flex justify-end items-center mt-auto pt-2 space-x-2">
                {isEditing ? (
                    <Button icon={<DeleteOutlined/>} onClick={handleDelete}/>
                ) : null}
                {isEditing ? (
                    <>
                        <Button icon={<CheckOutlined/>} onClick={handleSave}/>
                        <Button icon={<CloseOutlined/>} onClick={handleCancel}/>
                    </>
                ) : (
                    <Button icon={<EditOutlined/>} onClick={handleEdit}/>
                )}
            </div>
        </Card>
    );
};

export default TodoCard;
