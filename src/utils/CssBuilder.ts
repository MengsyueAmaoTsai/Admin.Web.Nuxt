export class CssBuilder {
	private static readonly validClassNameRegex = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;
	private readonly classes: Set<string>;
	private readonly userClasses: string[] | undefined;

	private readonly validateClassNames: boolean;
	public static validateClassNames = true;

	public constructor();
	public constructor(userClasses: string | undefined);
	public constructor(
		validateClassNames: boolean,
		userClasses: string | undefined,
	);
	public constructor(arg1?: string | boolean, arg2?: string) {
		this.classes = new Set<string>();
		this.userClasses = undefined;

		if (typeof arg1 === "boolean") {
			this.validateClassNames = arg1;
			this.userClasses = arg2 ? this.splitAndValidate(arg2) : undefined;
			return;
		}

		this.validateClassNames = CssBuilder.validateClassNames;
		this.userClasses = arg1 ? this.splitAndValidate(arg1) : undefined;
	}

	public addClass(values: string | undefined): CssBuilder;
	public addClass(values: string | undefined, when: boolean): CssBuilder;
	public addClass(values: string | undefined, when: () => boolean): CssBuilder;
	public addClass(
		arg1: string | undefined,
		when?: boolean | (() => boolean),
	): CssBuilder {
		if (typeof when === "undefined") {
			if (arg1) {
				for (const cls of this.splitAndValidate(arg1.trim())) {
					this.classes.add(cls);
				}
			}
		} else if (typeof when === "boolean") {
			if (when) {
				this.addClass(arg1);
			}
		} else if (typeof when === "function") {
			if (when()) {
				this.addClass(arg1);
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
			.map((className) => className.trim())
			.filter((className) => this.isValidClassName(className));
	}
}
