import { styled } from "styles/stitches";

export const StyledPlay = styled("button", {
	height: "5.2rem",
	width: "5.2rem",
	color: "$olive1",
	backgroundColor: "$lime9",
	border: "none",
	borderRadius: "100px",
	"&:hover": {
		backgroundColor: "$lime10",
		cursor: "pointer",
	},
});
