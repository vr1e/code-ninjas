/* Context */
export type Goal = {
	id: string;
	goal: string;
	progress: number;
};

export type GoalsContextType = {
	goals: Goal[];
	fetchGoals: () => Promise<void>;
	createGoal: (goal: Omit<Goal, "id">) => Promise<void>;
	deleteGoal: (id: Goal["id"]) => Promise<void>;
	updateGoal: (
		id: Goal["id"],
		updates: Partial<Omit<Goal, "id">>
	) => Promise<void>;
};
