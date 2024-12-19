export class StyleBuilder {
	private readonly styles: Set<string>;
	private readonly userStyles: string | undefined;

	constructor();
	constructor(userStyles: string | undefined);
	constructor(userStyles?: string | undefined) {
		this.styles = new Set<string>();
		this.userStyles =
			userStyles && userStyles.trim() !== ""
				? userStyles
						.split(";")
						.map((s) => s.trim())
						.filter((s) => s !== "")
						.join("; ")
				: undefined;
	}

	public addStyle(style: string | undefined): StyleBuilder;
	public addStyle(prop: string, value: string | undefined): StyleBuilder;
	public addStyle(
		prop: string,
		value: string | undefined,
		when: boolean,
	): StyleBuilder;
	public addStyle(
		prop: string,
		value: string | undefined,
		when: () => boolean,
	): StyleBuilder;
	public addStyle(
		arg1: string | undefined,
		arg2?: string | undefined,
		arg3?: boolean | (() => boolean),
	): StyleBuilder {
		if (typeof arg2 === "undefined") {
			return this.addRaw(arg1);
		}

		if (typeof arg3 === "undefined") {
			return this.addRaw(`${arg1}: ${arg2}`);
		}

		if (typeof arg3 === "boolean") {
			return arg3 ? this.addRaw(`${arg1}: ${arg2}`) : this;
		}

		return arg3() ? this.addRaw(`${arg1}: ${arg2}`) : this;
	}

	public build(): string | undefined {
		const allStyles = this.userStyles
			? new Set([...this.styles, this.userStyles])
			: this.styles;

		if (allStyles.size === 0) {
			return undefined;
		}

		return Array.from(allStyles)
			.map((s) => `${s};`)
			.join(" ")
			.trim();
	}

	public toString(): string | undefined {
		return this.build();
	}

	private addRaw(style: string | undefined): StyleBuilder {
		if (style && style.trim() !== "") {
			this.styles.add(style.trim().replace(/;$/, ""));
		}
		return this;
	}
}
