import React from "react";
import { StyledCell } from "./Cell.styles";

interface CellProps {
	col: number;
	row: number;
	value: number;
	onClick: () => void;
}

export function Cell({ row, col, value, onClick }: CellProps) {
	return <StyledCell active={value ? "true" : "false"} onClick={onClick} />;
}

export const ICell = React.memo(Cell, (prevProps, nextProps) => {
	if (prevProps.value !== nextProps.value) return false;
	return true;
});
