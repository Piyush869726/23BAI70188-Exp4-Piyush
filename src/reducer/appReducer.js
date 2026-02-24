const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };

        case "CLEAR_TASKS":
            return {
                ...state,
                tasks: []
            };

        default:
            return state;
    }
};

export default appReducer;