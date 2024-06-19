export const usePasswordGenerator = () => {
	return ref({
		generate: () => {
			const maxLength = 20;
			const charset =
				"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";
			let password = "";
			for (let i = 0; i < maxLength; i++) {
				password += charset.charAt(Math.floor(Math.random() * charset.length));
			}
			return password;
		},
	});
};
