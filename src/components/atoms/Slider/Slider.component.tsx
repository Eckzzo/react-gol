import {
	StyledSlider,
	StyledRange,
	StyledTrack,
	StyledThumb,
} from "./Slider.styles";

export function Slider() {
	return (
		<StyledSlider defaultValue={[50]} max={100} step={1}>
			<StyledTrack>
				<StyledRange />
			</StyledTrack>
			<StyledThumb />
		</StyledSlider>
	);
}
