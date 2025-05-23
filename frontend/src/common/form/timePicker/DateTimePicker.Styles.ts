import { Box, styled } from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const StyledDateTimePicker = styled(DateTimePicker)`

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