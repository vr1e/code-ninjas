import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/img/logo_light.webp";

export default function Home() {
	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.image} />
			<Text style={[styles.title, { color: "purple" }]}>The Number 1</Text>
			<Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
		</View>
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
	image: {
		marginVertical: 20,
	},
});
