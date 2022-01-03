import { styled } from "styles/stitches";

export const StyledPlay = styled("button", {
	height: "5.2rem",
	width: "5.2rem",
	color: "$sand12",
	backgroundColor: "$sand2",
	border: "none",
	borderRadius: "100px",
	boxShadow: `10px 0px 30px rgba(0, 56, 224, 0.318),
        0px 0px 30px -10px rgba(192, 0, 118, 0.322),
        -10px 0px 30px -10px rgba(255, 102, 1, 0.495)`,
	"&:hover": {
		backgroundColor: "$sand3",
		cursor: "pointer",
	},
});
