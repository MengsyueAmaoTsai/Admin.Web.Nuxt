import { describe, expect, it } from "vitest";
import { CssBuilder } from "../../src/utils/CssBuilder";

describe("CssBuilder", () => {
	it("should add single classes", () => {
		const builder = new CssBuilder();

		const classes = builder.addClass("class1").addClass("class2").build();

		expect(classes).toBe("class1 class2");
	});

	it("add valid user class", () => {
		const builder = new CssBuilder("my-user-class");

		const classes = builder.addClass("class1").addClass("class2").build();

		expect(classes).toBe("class1 class2 my-user-class");
	});

	it("add multiple valid user classes", () => {
		const builder = new CssBuilder("my-user-class1 my-user-class2");

		const classes = builder.addClass("class1").addClass("class2").build();

		expect(classes).toBe("class1 class2 my-user-class1 my-user-class2");
	});

	it("add classes with extra spaces", () => {
		const builder = new CssBuilder();

		const classes = builder
			.addClass("  my-class-1  ")
			.addClass("  my-class-2  ")
			.build();

		expect(classes).toBe("my-class-1 my-class-2");
	});

	it("add multiple classes at once", () => {
		const builder = new CssBuilder();

		const classes = builder.addClass("class1 class2").build();

		expect(classes).toBe("class1 class2");
	});

	it("add multiple classes at once with user class", () => {
		const builder = new CssBuilder("user-class");

		const classes = builder.addClass("class1 class2").build();

		expect(classes).toBe("class1 class2 user-class");
	});

	it("add multiple classes at once with extra spaces", () => {
		const builder = new CssBuilder();

		const classes = builder.addClass("  class1 class2  ").build();

		expect(classes).toBe("class1 class2");
	});

	it("should add classes based on condition", () => {
		const builder = new CssBuilder();

		const classes = builder
			.addClass("my-class-1", true)
			.addClass("my-class-2", false)
			.build();

		expect(classes).toBe("my-class-1");
	});

	it("should add classes based on function true", () => {
		const builder = new CssBuilder();

		const classes = builder.addClass("my-class-1", () => true).build();

		expect(classes).toBe("my-class-1");
	});

	it("should add classed based on function false", () => {
		const builder = new CssBuilder();

		const classes = builder.addClass("my-class-1", () => false).build();

		expect(classes).toBeUndefined();
	});

	it("should returns built classes", () => {
		const builder = new CssBuilder();

		const classes = builder.addClass("my-class").toString();

		expect(classes).toBe("my-class");
	});

	it("should ignore invalid class names", () => {
		const builder = new CssBuilder();

		const classes = builder
			.addClass("valid-class")
			.addClass("123-invalid-class")
			.build();

		expect(classes).toBe("valid-class");
	});

	it("should combines valid user and added classes", () => {
		const builder = new CssBuilder("user-class");

		const classes = builder.addClass("added-class").build();

		expect(classes).toBe("added-class user-class");
	});

	const cases = [
		{ expected: "min-h-[16px] user-class", values: ["min-h-[16px] "] },
		{ expected: "bg-red-500/50 user-class", values: [" bg-red-500/50"] },
		{ expected: "bg-[#ff0000] user-class", values: [" bg-[#ff0000] "] },
		{ expected: "a:hover user-class", values: ["a:hover"] },
		{
			expected: "min-h-[16px] a:hover user-class",
			values: ["min-h-[16px]", "a:hover"],
		},
	];

	for (const { expected, values } of cases) {
		it(`CssBuilder_ValidateClassNames_AcceptInvalid with values: ${values.join(
			", ",
		)}`, () => {
			const cssBuilder = new CssBuilder(false, "user-class");

			for (const value of values) {
				cssBuilder.addClass(value);
			}
			expect(cssBuilder.build()).toBe(expected);
		});
	}
});
