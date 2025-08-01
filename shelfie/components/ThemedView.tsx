import {
	type StyleProp,
	type ViewStyle,
	View,
	useColorScheme,
} from "react-native";
import { Colors } from "../constants/colors";
import { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ThemedViewProps = {
	styles?: StyleProp<ViewStyle>;
	safe?: boolean;
	children?: ReactNode;
};

const ThemedView = ({ styles, safe = false, ...props }: ThemedViewProps) => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	if (!safe) {
		return (
			<View
				style={[{ backgroundColor: theme.background }, styles]}
				{...props}
			/>
		);
	}

	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				{
					backgroundColor: theme.background,
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
				},
				styles,
			]}
			{...props}
		/>
	);
};

export default ThemedView;
