import { createContext, useReducer } from "react";
import appReducer from "../reducer/appReducer";

export const AppContext = createContext();

const initialState = {
  tasks: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const clearTasks = () => {
    dispatch({ type: "CLEAR_TASKS" });
  };

  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        clearTasks
      }}
    >
      {children}
    </AppContext.Provider>
  );
};