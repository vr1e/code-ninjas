import { createContext, ReactNode, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID, Models } from "react-native-appwrite";

type UserContextType = {
	user: Models.User | null;
	authChecked: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<Models.User | null>(null);
	const [authChecked, setAuthChecked] = useState(false);

	async function login(email: string, password: string) {
		try {
			await account.createEmailPasswordSession(email, password);
			const response = await account.get();
			setUser(response);
		} catch (error) {
			throw new Error(error instanceof Error ? error.message : "Login failed");
		}
	}

	async function register(email: string, password: string) {
		try {
			await account.create(ID.unique(), email, password);
			await login(email, password);
		} catch (error) {
			throw new Error(error instanceof Error ? error.message : "Login failed");
		}
	}

	async function logout() {
		await account.deleteSession("current");
		setUser(null);
	}

	async function getInitialUserValue() {
		try {
			const response = await account.get();
			setUser(response);
		} catch (error) {
			setUser(null);
			throw new Error(
				error instanceof Error ? error.message : "Failed to fetch user"
			);
		} finally {
			setAuthChecked(true);
		}
	}

	useEffect(() => {
		getInitialUserValue();
	}, []);

	return (
		<UserContext.Provider
			value={{ user, authChecked, login, register, logout }}>
			{children}
		</UserContext.Provider>
	);
}
