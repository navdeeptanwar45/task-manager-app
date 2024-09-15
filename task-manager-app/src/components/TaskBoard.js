import { useState,useCallback } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import TaskNavbar from "./TaskNavbar";

const TaskBoard = () => {
  const { tasks, loading, setTasks } = useTaskContext();
  const [todoShow, setTodoShow] = useState(true)
  const [pendingShow, setPendingShow] = useState(true)
  const [DoneShow, setDoneShow] = useState(true)
const handleDrop = useCallback((e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === parseInt(taskId) ? { ...task, completed: status } : task
      )
    );
  }, [setTasks]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  if (loading) return <div>Loading...</div>;

  function showAllTodo(){
    setTodoShow(true)
    setDoneShow(false)
    setPendingShow(false)
  }
  function showAllPending(){
    setPendingShow(true)
    setDoneShow(false)
    setTodoShow(false)
  }
  function showAllDone(){
    setDoneShow(true)
    setTodoShow(false)
    setPendingShow(false)
  }
  function showAll(){
    setDoneShow(true)
    setPendingShow(true)
    setTodoShow(true)
  }

  
  

  return (
    <div className="task-board">
      <TaskNavbar showAll={showAll} showAllTodo={showAllTodo} showAllDone={showAllDone} showAllPending={showAllPending} />
      <div className="task-columns">
       {todoShow&&<div
          className="task-column"
          onDrop={(e) => handleDrop(e, false)}
          onDragOver={handleDragOver}
        >
          <h1>To-do</h1>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <TaskCard key={task.id} task={task} cardType={0} />
            ))}
        </div>}
        {pendingShow&&<div
          className="task-column"
          onDrop={(e) => handleDrop(e, "pending")}
          onDragOver={handleDragOver}
        >
          <h1>In-Progress</h1>
          {tasks
            .filter((task) => task.completed === "pending")
            .map((task) => (
              <TaskCard key={task.id} task={task} cardType={1} />
            ))}
        </div>}
        {DoneShow&&<div
          className="task-column"
          onDrop={(e) => handleDrop(e, true)}
          onDragOver={handleDragOver}
        >
          <h1>Done</h1>
          {tasks
            .filter((task) => task.completed === true)
            .map((task) => (
              <TaskCard key={task.id} task={task} cardType={2} />
            ))}
        </div>}
        
      </div>
    </div>
  );
};

export default TaskBoard;
