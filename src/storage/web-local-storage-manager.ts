class WebLocalStorageManager {
	public save(key: string, value: string): void {
		if (!key) {
			return;
		}

		window.localStorage.setItem(key, JSON.stringify(value).trim());
	}

	public get(key: string): string {
		const result = window.localStorage.getItem(key);

		if (!result) {
			return "";
		}

		try {
			return JSON.parse(result);
		} catch (error) {
			return result;
		}
	}

	public remove(key: string): void {
		window.localStorage.removeItem(key);
	}

	public clear() {
		window.localStorage.clear();
	}
}

export const localStorageManager = new WebLocalStorageManager();
