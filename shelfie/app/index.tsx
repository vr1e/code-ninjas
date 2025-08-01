import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

export default function Home() {
	return (
		<ThemedView styles={styles.container}>
			<ThemedLogo />
			<Spacer height={20} />

			<ThemedText styles={styles.title} title={true}>
				The Number 1
			</ThemedText>

			<Spacer height={10} />
			<ThemedText>Reading List App</ThemedText>
			<Spacer />

			<Link href='/login' style={styles.link}>
				<ThemedText>Login Page</ThemedText>
			</Link>
			<Link href='/register' style={styles.link}>
				<ThemedText>Register Page</ThemedText>
			</Link>
			<Link href='/profile' style={styles.link}>
				<ThemedText>Profile Page</ThemedText>
			</Link>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
	link: {
		marginVertical: 10,
		borderBottomWidth: 1,
	},
});
