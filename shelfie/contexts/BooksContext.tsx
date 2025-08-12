import { createContext, useEffect, useState, type ReactNode } from "react";
import { databases, client } from "../lib/appwrite";
import { COLLECTION_ID, DATABASE_ID } from "../constants/envs";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export type Book = {
	$id: string;
	title: string;
	author: string;
	description: string;
	userId: string;
};

type BooksContextType = {
	books: Book[];
	fetchBooks: () => Promise<void>;
	fetchBookById: (id: string) => Promise<Book | null>;
	createBook: (book: Omit<Book, "$id" | "userId">) => Promise<void>;
	deleteBook: (id: string) => Promise<void>;
};

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children }: { children: ReactNode }) {
	const [books, setBooks] = useState<Book[]>([]);
	const { user } = useUser();

	async function fetchBooks() {
		try {
			const response = await databases.listDocuments(
				DATABASE_ID,
				COLLECTION_ID,
				[Query.equal("userId", user!.$id)]
			);
			setBooks(
				response.documents.map(doc => ({
					$id: doc.$id,
					title: doc.title,
					author: doc.author,
					description: doc.description,
					userId: doc.userId,
				}))
			);

			console.log(response.documents);
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : "Failed to fetch books"
			);
		}
	}

	async function fetchBookById(id: string): Promise<Book | null> {
		try {
			const response = await databases.getDocument(
				DATABASE_ID,
				COLLECTION_ID,
				id
			);
			return {
				$id: response.$id,
				title: response.title,
				author: response.author,
				description: response.description,
				userId: response.userId,
			};
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : "Failed to fetch book by ID"
			);
		}
	}

	async function createBook(book: Omit<Book, "$id" | "userId">) {
		try {
			await databases.createDocument(
				DATABASE_ID,
				COLLECTION_ID,
				ID.unique(),
				{ ...book, userId: user!.$id },
				[
					Permission.read(Role.user(user!.$id)),
					Permission.update(Role.user(user!.$id)),
					Permission.delete(Role.user(user!.$id)),
				]
			);
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : "Failed to create book"
			);
		}
	}

	async function deleteBook(id: string) {
		try {
			await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
			setBooks(prevBooks => prevBooks.filter(book => book.$id !== id));
		} catch (error) {
			throw new Error(
				error instanceof Error ? error.message : "Failed to delete book"
			);
		}
	}

	useEffect(() => {
		let unsubscribe: () => void;
		const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

		if (user) {
			fetchBooks();
			unsubscribe = client.subscribe(channel, response => {
				const { payload, events } = response;
				const book = payload as Book;

				if (events[0].includes("create")) {
					setBooks(prevBooks => [...prevBooks, book]);
				}

				if (events[0].includes("delete")) {
					setBooks(prevBooks => prevBooks.filter(b => b.$id !== book.$id));
				}
			});
		} else {
			setBooks([]);
		}

		return () => {
			if (unsubscribe) {
				return unsubscribe();
			}
		};
	}, [user]);

	return (
		<BooksContext.Provider
			value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
			{children}
		</BooksContext.Provider>
	);
}
