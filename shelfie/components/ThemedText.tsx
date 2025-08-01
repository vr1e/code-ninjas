import {
	Text,
	useColorScheme,
	type StyleProp,
	type TextStyle,
} from "react-native";
import { Colors } from "../constants/colors";
import { ReactNode } from "react";

type ThemedTextProps = {
	styles?: StyleProp<TextStyle>;
	title?: boolean;
	children?: ReactNode;
};

const ThemedText = ({ styles, title = false, ...props }: ThemedTextProps) => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	const textColor = title ? theme.title : theme.text;
	return <Text style={[{ color: textColor }, styles]} {...props} />;
};

export default ThemedText;
