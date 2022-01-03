import { styled } from "styles/stitches";

export const StyledIconButton = styled("button", {
	height: "2.8rem",
	width: "2.8rem",
	color: "$sand12",
	backgroundColor: "$sand1",
	border: "none",
	borderRadius: "0.4rem",
	"&:hover": {
		backgroundColor: "$sand3",
		cursor: "pointer",
	},
});
