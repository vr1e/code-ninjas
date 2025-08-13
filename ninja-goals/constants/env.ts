function getEnvVariable(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Environment variable ${name} must be defined!`);
	}
	return value;
}

const FIREBASE_API_KEY = getEnvVariable("EXPO_PUBLIC_FIREBASE_API_KEY");
const FIREBASE_AUTH_DOMAIN = getEnvVariable("EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN");
const FIREBASE_PROJECT_ID = getEnvVariable("EXPO_PUBLIC_FIREBASE_PROJECT_ID");
const FIREBASE_STORAGE_BUCKET = getEnvVariable(
	"EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET"
);
const FIREBASE_MESSAGING_SENDER_ID = getEnvVariable(
	"EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
);
const FIREBASE_APP_ID = getEnvVariable("EXPO_PUBLIC_FIREBASE_APP_ID");

export {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID,
};
