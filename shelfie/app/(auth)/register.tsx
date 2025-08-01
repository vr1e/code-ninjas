import { StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const Register = () => {
	const handleSubmit = () => {
		// Handle login logic here
		console.log("Register button pressed");
	};

	return (
		<ThemedView styles={styles.container}>
			<Spacer />
			<ThemedText title={true} styles={styles.title}>
				Register for an account
			</ThemedText>

			<ThemedButton onPress={handleSubmit}>
				<Text style={{ color: "#f2f2f2" }}>Submit</Text>
			</ThemedButton>

			<Spacer height={100} />
			<Link href='/login'>
				<ThemedText styles={{ textAlign: "center" }}>Login instead</ThemedText>
			</Link>
		</ThemedView>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		textAlign: "center",
		fontSize: 18,
	},
});
