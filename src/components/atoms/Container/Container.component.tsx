import { useRecoilValue } from "recoil";
import { themeState } from "state/atoms";
import { StyledContainer } from "./Container.styles";

interface ContainerProps {
	children?: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
	const theme = useRecoilValue(themeState);
	return <StyledContainer className={theme.theme}>{children}</StyledContainer>;
}
