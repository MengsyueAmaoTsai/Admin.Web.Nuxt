export class CssBuilder {
	private classes: Set<string>;
	private userClasses: string[] | null;
	private static readonly validClassNameRegex = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;
	public static validateClassNames = true;
	private validateClassNames: boolean;

	// Constructors overloads
	public constructor();
	public constructor(validateClassNames: boolean, userClasses: string | null);
	public constructor(userClasses: string | null);

	// Implementation
	public constructor(arg1?: boolean | string | null, arg2?: string | null) {
		this.classes = new Set<string>();
		this.userClasses = null;

		if (typeof arg1 === "boolean") {
			this.validateClassNames = arg1;
			this.userClasses = arg2 ? this.splitAndValidate(arg2) : null;
		} else {
			this.validateClassNames = CssBuilder.validateClassNames;
			this.userClasses = arg1 ? this.splitAndValidate(arg1) : null;
		}
	}

	// Overload signatures
	public addClass(values: string | null): CssBuilder;
	public addClass(values: string | null, when: boolean): CssBuilder;
	public addClass(values: string | null, when: () => boolean): CssBuilder;

	// Implementation
	public addClass(
		values: string | null,
		when?: boolean | (() => boolean),
	): CssBuilder {
		if (typeof when === "undefined") {
			if (values) {
				this.classes = new Set([
					...this.classes,
					...this.splitAndValidate(values),
				]);
			}
		} else if (typeof when === "boolean") {
			if (when) {
				this.addClass(values);
			}
		} else if (typeof when === "function") {
			if (when()) {
				this.addClass(values);
			}
		}
		return this;
	}

	public build(): string | null {
		const allClasses = this.userClasses
			? new Set([...this.classes, ...this.userClasses])
			: this.classes;
		const result = Array.from(allClasses).join(" ");
		return result.trim() ? result : null;
	}

	public toString(): string | null {
		return this.build();
	}

	private isValidClassName(className: string): boolean {
		return this.validateClassNames
			? CssBuilder.validClassNameRegex.test(className)
			: true;
	}

	private splitAndValidate(input: string): string[] {
		return input
			.split(" ")
			.filter((className) => this.isValidClassName(className));
	}
}
