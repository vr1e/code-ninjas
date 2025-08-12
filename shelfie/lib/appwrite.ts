import { Client, Account, Avatars, Databases } from "react-native-appwrite";
import {
	APPWRITE_ENDPOINT,
	APPWRITE_PROJECT_ID,
	ENDPOINT,
} from "../constants/envs";

export const client = new Client()
	.setEndpoint(ENDPOINT)
	.setProject(APPWRITE_PROJECT_ID)
	.setPlatform(APPWRITE_ENDPOINT);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
