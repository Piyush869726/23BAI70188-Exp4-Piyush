import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const { tasks, addTask, deleteTask, clearTasks } = useContext(AppContext);
  const [task, setTask] = useState("");

  const totalTasks = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <h1>Analytics Page</h1>

      <h2>Total Tasks: {totalTasks}</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={() => {
          addTask({ id: Date.now(), name: task });
          setTask("");
        }}
      >
        Add Task
      </button>

      <button onClick={clearTasks}>Clear All</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.name}
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analytics;