import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Play } from "components/atoms/Play/Play.component";
import { NextButton } from "../NextButton/NextButton.component";
import { SpeedButton } from "../SpeedButton/SpeedButton.component";
import { ResetButton } from "../ResetButton/ResetButton.component";
import { Tooltip } from "components/atoms/Tooltip/Tooltip.component";
import { IconButton } from "components/atoms/IconButton/IconButton.component";
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
				<Tooltip label="Rules">
					<IconButton>
						<FontAwesomeIcon icon={faQuestion} />
					</IconButton>
				</Tooltip>
				<ResetButton />
				<Play />
				<NextButton />
				<SpeedButton />
			</Section>
			<Section></Section>
		</StyledControls>
	);
}

function Section({ children }: SectionProps) {
	return <StyledSection>{children}</StyledSection>;
}
