import { ReactNode } from "react";
import {
	StyleProp,
	TextInput,
	TextInputProps,
	TextStyle,
	useColorScheme,
} from "react-native";
import { Colors } from "../constants/colors";

type ThemedTextInputProps = TextInputProps & {
	styles?: StyleProp<TextStyle>;
	title?: boolean;
	children?: ReactNode;
};

const ThemedTextInput = ({ styles, ...props }: ThemedTextInputProps) => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	return (
		<TextInput
			autoCapitalize='none'
			style={[
				{
					backgroundColor: theme.uiBackground,
					color: theme.text,
					padding: 20,
					borderRadius: 6,
				},
				styles,
			]}
			{...props}
		/>
	);
};

export default ThemedTextInput;
