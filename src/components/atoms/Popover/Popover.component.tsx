import * as PopoverPrimitive from "@radix-ui/react-popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { StyledContent, StyledArrow, StyledClose } from "./Popover.styles";

interface PopoverProps {
	children?: React.ReactNode;
}

interface TriggerProps {
	children?: React.ReactNode;
}

interface ContentProps {
	children?: React.ReactNode;
}

export function Popover({ children }: PopoverProps) {
	return <PopoverPrimitive.Root>{children}</PopoverPrimitive.Root>;
}

function Trigger({ children }: TriggerProps) {
	return (
		<PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
	);
}

function Content({ children }: ContentProps) {
	return (
		<StyledContent sideOffset={8} portalled={false}>
			<StyledClose>
				<FontAwesomeIcon icon={faClose} />
			</StyledClose>
			{children}
			<StyledArrow />
		</StyledContent>
	);
}

Popover.Trigger = Trigger;
Popover.Content = Content;
