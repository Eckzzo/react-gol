import { CELL_GAP, CELL_SIZE } from "./gameSettings";

interface GeneratedBoard {
	width: number;
	height: number;
	board: number[][];
}

export function generateBoard(width: number, height: number): GeneratedBoard {
	const numOfRows = Math.floor(width / (CELL_SIZE + 1));
	const numOfColumns = Math.floor(height / (CELL_SIZE + 1));
	const board = Array.from({ length: numOfColumns }, () =>
		Array.from({ length: numOfRows }, () => 0)
	);
	return {
		board,
		width: numOfRows * (CELL_SIZE + CELL_GAP),
		height: numOfColumns * (CELL_SIZE + CELL_GAP),
	};
}
