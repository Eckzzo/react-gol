import { styled } from "styles/stitches";

export const StyledIconButton = styled("button", {
	height: "2.8rem",
	width: "2.8rem",
	color: "$gray12",
	backgroundColor: "transparent",
	border: "none",
	borderRadius: "100%",
	"&:hover": {
		backgroundColor: "$gray4",
		cursor: "pointer",
	},
});
