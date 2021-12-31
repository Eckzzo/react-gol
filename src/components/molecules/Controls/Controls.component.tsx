import { StyledControls } from "./Controls.styles";

interface ControlProps {
	children?: React.ReactNode;
}

export function Controls({ children }: ControlProps) {
	return <StyledControls>{children}</StyledControls>;
}
