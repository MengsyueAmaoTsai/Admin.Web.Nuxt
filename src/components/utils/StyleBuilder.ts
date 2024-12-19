export class StyleBuilder {
	private styles: Set<string>;
	private userStyles: string | null;

	constructor();
	constructor(userStyles: string | null);
	constructor(userStyles?: string | null) {
		this.styles = new Set<string>();
		this.userStyles = userStyles ? this.processUserStyles(userStyles) : null;
	}

	// Overload signatures
	public addStyle(style: string | null): StyleBuilder;
	public addStyle(prop: string, value: string | null): StyleBuilder;
	public addStyle(
		prop: string,
		value: string | null,
		when: boolean,
	): StyleBuilder;
	public addStyle(
		prop: string,
		value: string | null,
		when: () => boolean,
	): StyleBuilder;

	// Implementation
	public addStyle(
		propOrStyle: string,
		value?: string | null,
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

	public build(): string | null {
		const allStyles = this.userStyles
			? new Set([...this.styles, this.userStyles])
			: this.styles;
		if (allStyles.size === 0) {
			return null;
		}
		return Array.from(allStyles)
			.map((s) => `${s};`)
			.join(" ")
			.trim();
	}

	public toString(): string | null {
		return this.build();
	}

	private addRaw(style: string | null): StyleBuilder {
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
