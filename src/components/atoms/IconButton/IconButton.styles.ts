import { styled } from "styles/stitches";

export const StyledIconButton = styled("button", {
	height: "2.8rem",
	width: "2.8rem",
	color: "$olive12",
	backgroundColor: "$olive1",
	border: "none",
	borderRadius: "0.4rem",
	"&:hover": {
		backgroundColor: "$olive3",
		cursor: "pointer",
	},
});
