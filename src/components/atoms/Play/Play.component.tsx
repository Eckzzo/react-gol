import { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";

import { StyledPlay } from "./Play.styles";
import { isPlayingState } from "state/atoms";

interface PlayProps extends React.ComponentPropsWithRef<"button"> {}

export const Play = forwardRef<HTMLButtonElement, PlayProps>(
	({ ...props }, ref) => {
		const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
		return (
			<StyledPlay onClick={() => setIsPlaying(!isPlaying)} ref={ref} {...props}>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</StyledPlay>
		);
	}
);

Play.displayName = "Play";
