import * as actionTypes from "./types";

const initialState = {
  todos: [],
  currentTodo: null,
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_SUCCESS:
    case actionTypes.SHOW_ACTIVE_SUCCESS:
    case actionTypes.SHOW_COMPLETED_SUCCESS:
      return {
        ...state,
        todos: action.todos,
      };
    case actionTypes.ADD_TODO:
    case actionTypes.UPDATE_TODO:
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        currentTodo: action.todo,
      };
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        currentTodo: null,
      };
    case actionTypes.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todo.id) todo = action.todo;

          return todo;
        }),
        currentTodo: null,
      };
    default:
      return state;
  }
};
