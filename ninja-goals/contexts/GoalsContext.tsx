import { createContext, useState, ReactNode, useEffect } from "react";
import type { Goal, GoalsContextType } from "../types";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const GoalsContext = createContext<GoalsContextType | null>(null);
const COLLECTION_NAME = "goals";

export function GoalsProvider({ children }: { children: ReactNode }) {
	const [goals, setGoals] = useState<Goal[]>([]);

	async function fetchGoals() {
		const snapshot = await getDocs(collection(db, COLLECTION_NAME));
		const documents = snapshot.docs.map(doc => ({
			...(doc.data() as Omit<Goal, "id">),
			id: doc.id,
		})) as Goal[];
		setGoals(documents);
	}

	async function createGoal(goal: Omit<Goal, "id">) {
		await addDoc(collection(db, COLLECTION_NAME), goal);
	}

	async function deleteGoal() {}

	async function updateGoal() {}

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, COLLECTION_NAME),
			snapshot => {
				const documents = snapshot.docs.map(doc => ({
					...(doc.data() as Omit<Goal, "id">),
					id: doc.id,
				})) as Goal[];
				setGoals(documents);
			}
		);

		return () => unsubscribe();
	}, []);

	return (
		<GoalsContext.Provider
			value={{
				goals,
				fetchGoals,
				createGoal,
				deleteGoal,
				updateGoal,
			}}>
			{children}
		</GoalsContext.Provider>
	);
}
