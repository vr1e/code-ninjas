import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
	const { logout, user } = useUser();

	return (
		<ThemedView styles={styles.container}>
			<ThemedText title={true} styles={styles.heading}>
				{user?.email}
			</ThemedText>
			<Spacer />

			<ThemedText>Time to start reading some books...</ThemedText>
			<Spacer />

			<ThemedButton onPress={logout}>
				<ThemedText>Logout</ThemedText>
			</ThemedButton>
		</ThemedView>
	);
};

export default Profile;

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
