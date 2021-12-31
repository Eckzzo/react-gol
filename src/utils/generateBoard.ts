import { CELL_SIZE } from "./gameSettings";

interface GeneratedBoard {
	boardWidth: number;
	boardHeight: number;
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
		boardWidth: numOfRows * (CELL_SIZE + 1),
		boardHeight: numOfColumns * (CELL_SIZE + 1),
	};
}
