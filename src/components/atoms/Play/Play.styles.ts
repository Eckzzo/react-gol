import { styled } from "styles/stitches";

export const StyledPlay = styled("button", {
	height: "4.8rem",
	width: "4.8rem",
	color: "$lime11",
	backgroundColor: "$gray1",
	fontSize: "1.6rem",
	border: "1px solid $lime7",
	borderRadius: "100px",
	"&:hover": {
		border: "1px solid $lime8",
		cursor: "pointer",
	},
});
