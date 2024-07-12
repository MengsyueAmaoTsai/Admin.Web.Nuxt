export class WebLocalStorageManager {
	storage: Storage;

	public constructor() {
		this.storage = window.localStorage;
	}

	public save(key: string, value: string): void {
		if (!key) {
			return;
		}

		this.storage.setItem(key, JSON.stringify(value).trim());
	}

	public get(key: string): string {
		const result = this.storage.getItem(key);

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
		this.storage.removeItem(key);
	}

	public clear() {
		this.storage.clear();
	}
}
