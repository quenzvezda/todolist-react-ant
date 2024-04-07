import axios from './axios';

export const getAllTodos = async () => {
    const { data } = await axios.get('/todolist');
    return data;
};

export const createTodo = async (todo) => {
    const { data } = await axios.post('/todolist', todo);
    return data;
};

export const updateTodo = async (id, todo) => {
    const { data } = await axios.put(`/todolist/${id}`, todo);
    return data;
};

export const deleteTodo = async (id) => {
    await axios.delete(`/todolist/${id}`);
};
