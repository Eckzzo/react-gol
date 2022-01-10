import { Content, Arrow } from "@radix-ui/react-popover";
import { styled, keyframes } from "styles/stitches";

const slideDownAndFade = keyframes({
	"0%": { opacity: 0, transform: "translateY(16px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});

export const StyledContent = styled(Content, {
	padding: "1.2rem",
	height: "100%",
	backgroundColor: "$gray3",
	border: "1px solid $lime6",
	borderRadius: "0.4rem",
	boxShadow:
		"hsl(206 22% 7% / 15%) 0px 4px 12px -10px, hsl(206 22% 7% / 10%) 0px 4px 16px -6px",
	"@media (prefers-reduced-motion: no-preference)": {
		animationDuration: "400ms",
		animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
		willChange: "transform, opacity",
		'&[data-state="open"]': {
			'&[data-side="top"]': { animationName: slideDownAndFade },
		},
	},
});

export const StyledArrow = styled(Arrow, {
	fill: "$gray4",
});
