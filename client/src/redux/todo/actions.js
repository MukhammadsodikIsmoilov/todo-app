import * as actionTypes from './types';

export const addTodo = todo => {
    return {
      type: actionTypes.ADD_TODO,
      todo,
    };
  };
  
  export const showAll = () => {
    return {
      type: actionTypes.SHOW_ALL,
    };
  };
  
  export const showActive = () => {
    return {
      type: actionTypes.SHOW_ACTIVE,
    };
  };
  
  export const showCompleted = () => {
    return {
      type: actionTypes.SHOW_COMPLETED,
    };
  };
  
  export const deleteTodo = id => {
    return {
      type: actionTypes.DELETE_TODO,
      id,
    };
  };
  
  export const clearTodos = () => {
    return {
      type: actionTypes.CLEAR_TODOS,
    };
  };
  
  export const isCompleted = id => {
    return {
      type: actionTypes.IS_COMPLETED,
      id,
    };
  };