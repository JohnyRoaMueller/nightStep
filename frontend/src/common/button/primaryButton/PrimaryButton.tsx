import { StyledButton } from "./PrimaryButton.Styles";
import PrimaryButtonProps from "./PrimaryButton.Types";

function PrimaryButton( { children }: PrimaryButtonProps) {
    return(
        <>
        <StyledButton >{children}</StyledButton>
        </>
    )
}

export default PrimaryButton