import { Client, Account, Avatars } from "react-native-appwrite";

const client = new Client()
	.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
	.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!);

export const account = new Account(client);
export const avatars = new Avatars(client);
