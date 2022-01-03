import { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { StyledPlay } from "./Play.styles";
import { isPlayingState } from "state/atoms";
import { Tooltip } from "../Tooltip/Tooltip.component";

interface PlayProps extends React.ComponentPropsWithRef<"button"> {}

export const Play = forwardRef<HTMLButtonElement, PlayProps>(
	({ ...props }, ref) => {
		const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
		return (
			<Tooltip label={isPlaying ? "Pause" : "Play"}>
				<StyledPlay
					onClick={() => setIsPlaying(!isPlaying)}
					ref={ref}
					{...props}
				>
					{isPlaying ? (
						<FontAwesomeIcon icon={faPause} />
					) : (
						<FontAwesomeIcon icon={faPlay} />
					)}
				</StyledPlay>
			</Tooltip>
		);
	}
);

Play.displayName = "Play";
