import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") return;

    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;