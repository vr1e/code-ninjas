import { StyleSheet, Text } from "react-native";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
import { Book } from "../../../contexts/BooksContext";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from "../../../constants/colors";

const BookDetails = () => {
	const [book, setBook] = useState<Book | null>(null);
	const { id } = useLocalSearchParams();

	const { fetchBookById, deleteBook } = useBooks();

	const handleDelete = async () => {
		await deleteBook(id as string);
		setBook(null);
		router.replace("/books");
	};

	useEffect(() => {
		async function loadBook() {
			const bookData = await fetchBookById(id as string);
			setBook(bookData);
		}

		loadBook();
	}, [id]);

	if (!book) {
		return (
			<ThemedView safe={true} styles={styles.container}>
				<ThemedLoader />
			</ThemedView>
		);
	}

	return (
		<ThemedView safe={true} styles={styles.container}>
			<ThemedCard styles={styles.card}>
				<ThemedText styles={styles.title}>{book?.title}</ThemedText>
				<ThemedText>Written by {book?.author}</ThemedText>
				<Spacer />

				<ThemedText title={true}>Book description:</ThemedText>
				<Spacer height={10} />
				<ThemedText>{book?.description}</ThemedText>
			</ThemedCard>

			<ThemedButton styles={styles.delete} onPress={handleDelete}>
				<Text style={{ color: "#fff", textAlign: "center" }}>Delete Book</Text>
			</ThemedButton>
		</ThemedView>
	);
};

export default BookDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
	},
	card: {
		margin: 20,
	},
	title: {
		fontSize: 22,
		marginVertical: 10,
	},
	delete: {
		marginTop: 40,
		backgroundColor: Colors.warning,
		width: 200,
		alignSelf: "center",
	},
});
