import { styled, TextField } from "@mui/material";

export const StyledFormTextField = styled(TextField)`
    .MuiFormHelperText-root {
        color: black;
    }

    &:focus-within  {
        .MuiFormHelperText-root {
            color: white;
        }
    }

`;