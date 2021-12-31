import { Stage, Layer } from "react-konva";
import { StyledBoard } from "./Board.styles";

import { useBoard } from "hooks/useBoard";
import { Cell } from "components/atoms/Cell/Cell.component";

interface BoardProps {
	children?: React.ReactNode;
}

export function Board({ children }: BoardProps) {
	const { boardRef, board, width, height, handleCell } = useBoard();

	return (
		<StyledBoard ref={boardRef}>
			<Stage width={width} height={height}>
				<Layer>
					{board.map((rows, col) => {
						return rows.map((_, row) => {
							return (
								<Cell
									key={`${col}_${row}`}
									isActive={board[col][row] ? true : false}
									onClick={() => handleCell(col, row)}
									x={row * 21}
									y={col * 21}
								/>
							);
						});
					})}
				</Layer>
			</Stage>
		</StyledBoard>
	);
}

// <Cell key={idx} isActive={cell} x={idx * 21} y={0} />

/*

{board.map((col, colIdx) => {
						return col.map((cell, rowIdx) => {
							return (
								<Cell
									key={`${colIdx}_${rowIdx}`}
									isActive={cell}
									x={rowIdx * 21}
									y={colIdx * 21}
								/>
							);
						});
					})}

*/
