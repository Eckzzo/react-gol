import { useRecoilState } from "recoil";
import { faForwardFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { speedState } from "state";
import { Slider } from "components/atoms/Slider/Slider.component";
import { Popover } from "components/atoms/Popover/Popover.component";
import { IconButton } from "components/atoms/IconButton/IconButton.component";

export function SpeedButton() {
	const [speed, setSpeed] = useRecoilState(speedState);
	return (
		<Popover>
			<Popover.Trigger>
				<IconButton>
					<FontAwesomeIcon icon={faForwardFast} />
				</IconButton>
			</Popover.Trigger>
			<Popover.Content style={{ width: "20rem" }}>
				<Slider
					value={[speed]}
					min={1}
					max={20}
					step={1}
					onValueChange={([value]) => setSpeed(value)}
				/>
			</Popover.Content>
		</Popover>
	);
}
