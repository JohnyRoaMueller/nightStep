import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StyledDatePicker } from "./DatePicker.Styles";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import LocalizedDatePickerProps from "./DatePicker.Types";

function LocalizedDatePicker( {...datePickerProps} : LocalizedDatePickerProps) {
    return(
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker {...datePickerProps} />
        </LocalizationProvider> 
        </>
    )
}

export default LocalizedDatePicker