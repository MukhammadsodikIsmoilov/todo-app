import React from "react";
import { useDispatch } from "react-redux";
import {
  clearTodos,
  fetchTodos,
  showActive,
  showCompleted,
} from "../redux/todo/actions";
import TodoList from "./todos";

const Body = () => {
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearTodos());
    dispatch(fetchTodos());
  };

  return (
    <div className="todoList">
      <div className="buttons">
        <button className="btn" onClick={() => dispatch(fetchTodos())}>
          Show all
        </button>
        <button className="btn" onClick={() => dispatch(showActive())}>
          Show active
        </button>
        <button className="btn" onClick={() => dispatch(showCompleted())}>
          Show completed
        </button>
        <button className="btn" onClick={() => clearAll()}>
          Clear all
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default Body;
