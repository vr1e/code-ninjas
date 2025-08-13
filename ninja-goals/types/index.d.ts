/* Context */
export type Goal = {
	goal: string;
	progress: int;
};

export type GoalsContextType = {
	goals: Goal[];
	fetchGoals: () => Promise<void>;
	createGoal: (goal: Goal) => Promise<void>;
	deleteGoal: () => Promise<void>;
	updateGoal: () => Promise<void>;
};
