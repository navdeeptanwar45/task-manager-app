import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../utils/api';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetchTodos();
        localStorage.setItem("tasks", JSON.stringify(response))
        setTasks([...response.data.todos]);
      } catch (err) {
        let result = localStorage.getItem('tasks');
        let response =  await JSON.parse(result)
        console.log(response)
        setTasks([...response.data.todos]);
        setError(err.message || 'Failed to fetch tasks.'); 
        alert(error)
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, []);

  const addNewTask = async (task) => {
    try {
      const response = await addTodo(task);
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError(err.message || 'Failed to add a new task.');
      alert(error)

    }
  };

  const editTask = async (id, updatedTask) => {
    try {
      const response = await updateTodo(id, updatedTask);
      setTasks(tasks.map((task) => (task.id === parseInt(id) ? response.data : task)));
    } catch (err) {
      setError(err.message || 'Failed to update the task.');
      alert(error)

    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTodo(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete the task.');
      alert(error)

    }
  };

  return (
    <TaskContext.Provider value={{ setTasks, tasks, loading, error, addNewTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}

export { TaskContext, useTaskContext, TaskProvider };
