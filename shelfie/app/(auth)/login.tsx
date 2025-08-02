import {
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
} from "react-native";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/colors";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	const { login } = useUser();

	const handleSubmit = async () => {
		setError(null);

		try {
			await login(email.trim(), password);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				console.error("An unknown error occurred:", error);
			}
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ThemedView styles={styles.container}>
				<Spacer />
				<ThemedText title={true} styles={styles.title}>
					Login to your account
				</ThemedText>

				<ThemedTextInput
					placeholder='Email'
					keyboardType='email-address'
					onChangeText={setEmail}
					value={email}
					styles={{ width: "80%", marginBottom: 20 }}
				/>

				<ThemedTextInput
					placeholder='Password'
					secureTextEntry={true}
					onChangeText={setPassword}
					value={password}
					styles={{ width: "80%", marginBottom: 20 }}
				/>

				<ThemedButton onPress={handleSubmit}>
					<Text style={{ color: "#f2f2f2" }}>Login</Text>
				</ThemedButton>

				<Spacer />
				{error && <Text style={styles.error}>{error}</Text>}

				<Spacer height={100} />
				<Link href='/register'>
					<ThemedText styles={{ textAlign: "center" }}>
						Register instead
					</ThemedText>
				</Link>
			</ThemedView>
		</TouchableWithoutFeedback>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		textAlign: "center",
		fontSize: 18,
		marginBottom: 30,
	},
	error: {
		color: Colors.warning,
		padding: 10,
		backgroundColor: "#f5c1c8",
		borderColor: Colors.warning,
		borderWidth: 1,
		borderRadius: 6,
		marginHorizontal: 10,
	},
});
