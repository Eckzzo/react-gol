import { memo } from "react";

import { StyledCell } from "./Cell.styles";

interface CellProps {
	value: number;
	onClick: () => void;
}

function ICell({ value, onClick }: CellProps) {
	return <StyledCell active={value ? "true" : "false"} onClick={onClick} />;
}

export const Cell = memo(ICell, (prevProps, nextProps) => {
	if (prevProps.value !== nextProps.value) return false;
	return true;
});
