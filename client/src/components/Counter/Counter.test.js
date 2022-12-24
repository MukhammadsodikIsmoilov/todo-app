import React from "react";
import { render } from "@testing-library/react";

import TaskCounter from "./Counter";

describe("<Counter />", () => {
	it("should render the correct amount of incomplete tasks", () => {
		const tasksAmount = 5;
		const { getByText } = render(<TaskCounter tasksLeft={tasksAmount} />);

		const result = getByText(
			new RegExp(`${tasksAmount} tasks left`, "gi")
		).textContent;

		expect(result).toBe(`${tasksAmount} tasks left`);
	});

	it("should render 'task' when the number of incomplete tasks is one", () => {
		const tasksAmount = 1;
		const { getByText } = render(<TaskCounter tasksLeft={tasksAmount} />);

		const result = getByText(
			new RegExp(`${tasksAmount} task left`, "gi")
		).textContent;

		expect(result).toBe(`${tasksAmount} task left`);
	});

	it("should be visible if tasks are more than 0", () => {
		const tasksAmount = 1;
		const { getByText } = render(<TaskCounter tasksLeft={tasksAmount} />);

		const result = getByText(new RegExp(`${tasksAmount} task left`, "gi"));

		expect(result).toBeVisible();
	});

	it("should contain div tag", () => {
		const tasksAmount = 1;
		const { getByTestId } = render(<TaskCounter tasksLeft={tasksAmount} />);
		expect(getByTestId("counter")).toContainHTML("div");
	});

	it("should contain text context", () => {
		const tasksAmount = 1;
		const { getByTestId } = render(<TaskCounter tasksLeft={tasksAmount} />);
		expect(getByTestId("counter")).toHaveTextContent("1 task left");
	});

	it("should not be falsy value", () => {
		const tasksAmount = 1;
		const { getByTestId } = render(<TaskCounter tasksLeft={tasksAmount} />);
		expect(getByTestId("counter")).not.toBeFalsy();
	});
});
