import {
	Pressable,
	StyleProp,
	ViewStyle,
	StyleSheet,
	PressableProps,
} from "react-native";
import { Colors } from "../constants/colors";
import { ReactNode } from "react";

type ThemedButtonProps = PressableProps & {
	styles?: StyleProp<ViewStyle>;
	children?: ReactNode;
};

const ThemedButton = ({ styles, ...props }: ThemedButtonProps) => {
	return (
		<Pressable
			style={({ pressed }) => [style.btn, pressed && style.pressed]}
			{...props}
		/>
	);
};

export default ThemedButton;

const style = StyleSheet.create({
	btn: {
		backgroundColor: Colors.primary,
		padding: 18,
		borderRadius: 6,
		marginVertical: 10,
	},
	pressed: {
		opacity: 0.5,
	},
});
