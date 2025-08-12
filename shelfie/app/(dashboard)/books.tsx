import { FlatList, Pressable, StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { useBooks } from "../../hooks/useBooks";
import ThemedCard from "../../components/ThemedCard";
import { Colors } from "../../constants/colors";
import { useRouter } from "expo-router";

const Books = () => {
	const { books } = useBooks();
	const router = useRouter();

	return (
		<ThemedView styles={styles.container} safe={true}>
			<Spacer />
			<ThemedText title={true} styles={styles.heading}>
				Your Reading List
			</ThemedText>

			<Spacer />
			<FlatList
				data={books}
				keyExtractor={book => book.$id}
				contentContainerStyle={styles.list}
				renderItem={({ item }) => (
					<Pressable onPress={() => router.push(`/books/${item.$id}`)}>
						<ThemedCard styles={styles.card}>
							<ThemedText styles={styles.title}>{item.title}</ThemedText>
							<ThemedText>Written by {item.author}</ThemedText>
						</ThemedCard>
					</Pressable>
				)}
			/>
		</ThemedView>
	);
};

export default Books;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
	},
	heading: {
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
	list: {
		marginTop: 40,
	},
	card: {
		width: "90%",
		marginHorizontal: "5%",
		marginVertical: 10,
		padding: 10,
		paddingLeft: 14,
		borderLeftColor: Colors.primary,
		borderLeftWidth: 4,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
});
