import { StyledRow } from "./Row.styles";

interface RowProps {
	children?: React.ReactNode;
}

export function Row({ children }: RowProps) {
	return <StyledRow>{children}</StyledRow>;
}
