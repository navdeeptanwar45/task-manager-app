import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskDetailCard({ task, cardType }) {
  const navigate = useNavigate();
  const { editTask, removeTask, setTasks, tasks } = useTaskContext();
  const [updatedTask, setUpdatedTask] = useState({
    id: task.id,
    todo: task.todo,
    userId: task.userId,
    cardType: cardType,
  });
  async function handleUpdate(e) {
    e.preventDefault();
    if (updatedTask.cardType === "1") {
      setTasks((tasks) =>
        tasks.map((item) =>
          item.id === parseInt(task.id)
            ? {
                id: Number(updatedTask.id),
                todo: updatedTask.todo,
                userId: updatedTask.userId,
                completed: "pending",
              }
            : item
        )
      );
    } else {
      await editTask(task.id, {
        id: `${updatedTask.id}`,
        todo: updatedTask.todo,
        userId: updatedTask.userId,
        completed: updatedTask.cardType === '2' ? true : false,
      });
    }
  }
  async function handleDelete() {
    await removeTask(task.id);
    navigate("/");
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{width:'100%',display:'flex',justifyContent:'flex-start'}}>
      <Button
        style={{ margin: "40px" }}
        variant={"primary"}
        onClick={() => {
          navigate("/");
        }}
      >
        &#8592; Back to Home Page
      </Button>
      </div>
      
      <h1>Task - {task.id}</h1>
      <div style={{ width: "80vw", display: "flex", flexDirection: "column" }}>
        <Form style={{ width: "100%" }}>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>User Id</b>
            </Form.Label>
            <Form.Control
              type="number"
              value={updatedTask.userId}
              onChange={(e) => {
                setUpdatedTask((prev) => ({ ...prev, userId: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Task Description</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={updatedTask.todo}
              onChange={(e) => {
                setUpdatedTask((prev) => ({ ...prev, todo: e.target.value }));
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b> Status</b>
            </Form.Label>
            <Form.Select
              defaultValue={updatedTask.cardType}
              onChange={(e) => {
                console.log(e.target.value);
                setUpdatedTask((prev) => ({
                  ...prev,
                  cardType: e.target.value,
                }));
              }}
            >
              <option value={0}>To-do</option>
              <option value={1}>In-Progress</option>
              <option value={2}>Completed</option>
            </Form.Select>
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            style={{ width: "100%", marginTop: "1%" }}
            onClick={(e) => handleUpdate(e)}
          >
            Update Task
          </Button>
        </Form>

        <Button
          variant="danger"
          style={{ marginTop: "1%", width: "100%" }}
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TaskDetailCard;
