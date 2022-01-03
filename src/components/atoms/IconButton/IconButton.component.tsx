import { forwardRef } from "react";

import { StyledIconButton } from "./IconButton.styles";

interface IconButtonProps extends React.ComponentPropsWithRef<"button"> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<StyledIconButton ref={ref} {...props}>
				{children}
			</StyledIconButton>
		);
	}
);

IconButton.displayName = "IconButton";
