import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StyledDatePicker } from "./DatePicker.Styles";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import LocalizedDatePickerProps from "./DatePicker.Types";
import { Box } from "@mui/material";

function LocalizedDatePicker( {helperText, ...datePickerProps} : LocalizedDatePickerProps) {
    return(
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <StyledDatePicker slotProps={{textField: {helperText: `${helperText}`, variant: "standard", fullWidth: true}}}  {...datePickerProps} />
        </LocalizationProvider> 
        </>
    )
}

export default LocalizedDatePicker