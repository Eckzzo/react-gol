import { styled } from "styles/stitches";

export const StyledPlay = styled("button", {
	height: "4.8rem",
	width: "4.8rem",
	color: "$grass11",
	backgroundColor: "$grass1",
	fontSize: "1.6rem",
	border: "1px solid $grass7",
	borderRadius: "100px",
	"&:hover": {
		border: "1px solid $grass8",
		cursor: "pointer",
	},
});
