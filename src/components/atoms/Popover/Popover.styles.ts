import { Content, Arrow, Close } from "@radix-ui/react-popover";
import { styled, keyframes } from "styles/stitches";

const slideDownAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(16px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});

export const StyledContent = styled(Content, {
	padding: "1.2rem",
	height: "100%",
	backgroundColor: "$gray3",
	border: "1px solid $gray6",
	borderRadius: "0.4rem",
	boxShadow:
		"hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "400ms",
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		willChange: "transform, opacity",
		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
		},
	},
	"&:focus": {
		boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $grass7`,
	},
});

export const StyledArrow = styled(Arrow, {
	fill: "$gray4",
});

export const StyledClose = styled(Close, {
	all: "unset",
	position: "absolute",
	top: 4,
	right: 4,
	height: "2.4rem",
	width: "2.4rem",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: "$grass11",
	fontFamily: "unset",
	borderRadius: "100%",

	"&:hover": {
		backgroundColor: "$gray6",
		cursor: "pointer",
	},
});
