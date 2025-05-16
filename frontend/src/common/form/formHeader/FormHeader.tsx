import { TypoH2 } from "../../../styled-components/styledTypographie";
import { StyledHeader } from "./FormHeader.Styles";
import FormHeaderProps from "./FormHeader.Types";

function FormHeader( { children }: FormHeaderProps) {
    return( 
        <>
        <StyledHeader><TypoH2>{children}</TypoH2></StyledHeader>
        </>
    )
}

export default FormHeader