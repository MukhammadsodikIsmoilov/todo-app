import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../redux";
import NewTodo from "../new-todo";

const MockNewTodoComponent = () => (
	<Provider store={store}>
		<NewTodo />
	</Provider>
);

describe("Add todo component", () => {
	it("should have placeholder", async () => {
		render(<MockNewTodoComponent />);

		const inputElemenet = screen.getByPlaceholderText("New Todo...");
		expect(inputElemenet).toBeInTheDocument();
	});

	it("should be able to type in input", async () => {
		render(<MockNewTodoComponent />);

		const inputElemenet = screen.getByPlaceholderText("New Todo...");
		await fireEvent.change(inputElemenet, {
			target: { value: "Create a new component" },
		});
		expect(inputElemenet.value).toBe("Create a new component");
	});

	it("should be empty value when add button is clicked", async () => {
		render(<MockNewTodoComponent />);

		const inputElemenet = screen.getByPlaceholderText("New Todo...");
		const buttonElement = screen.getByRole("button", { type: "submit" });
		await fireEvent.change(inputElemenet, {
			target: { value: "Create a new component" },
		});
		await fireEvent.click(buttonElement);
		expect(inputElemenet.value).toBe("");
	});
});
