import {
	StyledSlider,
	StyledRange,
	StyledTrack,
	StyledThumb,
} from "./Slider.styles";

interface SliderProps {
	value?: number[];
	max?: number;
	min?: number;
	step?: number;
	onValueChange?: (value: number[]) => void;
}

export function Slider(props: SliderProps) {
	return (
		<StyledSlider {...props}>
			<StyledTrack>
				<StyledRange />
			</StyledTrack>
			<StyledThumb />
		</StyledSlider>
	);
}
