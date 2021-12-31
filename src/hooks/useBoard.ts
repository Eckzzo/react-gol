import { useState, useEffect, useRef } from "react";
import produce from "immer";

import { useDebounce } from "./useDebounce";
import { generateBoard } from "utils/generateBoard";

export function useBoard() {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [board, setBoard] = useState<number[][]>([]);
	const boardRef = useRef<HTMLDivElement>(null);

	const handleBoardSize = useDebounce(() => {
		if (boardRef.current) {
			const width = Math.floor(boardRef.current.clientWidth);
			const height = Math.floor(boardRef.current.clientHeight);
			const { board, boardWidth, boardHeight } = generateBoard(width, height);
			setWidth(boardWidth);
			setHeight(boardHeight);
			setBoard(board);
		}
	}, 50);

	const handleCell = (col: number, row: number) => {
		const newBoard = produce(board, (boardCopy) => {
			boardCopy[col][row] = board[col][row] ? 0 : 1;
		});
		setBoard(newBoard);
	};

	useEffect(() => {
		handleBoardSize();
		window.addEventListener("resize", handleBoardSize);

		return () => {
			window.removeEventListener("resize", handleBoardSize);
		};
	}, [handleBoardSize]);

	return { boardRef, board, width, height, handleCell } as const;
}
