import { Play } from "components/atoms/Play/Play.component";
import { NextButton } from "../NextButton/NextButton.component";
import { ResetButton } from "../ResetButton/ResetButton.component";
import { ThemeButton } from "components/atoms/ThemeButton/ThemeButton.component";

import { StyledControls, StyledSection } from "./Controls.styles";
import { SpeedButton } from "../SpeedButton/SpeedButton.component";

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
				<ResetButton />
				<Play />
				<NextButton />
			</Section>
			<Section>
				<SpeedButton />
			</Section>
		</StyledControls>
	);
}

function Section({ children }: SectionProps) {
	return <StyledSection>{children}</StyledSection>;
}
