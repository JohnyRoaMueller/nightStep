import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const StyledDatePicker = styled(DatePicker)`

  width: 100%;

  &:focus-within  {
        .MuiFormHelperText-root {
            color: white;
        }
    }  

  .MuiFormHelperText-root {
    color: black;
  }

`;