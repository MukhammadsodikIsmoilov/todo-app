import React, { useState } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, fetchTodos, updateTodo } from "../redux/todo/actions";
import { showAlert } from "../redux/alert/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(todo.title);

  const deleteTodoFunc = () => {
    dispatch(deleteTodo(todo));
    dispatch(fetchTodos());
  };

  const editSubmit = () => {
    if (task.length > 2) {
      const updatedTodo = {
        id: todo.id,
        title: task,
        is_completed: todo.is_completed,
      };
      dispatch(updateTodo(updatedTodo));
      setEdit(!edit);
    } else {
      dispatch(showAlert("Type at least 3 characters", "info"));
    }
  };

  const isCompleted = () => {
    const updatedTodo = {
      id: todo.id,
      title: todo.title,
      is_completed: !todo.is_completed,
    };
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <Fragment>
      {edit ? (
        <div className="edit-box">
          <input
            type="text"
            className="edit-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn" onClick={() => editSubmit()}>
            Update
          </button>
        </div>
      ) : (
        <li>
          <span
            className="todo-item"
            style={{
              textDecoration: todo.is_completed ? "line-through" : "none",
            }}
            onClick={() => isCompleted()}
          >
            {todo.title}
          </span>
          <button onClick={() => setEdit(!edit)}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={() => deleteTodoFunc()}>
            <i className="fas fa-trash"></i>
          </button>
        </li>
      )}
    </Fragment>
  );
};

export default Todo;
