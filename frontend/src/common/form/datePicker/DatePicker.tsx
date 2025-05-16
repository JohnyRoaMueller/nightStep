import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StyledDatePicker } from "./DatePicker.Styles";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

function LocalizedDatePicker( basicProps : DatePickerProps<Dayjs>) {
    return(
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker {...basicProps} />
        </LocalizationProvider> 
        </>
    )
}

export default LocalizedDatePicker