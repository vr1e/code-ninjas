import { createContext, useState, ReactNode, useContext } from "react";

type Goal = {
	id: string;
	title: string;
	description?: string;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date;
};

type GoalsContextType = {
	goals: Goal[];
	fetchGoals: () => Promise<void>;
	createGoal: (
		goal: Omit<Goal, "id" | "createdAt" | "updatedAt">
	) => Promise<void>;
	deleteGoal: (id: string) => Promise<void>;
	updateGoal: (
		id: string,
		updates: Partial<Omit<Goal, "id" | "createdAt" | "updatedAt">>
	) => Promise<void>;
};

export const GoalsContext = createContext<GoalsContextType | null>(null);

export function GoalsProvider({ children }: { children: ReactNode }) {
	const [goals, setGoals] = useState<Goal[]>([]);

	async function fetchGoals() {}

	async function createGoal(
		goal: Omit<Goal, "id" | "createdAt" | "updatedAt">
	) {}

	async function deleteGoal(id: string) {}

	async function updateGoal(
		id: string,
		updates: Partial<Omit<Goal, "id" | "createdAt" | "updatedAt">>
	) {}

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
