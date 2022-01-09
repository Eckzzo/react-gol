import { useRecoilState } from "recoil";
import { theme as lightTheme, darkTheme } from "styles/stitches";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { themeState } from "state";
import { Tooltip } from "components/atoms/Tooltip/Tooltip.component";
import { IconButton } from "components/atoms/IconButton/IconButton.component";

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
		<Tooltip label={theme.mode === "light" ? "Dark Mode" : "Light Mode"}>
			<IconButton onClick={handleClick}>
				{theme.mode === "light" ? (
					<FontAwesomeIcon icon={faMoon} />
				) : (
					<FontAwesomeIcon icon={faSun} />
				)}
			</IconButton>
		</Tooltip>
	);
}
