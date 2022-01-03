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

export const { styled, createTheme, globalCss, theme, keyframes } =
	createStitches({
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

export type Theme = typeof darkTheme;

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
		height: "100vh",
		margin: 0,
		backgroundColor: "$sand1",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
	},

	"#root": {
		height: "100%",
	},
});
