import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { StyledContent } from "./Tooltip.styles";

interface TooltipProps {
	label: string;
	children?: React.ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
	return (
		<TooltipPrimitive.Root>
			<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
			<StyledContent side="top" sideOffset={8}>
				{label}
			</StyledContent>
		</TooltipPrimitive.Root>
	);
}
