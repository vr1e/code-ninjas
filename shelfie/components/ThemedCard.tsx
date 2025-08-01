import {
	type StyleProp,
	type ViewStyle,
	View,
	useColorScheme,
	StyleSheet,
} from "react-native";
import { Colors } from "../constants/colors";
import { ReactNode } from "react";

type ThemedCardProps = {
	styles?: StyleProp<ViewStyle>;
	children?: ReactNode;
};

const ThemedCard = ({ styles, ...props }: ThemedCardProps) => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	return (
		<View
			style={[{ backgroundColor: theme.uiBackground }, style.card, styles]}
			{...props}
		/>
	);
};

export default ThemedCard;

const style = StyleSheet.create({
	card: {
		padding: 20,
		borderRadius: 5,
	},
});
