import {createTodo, deleteTodo, getAllTodos, updateTodo} from '../api/todoApi';

const fetchTodos = async () => {
    return await getAllTodos();
};

const addTodo = async (todo) => {
    return await createTodo(todo);
};

const editTodo = async (id, todo) => {
    return await updateTodo(id, todo);
};

const removeTodo = async (id) => {
    await deleteTodo(id);
};

export const todoService = {
    fetchTodos,
    addTodo,
    editTodo,
    removeTodo,
};
