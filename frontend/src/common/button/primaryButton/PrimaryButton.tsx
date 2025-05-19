import { StyledButton } from "./PrimaryButton.Styles";
import PrimaryButtonProps from "./PrimaryButton.Types";

function PrimaryButton( { children, ...buttonProps }: PrimaryButtonProps) {
    return(
        <>
        <StyledButton {...buttonProps}>{children}</StyledButton>
        </>
    )
}

export default PrimaryButton