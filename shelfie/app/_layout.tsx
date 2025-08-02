import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/colors";
import { UserProvider } from "../contexts/UserContext";

const RootLayout = () => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	return (
		<UserProvider>
			<Stack
				screenOptions={{
					headerStyle: { backgroundColor: theme.navBackground },
					headerTintColor: theme.title,
				}}>
				<Stack.Screen name='(auth)' options={{ headerShown: false }} />
				<Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
				<Stack.Screen name='index' options={{ title: "Home" }} />
			</Stack>
		</UserProvider>
	);
};

export default RootLayout;
