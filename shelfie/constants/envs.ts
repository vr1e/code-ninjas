function getEnvVariable(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Environment variable ${name} must be defined!`);
	}
	return value;
}

const APPWRITE_PROJECT_ID = getEnvVariable("EXPO_PUBLIC_APPWRITE_PROJECT_ID");
const APPWRITE_ENDPOINT = getEnvVariable("EXPO_PUBLIC_APPWRITE_ENDPOINT");
const DATABASE_ID = getEnvVariable("EXPO_PUBLIC_DATABASE_ID");
const COLLECTION_ID = getEnvVariable("EXPO_PUBLIC_COLLECTION_ID");
const ENDPOINT = getEnvVariable("EXPO_PUBLIC_ENDPOINT");

export {
	APPWRITE_PROJECT_ID,
	APPWRITE_ENDPOINT,
	DATABASE_ID,
	COLLECTION_ID,
	ENDPOINT,
};
