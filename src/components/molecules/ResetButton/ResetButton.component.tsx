import { IconButton } from "components/atoms/IconButton/IconButton.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "components/atoms/Tooltip/Tooltip.component";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { boardSizeState, boardState, isPlayingState } from "state/atoms";
import { generateBoard } from "utils/generateBoard";

export function ResetButton() {
	const setBoard = useSetRecoilState(boardState);
	const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
	const { width, height } = useRecoilValue(boardSizeState);

	const handleClick = () => {
		if (isPlaying) {
			setIsPlaying(false);
		}
		const generated = generateBoard(width, height);
		setBoard(generated.board);
	};

	return (
		<Tooltip label="Reset Board">
			<IconButton onClick={handleClick}>
				<FontAwesomeIcon icon={faRotate} />
			</IconButton>
		</Tooltip>
	);
}
