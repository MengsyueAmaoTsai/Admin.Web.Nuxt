export class StyleBuilder {
	private styles: Set<string>;
	private userStyles: string | undefined;

	constructor();
	constructor(userStyles: string | undefined);
	constructor(userStyles?: string | undefined) {
		this.styles = new Set<string>();
		this.userStyles = userStyles
			? this.processUserStyles(userStyles)
			: undefined;
	}

	// Overload signatures
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

	// Implementation
	public addStyle(
		propOrStyle: string,
		value?: string | undefined,
		when?: boolean | (() => boolean),
	): StyleBuilder {
		if (typeof value === "undefined") {
			return this.addRaw(propOrStyle);
		} else if (typeof when === "undefined") {
			return this.addRaw(`${propOrStyle}: ${value}`);
		} else if (typeof when === "boolean") {
			return when ? this.addRaw(`${propOrStyle}: ${value}`) : this;
		} else if (typeof when === "function") {
			return when() ? this.addRaw(`${propOrStyle}: ${value}`) : this;
		}
		return this;
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
		if (style && style.trim()) {
			this.styles.add(style.trim().replace(/;$/, ""));
		}
		return this;
	}

	private processUserStyles(userStyles: string): string {
		return userStyles
			.split(";")
			.map((s) => s.trim())
			.filter((s) => s)
			.join("; ");
	}
}
