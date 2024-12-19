import { describe, expect, it } from "vitest";
import { StyleBuilder } from "../../src/utils/StyleBuilder";

describe("StyleBuilder", () => {
	it("should handle raw styles and maintain their order", () => {
		const builder = new StyleBuilder();
		builder.addStyle("color: red");
		builder.addStyle("background-color: blue");

		const style = builder.build();
		expect(style).toBe("color: red; background-color: blue;");
	});

	it("should trim extra spaces around raw styles", () => {
		const builder = new StyleBuilder();
		builder.addStyle("  color: red  ");

		const style = builder.build();
		expect(style).toBe("color: red;");
	});

	it("should handle raw styles with extra semicolons", () => {
		const builder = new StyleBuilder();
		builder.addStyle("color: red;");

		const style = builder.build();
		expect(style).toBe("color: red;");
	});

	it("should add a single style to the existing styles", () => {
		const builder = new StyleBuilder("font-size: 12px;");
		const style = builder.addStyle("color: red;").build();
		expect(style).toBe("color: red; font-size: 12px;");
	});

	it("should handle and clean up redundant semicolons in initial styles", () => {
		const builder = new StyleBuilder(
			"  font-size: 12px;;  font-name: courier;;  ",
		);

		const style = builder.addStyle("color: red;").build();
		expect(style).toBe("color: red; font-size: 12px; font-name: courier;");
	});

	it("should build styles correctly when using key-value pairs for styles", () => {
		const builder = new StyleBuilder();
		const style = builder
			.addStyle("color", "red")
			.addStyle("background-color", "blue")
			.build();

		expect(style).toBe("color: red; background-color: blue;");
	});

	it("should add a style when a boolean condition is true", () => {
		const builder = new StyleBuilder();
		const style = builder.addStyle("color", "red", true).build();
		expect(style).toBe("color: red;");
	});

	it("should add a style when a boolean condition is false", () => {
		const builder = new StyleBuilder();
		const style = builder.addStyle("color", "red", false).build();
		expect(style).toBe(undefined);
	});

	it("should add a style when a conditional function returns true", () => {
		const builder = new StyleBuilder();
		const style = builder.addStyle("color", "red", () => true).build();
		expect(style).toBe("color: red;");
	});

	it("should add a style when a conditional function returns false", () => {
		const builder = new StyleBuilder();
		const style = builder.addStyle("color", "red", () => false).build();
		expect(style).toBe(undefined);
	});

	it("should return the built styles correctly", () => {
		const builder = new StyleBuilder();

		const style = builder.addStyle("color", "red").toString();

		expect(style).toBe("color: red;");
	});
});
