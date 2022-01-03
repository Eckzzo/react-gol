import { useRecoilState } from "recoil";
import { theme as lightTheme, darkTheme } from "styles/stitches";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { themeState } from "state/atoms";
import { IconButton } from "components/atoms/IconButton/IconButton.component";
import { Tooltip } from "../Tooltip/Tooltip.component";

export function ThemeButton() {
	const [theme, setTheme] = useRecoilState(themeState);

	const handleClick = () => {
		setTheme(
			theme.mode === "light"
				? { mode: "dark", theme: darkTheme }
				: { mode: "light", theme: lightTheme }
		);
	};
	return (
		<Tooltip label="Change Theme">
			<IconButton onClick={handleClick}>
				{theme.mode === "light" ? <MoonIcon /> : <SunIcon />}
			</IconButton>
		</Tooltip>
	);
}
