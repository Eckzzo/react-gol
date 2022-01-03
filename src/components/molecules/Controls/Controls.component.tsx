import { Play } from "components/atoms/Play/Play.component";
import { ThemeButton } from "components/atoms/ThemeButton/ThemeButton.component";
import { StyledControls, StyledSection } from "./Controls.styles";

interface SectionProps {
	children?: React.ReactNode;
}

export function Controls() {
	return (
		<StyledControls>
			<Section>
				<ThemeButton />
			</Section>
			<Section>
				<Play />
			</Section>
			<Section></Section>
		</StyledControls>
	);
}

function Section({ children }: SectionProps) {
	return <StyledSection>{children}</StyledSection>;
}
