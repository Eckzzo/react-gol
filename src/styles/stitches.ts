import { createStitches } from "@stitches/react";
import { gray, grayDark, blackA, grass, grassDark } from "@radix-ui/colors";

export const { styled, createTheme, globalCss, theme, keyframes } =
	createStitches({
		theme: {
			colors: {
				...gray,
				...blackA,
				...grass,
			},
		},
	});

export const darkTheme = createTheme({
	colors: {
		...grayDark,
		...blackA,
		...grassDark,
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
		fontFamily: "Roboto",
	},

	body: {
		height: "100vh",
		margin: 0,
		backgroundColor: "$olive1",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
	},

	"#root": {
		height: "100%",
	},
});
