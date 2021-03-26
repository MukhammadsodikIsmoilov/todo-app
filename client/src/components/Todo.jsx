import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, isCompleted } from "../redux/todo/actions";


const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span
        className="todo-item"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.task}
      </span>
      <button
        style={{ color: todo.completed ? "lightcoral" : "" }}
        onClick={() => dispatch(isCompleted(todo.id))}
      >
        <i className="fas fa-check-square"></i>
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
