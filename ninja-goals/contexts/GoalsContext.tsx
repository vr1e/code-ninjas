import { createContext, useState, ReactNode, useEffect } from "react";
import type { Goal, GoalsContextType } from "../types";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	onSnapshot,
	updateDoc,
} from "firebase/firestore";
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

	async function deleteGoal(id: Goal["id"]) {
		await deleteDoc(doc(db, COLLECTION_NAME, id));
	}

	async function updateGoal(
		id: Goal["id"],
		updates: Partial<Omit<Goal, "id">>
	) {
		await updateDoc(doc(db, COLLECTION_NAME, id), updates);
	}

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, COLLECTION_NAME),
			snapshot => {
				const documents = snapshot.docs.map(doc => ({
					...(doc.data() as Omit<Goal, "id">),
					id: doc.id,
				})) as Goal[];
				setGoals(documents);
			},
			error => {
				console.error("Error listening to goals collection:", error);
				// Optionally set an error state or show user notification
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
