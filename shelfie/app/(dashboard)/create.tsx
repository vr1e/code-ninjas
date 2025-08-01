import { StyleSheet, Text } from "react-native";
import React from "react";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";

const Create = () => {
	return (
		<ThemedView styles={styles.container}>
			<ThemedText title={true} styles={styles.heading}>
				Add a New Book
			</ThemedText>
			<Spacer />
			<Text>Create</Text>
		</ThemedView>
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
});
