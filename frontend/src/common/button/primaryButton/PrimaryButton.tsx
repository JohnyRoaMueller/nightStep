import { forwardRef } from "react";
import { StyledButton } from "./PrimaryButton.Styles";
import PrimaryButtonProps from "./PrimaryButton.Types";

// Wichtig: React.Ref<HTMLButtonElement> angeben
const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(({ children, ...buttonProps }, ref) => {
    return (
      <StyledButton ref={ref} {...buttonProps}>
        {children}
      </StyledButton>
    );
  }
);

export default PrimaryButton;