import React from "react";

function TaskCounter({ tasksLeft }) {
	if (tasksLeft > 0)
		return (
			<div className='task-counter' data-testId="counter">
				{tasksLeft} {tasksLeft > 1 ? "tasks" : "task"} left
			</div>
		);

	return null;
}

export default TaskCounter;
