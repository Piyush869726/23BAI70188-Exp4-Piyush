import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(AppContext);

  return (
    <div>
      <h3>Tasks</h3>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;