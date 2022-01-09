import { styled } from "styles/stitches";
import { CELL_SIZE, CELL_GAP } from "utils/gameSettings";

export const StyledCell = styled("li", {
	minHeight: CELL_SIZE,
	minWidth: CELL_SIZE,
	margin: CELL_GAP / 2,
	listStyle: "none",
	variants: {
		active: {
			true: {
				backgroundColor: "$lime9",
				border: "1px solid $lime7",
				"&:hover": {
					border: "1px solid $lime9",
					backgroundColor: "$lime10",
				},
			},
			false: {
				backgroundColor: "$gray2",
				border: "1px solid $gray7",
				"&:hover": {
					border: "1px solid $lime8",
					backgroundColor: "$lime1",
				},
			},
		},
	},
});
