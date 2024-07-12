import { WebLocalStorageManager } from "~/storage/web-local-storage-manager";

export const useLocalStorageManager = () => {
	if (process.server) {
		return;
	}

	return new WebLocalStorageManager();
};
