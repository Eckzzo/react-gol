import * as Slider from "@radix-ui/react-slider";
import { styled } from "styles/stitches";
export const StyledSlider = styled(Slider.Root, {
	position: "relative",
	display: "flex",
	alignItems: "center",
	userSelect: "none",
	touchAction: "none",
	width: "100%",
	'&[data-orientation="horizontal"]': {
		height: "2rem",
	},
});

export const StyledTrack = styled(Slider.Track, {
	backgroundColor: "$gray12",
	position: "relative",
	flexGrow: 1,
	borderRadius: "9999px",

	'&[data-orientation= "horizontal"]': { height: 3 },
});

export const StyledRange = styled(Slider.Range, {
	position: "absolute",
	backgroundColor: "$lime10",
	borderRadius: "9999px",
	height: "100%",
});

export const StyledThumb = styled(Slider.Thumb, {
	all: "unset",
	display: "block",
	width: "2rem",
	height: "2rem",
	backgroundColor: "$gray3",
	border: "1px solid $lime9",
	borderRadius: "9999px",
	boxShadow: "0 2px 10px $grayA4",
	"&:hover": {
		backgroundColor: "$gray6",
		cursor: "pointer",
	},
});
