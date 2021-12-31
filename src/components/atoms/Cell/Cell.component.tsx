import { Rect } from "react-konva";

const CELL_SIZE = 20;

interface CellProps {
	x: number;
	y: number;
	isActive?: boolean;
	onClick?: () => void;
}

export function Cell({ isActive, onClick, ...props }: CellProps) {
	return (
		<Rect
			height={CELL_SIZE}
			width={CELL_SIZE}
			fill={isActive ? "orange" : ""}
			stroke="C8C7C1"
			strokeWidth={0.1}
			onClick={onClick}
			{...props}
		/>
	);
}
