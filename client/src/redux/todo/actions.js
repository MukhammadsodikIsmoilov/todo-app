import * as actionTypes from "./types";

export const fetchTodos = () => ({
  type: actionTypes.FETCH_TODOS,
});

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  todo,
});

export const updateTodo = (todo) => ({
  type: actionTypes.UPDATE_TODO,
  todo,
});

export const showActive = () => ({
  type: actionTypes.SHOW_ACTIVE,
});

export const showCompleted = () => ({
  type: actionTypes.SHOW_COMPLETED,
});

export const deleteTodo = (todo) => ({
  type: actionTypes.DELETE_TODO,
  todo,
});

export const clearTodos = () => ({
  type: actionTypes.CLEAR_TODOS,
});
