import { IconButton } from "components/atoms/IconButton/IconButton.component";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "components/atoms/Popover/Popover.component";
import { Slider } from "components/atoms/Slider/Slider.component";

export function SpeedButton() {
	return (
		<Popover>
			<Popover.Trigger>
				<IconButton>
					<FontAwesomeIcon icon={faGauge} />
				</IconButton>
			</Popover.Trigger>
			<Popover.Content>
				<Slider />
			</Popover.Content>
		</Popover>
	);
}
