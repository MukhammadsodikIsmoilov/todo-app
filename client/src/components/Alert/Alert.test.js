import { render, screen } from "@testing-library/react";
import Alert, { ChooseIcon } from "./Alert.jsx";

describe("Alert component", () => {
	it("should", () => {});
});

describe("Alert - ChooseIcon()", () => {
	it("should return a specific icon based on the given type", () => {
		// Arrange
		const type1 = "success";
		const type2 = "danger";
		const type3 = "info";

		// Act
		const result1 = ChooseIcon(type1);
		const result2 = ChooseIcon(type2);
		const result3 = ChooseIcon(type3);

		// Assert
		expect(result1.props.className).toContain("fa-check-circle");
		expect(result2.props.className).toContain("fa-exclamation-circle");
		expect(result3.props.className).toContain("fa-info-circle");
	});
});
