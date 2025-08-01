import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const RootLayout = () => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	return (
		<Stack
			screenOptions={{
				headerStyle: { backgroundColor: theme.navBackground },
				headerTintColor: theme.title,
			}}>
			<Stack.Screen name='(auth)' options={{ headerShown: false }} />
			<Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
			<Stack.Screen name='index' options={{ title: "Home" }} />
		</Stack>
	);
};

export default RootLayout;
