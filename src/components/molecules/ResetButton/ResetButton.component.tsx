import { IconButton } from "components/atoms/IconButton/IconButton.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "components/atoms/Tooltip/Tooltip.component";
import { useSetRecoilState } from "recoil";
import { boardState } from "state";

export function ResetButton() {
	const setBoard = useSetRecoilState(boardState);

	const handleClick = () => {
		setBoard((board) => {
			return Array.from({ length: board.length }, () =>
				Array.from({ length: board[0].length }, () => 0)
			);
		});
	};

	return (
		<Tooltip label="Reset Board">
			<IconButton onClick={handleClick}>
				<FontAwesomeIcon icon={faRotateLeft} />
			</IconButton>
		</Tooltip>
	);
}
