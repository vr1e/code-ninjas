import { Image, useColorScheme } from "react-native";

// images
import LightLogo from "../assets/img/logo_light.webp";
import DarkLogo from "../assets/img/logo_dark.webp";

const ThemedLogo = ({ ...props }) => {
	const colorScheme = useColorScheme();
	const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

	return <Image source={logo} {...props} />;
};

export default ThemedLogo;
