// src/components/Todo/TodoList.js
import React from 'react';
import TodoCard from './TodoCard';
import { todoService } from '../../services/todoService';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Notification from "../Notification";

const TodoList = ({ todos, setTodos }) => {
    const handleUpdateTodo = async (updatedTodo) => {
        try {
            const response = await todoService.editTodo(updatedTodo.id, updatedTodo);
            const newTodos = todos.map((todo) => (todo.id === updatedTodo.id ? response : todo));
            setTodos(newTodos.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
        } catch (error) {
            console.error('Update todo failed:', error);
            Notification('error', error.response, 'Edit Todo failed');
        }
    };

    const handleDeleteTodo = async (todoId) => {
        try {
            await todoService.removeTodo(todoId);
            const newTodos = todos.filter((todo) => todo.id !== todoId);
            setTodos(newTodos);
        } catch (error) {
            console.error('Delete todo failed:', error);
        }
    };


    return (
        <Flipper flipKey={todos.map(todo => todo.id).join("")} className="flex flex-wrap justify-center">
            {todos.map((todo) => (
                <Flipped key={todo.id} flipId={todo.id}>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 h-80">
                        <TodoCard todo={todo} onUpdate={handleUpdateTodo} onDelete={handleDeleteTodo} />
                    </div>
                </Flipped>
            ))}
        </Flipper>
    );
};

export default TodoList;
