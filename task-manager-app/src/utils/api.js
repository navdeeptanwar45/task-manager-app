import axios from 'axios';

const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = () => axios.get(API_URL);
export const getTodo = (id) => axios.get(`${API_URL}/${id}`);
export const addTodo = (newTask) => axios.post(`${API_URL}/add`, newTask);
export const updateTodo = (id, updatedTask) => axios.put(`${API_URL}/${id}`, updatedTask);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
