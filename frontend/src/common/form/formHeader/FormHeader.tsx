import { BoxProps } from "@mui/material";
import { TypoH2 } from "../../../styled-components/styledTypographie";
import { StyledHeader } from "./FormHeader.Styles";
import FormHeaderProps from "./FormHeader.Types";

function FormHeader( {children, ...boxProps}: FormHeaderProps ) {
    return( 
        <>
        <StyledHeader {...boxProps}><TypoH2>{children}</TypoH2></StyledHeader>
        </>
    )
}

export default FormHeader