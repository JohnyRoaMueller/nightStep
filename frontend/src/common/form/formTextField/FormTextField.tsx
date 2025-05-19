import { TextFieldProps } from "@mui/material";
import { StyledFormTextField } from "./FormTextField.Styles";
import FormTextFieldProps from "./FormTextField.Types";

function FormTextField( {...textFieldProps}: FormTextFieldProps) {
    return(
        <>
        <StyledFormTextField fullWidth {...textFieldProps}/>
        </>
    )
}

export default FormTextField