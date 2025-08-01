import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";

const Books = () => {
	return (
		<ThemedView styles={styles.container} safe={true}>
			<Spacer />
			<ThemedText title={true} styles={styles.heading}>
				Your Reading List
			</ThemedText>
		</ThemedView>
	);
};

export default Books;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	heading: {
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
});
