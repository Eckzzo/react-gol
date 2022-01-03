import { IconButton } from "components/atoms/IconButton/IconButton.component";
import { Play } from "components/atoms/Play/Play.component";
import { ThemeButton } from "components/atoms/ThemeButton/ThemeButton.component";
import { StyledControls, StyledSection } from "./Controls.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "components/atoms/Tooltip/Tooltip.component";
import { SpeedButton } from "../SpeedButton/SpeedButton.component";

interface SectionProps {
	children?: React.ReactNode;
}

export function Controls() {
	return (
		<StyledControls>
			<Section>
				<Tooltip label="Rules">
					<IconButton>
						<FontAwesomeIcon icon={faQuestion} />
					</IconButton>
				</Tooltip>
				<ThemeButton />
			</Section>
			<Section>
				<Play />
				<SpeedButton />
			</Section>
			<Section></Section>
		</StyledControls>
	);
}

function Section({ children }: SectionProps) {
	return <StyledSection>{children}</StyledSection>;
}
