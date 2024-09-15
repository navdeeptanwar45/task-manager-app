import React, { useContext } from 'react';
import { useParams ,useLocation} from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskDetailCard from './TaskDetailCard';
const TaskDetails = () => {
  const { id } = useParams();
  const { tasks} = useContext(TaskContext);
  const task = tasks.find(todo => todo.id === +id);
  const location = useLocation()
const {cardType }= location.state
  return task ? (
    
        <TaskDetailCard task={task} cardType={cardType} />
      
  ) : <div>Task not found</div>;
};

export default TaskDetails;
