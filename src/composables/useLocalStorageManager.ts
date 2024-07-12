import { localStorageManager } from "~/storage/web-local-storage-manager";

export const useLocalStorageManager = () => {
	if (process.server) {
		return;
	}

	return localStorageManager;
};
