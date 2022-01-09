import produce from "immer";
import { useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { useDebounce } from "hooks/useDebounce";
import { useInterval } from "hooks/useInterval";
import { nextGeneration } from "utils/nextGeneration";
import { Row } from "components/atoms/Row/Row.component";
import { generateNewBoard } from "utils/generateNewBoard";
import { Cell } from "components/atoms/Cell/Cell.component";
import { boardState, isPlayingState, speedState } from "state";

import { StyledBoard } from "./Board.styles";

export function Board() {
	const boardRef = useRef<HTMLDivElement>(null);

	const speed = useRecoilValue(speedState);
	const isPlaying = useRecoilValue(isPlayingState);
	const [board, setBoard] = useRecoilState(boardState);

	useInterval(
		() => {
			setBoard((board) => {
				return nextGeneration(board);
			});
		},
		isPlaying ? 1000 / speed : null
	);

	const handleBoardResize = useDebounce(() => {
		if (boardRef.current) {
			const { clientWidth, clientHeight } = boardRef.current;
			setBoard(generateNewBoard(clientWidth, clientHeight));
		}
	}, 50);

	useEffect(() => {
		handleBoardResize();
		window.addEventListener("resize", handleBoardResize);

		return () => {
			window.removeEventListener("resize", handleBoardResize);
		};
	}, [handleBoardResize]);

	return (
		<StyledBoard ref={boardRef}>
			{board.map((rows, col) => {
				return (
					<Row key={`row_${col}`}>
						{rows.map((cell, row) => {
							return (
								<Cell
									key={`${col}_${row}`}
									value={cell}
									onClick={() => {
										setBoard((board) => {
											return produce(board, (boardCopy) => {
												boardCopy[col][row] = board[col][row] ? 0 : 1;
											});
										});
									}}
								/>
							);
						})}
					</Row>
				);
			})}
		</StyledBoard>
	);
}
