import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

describe("COMPONENT: Header ", () => {
	// getByText
	it("should match given title props", () => {
		render(<Header title='header' />);
		const linkElement = screen.getByText(/header/i);
		expect(linkElement).toBeDefined();
	});

	// getByRole
	it("should render the same text passed into title prop", () => {
		render(<Header title='header' />);
		const headingElement = screen.getByRole("heading", { name: "header" });
		expect(headingElement).toBeDefined();
	});

	// getByTitle
	it("should render the same text passed into title ", () => {
		render(<Header title='header' />);
		const headingElement = screen.getByTitle("header");
		expect(headingElement).toBeInTheDocument();
	});

	// queryBy
	it("should ", () => {
		render(<Header title='header' />);
		const headingElement = screen.queryByText(/Curious/i);
		expect(headingElement).not.toBe(undefined);
	});

	// getAllByRole
	it.only("should have only one heading element", () => {
		render(<Header title='header' />);
		const headingElements = screen.getAllByRole("heading");
		expect(headingElements.length).toBe(1);
	});
});
