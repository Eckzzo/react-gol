import { IconButton } from "components/atoms/IconButton/IconButton.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "components/atoms/Tooltip/Tooltip.component";
import { useSetRecoilState, useRecoilState } from "recoil";
import { boardState, isPlayingState } from "state/atoms";
import { nextGeneration } from "utils/nextGeneration";

export function NextButton() {
	const setBoard = useSetRecoilState(boardState);
	const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

	const handleClick = () => {
		if (isPlaying) {
			setIsPlaying(false);
		}
		setBoard((board) => nextGeneration(board));
	};

	return (
		<Tooltip label="Next Generation">
			<IconButton onClick={handleClick}>
				<FontAwesomeIcon icon={faAngleRight} />
			</IconButton>
		</Tooltip>
	);
}
