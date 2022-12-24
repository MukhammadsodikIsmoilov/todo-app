import React from "react";
import { useSelector } from "react-redux";
import TaskCounter from "./Counter/Counter";
import Todo from "./todo";

const TodoList = () => {
	const todos = useSelector((state) => state.todoReducer.todos);
	return (
		<>
			<ul>
				{todos &&
					todos.length > 0 &&
					todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
			</ul>
			{todos && todos.length > 0 && (
				<TaskCounter
					tasksLeft={todos.filter((todo) => !todo.is_completed).length}
				/>
			)}
		</>
	);
};

export default TodoList;
