export class CssBuilder {
	private classes: Set<string>;
	private userClasses: string[] | undefined;
	private static readonly validClassNameRegex = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;
	public static validateClassNames = true;
	private validateClassNames: boolean;

	// Constructors overloads
	public constructor();
	public constructor(
		validateClassNames: boolean,
		userClasses: string | undefined,
	);
	public constructor(userClasses: string | undefined);

	// Implementation
	public constructor(
		arg1?: boolean | string | undefined,
		arg2?: string | undefined,
	) {
		this.classes = new Set<string>();
		this.userClasses = undefined;

		if (typeof arg1 === "boolean") {
			this.validateClassNames = arg1;
			this.userClasses = arg2 ? this.splitAndValidate(arg2) : undefined;
		} else {
			this.validateClassNames = CssBuilder.validateClassNames;
			this.userClasses = arg1 ? this.splitAndValidate(arg1) : undefined;
		}
	}

	// Overload signatures
	public addClass(values: string | undefined): CssBuilder;
	public addClass(values: string | undefined, when: boolean): CssBuilder;
	public addClass(values: string | undefined, when: () => boolean): CssBuilder;

	// Implementation
	public addClass(
		values: string | undefined,
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

	public build(): string | undefined {
		const allClasses = this.userClasses
			? new Set([...this.classes, ...this.userClasses])
			: this.classes;
		const result = Array.from(allClasses).join(" ");
		return result.trim() ? result : undefined;
	}

	public toString(): string | undefined {
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
