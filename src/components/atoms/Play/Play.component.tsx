import { forwardRef } from "react";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";

import { StyledPlay } from "./Play.styles";

interface PlayProps extends React.ComponentPropsWithRef<"button"> {
	isPlaying?: boolean;
}

export const Play = forwardRef<HTMLButtonElement, PlayProps>(
	({ isPlaying, ...props }, ref) => {
		return (
			<StyledPlay ref={ref} {...props}>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</StyledPlay>
		);
	}
);

Play.displayName = "Play";
