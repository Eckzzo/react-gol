import * as PopoverPrimitive from "@radix-ui/react-popover";

import { StyledContent, StyledArrow } from "./Popover.styles";

interface PopoverProps {
	children?: React.ReactNode;
}

interface TriggerProps {
	children?: React.ReactNode;
}

interface ContentProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Popover({ children }: PopoverProps) {
	return <PopoverPrimitive.Root>{children}</PopoverPrimitive.Root>;
}

function Trigger({ children }: TriggerProps) {
	return (
		<PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
	);
}

function Content({ children, ...props }: ContentProps) {
	return (
		<StyledContent sideOffset={8} portalled={false} {...props}>
			{children}
			<StyledArrow />
		</StyledContent>
	);
}

Popover.Trigger = Trigger;
Popover.Content = Content;
