import produce from "immer";
import { useRef, useEffect, useCallback } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import { useDebounce } from "hooks/useDebounce";
import { generateBoard } from "utils/generateBoard";
import {
	boardState,
	boardSizeState,
	isPlayingState,
	speedState,
} from "state/atoms";

import { StyledBoard } from "./Board.styles";
import { nextGeneration } from "utils/nextGeneration";
import { ICell } from "components/atoms/Cell/Cell.component";

export function Board() {
	const boardRef = useRef<HTMLDivElement>(null);
	const [board, setBoard] = useRecoilState(boardState);
	const setBoardSize = useSetRecoilState(boardSizeState);
	const isPlaying = useRecoilValue(isPlayingState);
	const speed = useRecoilValue(speedState);
	const playingRef = useRef(isPlaying);
	const speedRef = useRef(speed);

	const runGame = useCallback(() => {
		if (!playingRef.current) {
			return;
		}
		setBoard((board) => {
			return nextGeneration(board);
		});

		setTimeout(runGame, 1000 / speedRef.current);
	}, [setBoard]);

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

	useEffect(() => {
		playingRef.current = isPlaying;

		if (isPlaying) {
			runGame();
		}
	}, [isPlaying, runGame]);

	useEffect(() => {
		speedRef.current = speed;
	}, [speed]);

	return (
		<StyledBoard ref={boardRef}>
			{board.map((rows, col) => {
				return rows.map((cell, row) => {
					return (
						<ICell
							key={`${col}_${row}`}
							col={col}
							row={row}
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
				});
			})}
		</StyledBoard>
	);
}
