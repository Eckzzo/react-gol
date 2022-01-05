import produce from "immer";

const operations = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
];

export function nextGeneration(board: number[][]) {
	return produce(board, (boardCopy) => {
		for (let i = 0; i < board.length; i++) {
			for (let k = 0; k < board[i].length; k++) {
				let neighbors = 0;
				operations.forEach(([x, y]) => {
					const newI = i + x;
					const newK = k + y;
					if (
						newI >= 0 &&
						newI < board.length &&
						newK >= 0 &&
						newK < board[i].length
					) {
						neighbors += board[newI][newK];
					}
				});

				if (neighbors < 2 || neighbors > 3) {
					boardCopy[i][k] = 0;
				} else if (board[i][k] === 0 && neighbors === 3) {
					boardCopy[i][k] = 1;
				}
			}
		}
	});
}
