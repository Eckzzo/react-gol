import { styled, keyframes } from "styles/stitches";
import { Content } from "@radix-ui/react-tooltip";

const fade = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});

export const StyledContent = styled(Content, {
	padding: "0.4rem 0.8rem",
	color: "white",
	fontSize: "1.4rem",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	willChange: "opacity",
	animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
	animationDuration: "200ms",
	boxShadow:
		"hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	'&[data-state="delayed-open"]': {
		'&[data-side="top"]': { animationName: fade },
		'&[data-side="right"]': { animationName: fade },
		'&[data-side="bottom"]': { animationName: fade },
		'&[data-side="left"]': { animationName: fade },
	},
});
