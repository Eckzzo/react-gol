import produce from "immer";
import { useRef, useEffect } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { useRecoilState, useRecoilValue } from "recoil";

import { useDebounce } from "hooks/useDebounce";
import { generateBoard } from "utils/generateBoard";
import { CELL_SIZE, CELL_GAP } from "utils/gameSettings";
import { boardState, boardSizeState, themeState } from "state/atoms";

import { StyledBoard } from "./Board.styles";

const SPACING = CELL_SIZE + CELL_GAP;

export function Board() {
	const theme = useRecoilValue(themeState);
	const boardRef = useRef<HTMLDivElement>(null);
	const [board, setBoard] = useRecoilState(boardState);
	const [boardSize, setBoardSize] = useRecoilState(boardSizeState);

	const handleBoardResize = useDebounce(() => {
		if (boardRef.current) {
			const boardWidth = Math.floor(boardRef.current.clientWidth);
			const boardHeight = Math.floor(boardRef.current.clientHeight);
			const { board, width, height } = generateBoard(boardWidth, boardHeight);
			setBoardSize({ width, height });
			setBoard(board);
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
			<Stage height={boardSize.height} width={boardSize.width}>
				<Layer>
					{board.map((rows, col) => {
						return rows.map((cell, row) => {
							return (
								<Rect
									x={row * SPACING}
									y={col * SPACING}
									strokeWidth={0.25}
									width={CELL_SIZE}
									height={CELL_SIZE}
									key={`${col}_${row}`}
									stroke={theme.theme.colors.olive12.value}
									fill={cell ? theme.theme.colors.lime9.value : ""}
									onClick={() => {
										const newBoard = produce(board, (boardCopy) => {
											boardCopy[col][row] = board[col][row] ? 0 : 1;
										});
										setBoard(newBoard);
									}}
								/>
							);
						});
					})}
				</Layer>
			</Stage>
		</StyledBoard>
	);
}
