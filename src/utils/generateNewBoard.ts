import { CELL_GAP, CELL_SIZE } from "./gameSettings";

export function generateNewBoard(width: number, height: number): number[][] {
	const numOfRows = Math.floor(width / (CELL_SIZE + CELL_GAP));
	const numOfColumns = Math.floor(height / (CELL_SIZE + CELL_GAP));
	return Array.from({ length: numOfColumns }, () =>
		Array.from({ length: numOfRows }, () => 0)
	);
}
