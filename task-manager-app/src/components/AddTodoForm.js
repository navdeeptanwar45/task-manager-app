import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function AddTodoForm({ handleClose }) {
  const [newTask, setNewTask] = useState({ userId: "", todo: "" });
  const { addNewTask, setTasks, tasks } = useTaskContext();
  async function handleSubmit(e) {
    e.preventDefault();
    await addNewTask({
      ...newTask,
      completed: "pending",
    });
    setTasks([
      ...tasks,
      {
        ...newTask,
        id: Math.floor(Math.random() * 101),
        completed: "pending",
      },
    ]);
  }
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>User Id</Form.Label>
        <Form.Control
          type="number"
          value={newTask.userId}
          onChange={(e) => {
            setNewTask((prev) => ({ ...prev, userId: Number(e.target.value) }));
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description of task</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={newTask.todo}
          onChange={(e) => {
            setNewTask((prev) => ({ ...prev, todo: e.target.value }));
          }}
        />
      </Form.Group>
      <Button
        style={{ width: "48%", margin: "1%" }}
        variant={"danger"}
        onClick={handleClose}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        style={{ width: "48%", margin: "1%" }}
        variant={"success"}
        onClick={handleSubmit}
      >
        Submit Task
      </Button>
    </Form>
  );
}

export default AddTodoForm;
