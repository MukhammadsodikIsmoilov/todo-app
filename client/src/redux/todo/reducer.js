import * as actionTypes from './types';

const initialState = {
  todos: [
    {id: 1, task: 'Make a cake', completed: true},
    {id: 2, task: 'Set a plan', completed: false},
    {id: 3, task: 'Try to dream big', completed: false},
  ],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            task: action.todo,
            completed: false,
          },
        ],
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case actionTypes.CLEAR_TODOS:
      return {
        ...state,
        todos: [],
      };
    case actionTypes.IS_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo = {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
