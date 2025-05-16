import { TextFieldProps } from "@mui/material";
import { StyledFormTextField } from "./FormTextField.Styles";
import FormTextFieldProps from "./FormTextField.Types";

function FormTextField( props: FormTextFieldProps) {
    return(
        <>
        <StyledFormTextField fullWidth {...props}/>
        </>
    )
}

export default FormTextField