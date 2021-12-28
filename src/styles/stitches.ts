import { createStitches } from "@stitches/react";
import {
	sand,
	sandDark,
	orange,
	orangeDark,
	pink,
	pinkDark,
	violet,
	violetDark,
} from "@radix-ui/colors";

export const { styled, createTheme, globalCss } = createStitches({
	theme: {
		colors: {
			...sand,
			...orange,
			...pink,
			...violet,
		},
	},
});

export const darkTheme = createTheme({
	colors: {
		...sandDark,
		...orangeDark,
		...pinkDark,
		...violetDark,
	},
});

export const globalStyles = globalCss({
	"*, *::before, *::after": {
		margin: 0,
		padding: 0,
		boxSizing: "inherit",
	},

	html: {
		boxSizing: "border-box",
		fontSize: "62.5%",
	},

	body: {
		margin: 0,
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
	},
});
