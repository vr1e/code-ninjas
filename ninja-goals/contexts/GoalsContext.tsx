import { createContext, useState, ReactNode, useContext } from "react";
import type { Goal, GoalsContextType } from "../types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const GoalsContext = createContext<GoalsContextType | null>(null);

export function GoalsProvider({ children }: { children: ReactNode }) {
	const [goals, setGoals] = useState<Goal[]>([]);

	async function fetchGoals() {}

	async function createGoal(goal: Goal) {
		await addDoc(collection(db, "goals"), goal);
	}

	async function deleteGoal() {}

	async function updateGoal() {}

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
