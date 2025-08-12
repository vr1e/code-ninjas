import {
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
} from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { useState } from "react";
import { useBooks } from "../../hooks/useBooks";
import { useRouter } from "expo-router";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";

const Create = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);

	const { createBook } = useBooks();
	const router = useRouter();

	const handleSubmit = async () => {
		if (!title.trim() || !author.trim() || !description.trim()) {
			return;
		}
		setLoading(true);
		await createBook({
			title: title.trim(),
			author: author.trim(),
			description: description.trim(),
		});

		setTitle("");
		setAuthor("");
		setDescription("");

		// redirect to books list
		router.replace("/(dashboard)/books");

		// reset loading state
		setLoading(false);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedView styles={styles.container}>
				<ThemedText title={true} styles={styles.heading}>
					Add a New Book
				</ThemedText>
				<Spacer />

				<ThemedTextInput
					styles={styles.input}
					placeholder='Book Title'
					value={title}
					onChangeText={setTitle}
				/>
				<Spacer />

				<ThemedTextInput
					styles={styles.input}
					placeholder='Author'
					value={author}
					onChangeText={setAuthor}
				/>
				<Spacer />

				<ThemedTextInput
					styles={styles.multiline}
					placeholder='Book Description'
					value={description}
					onChangeText={setDescription}
					multiline={true}
				/>
				<Spacer />

				<ThemedButton onPress={handleSubmit} disabled={loading}>
					<Text style={{ color: "#fff" }}>
						{loading ? "Saving..." : "Create Book"}
					</Text>
				</ThemedButton>
			</ThemedView>
		</TouchableWithoutFeedback>
	);
};

export default Create;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	heading: {
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
	input: {
		padding: 20,
		borderRadius: 6,
		alignSelf: "stretch",
		marginHorizontal: 40,
	},
	multiline: {
		padding: 20,
		borderRadius: 6,
		minHeight: 100,
		alignSelf: "stretch",
		marginHorizontal: 40,
	},
});
