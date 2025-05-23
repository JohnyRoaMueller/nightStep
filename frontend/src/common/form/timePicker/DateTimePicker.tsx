import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider"
import { StyledDateTimePicker } from "./DateTimePicker.Styles"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizedTimePickerProps } from "./DateTimePicker.Types";

function LocalizedDateTimePicker( {helperText, ...timeickerProps} : LocalizedTimePickerProps ) {
    return(
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDateTimePicker slotProps={{textField: {helperText: `${helperText}`, variant: "standard", fullWidth: true}}} {...timeickerProps}></StyledDateTimePicker>
        </LocalizationProvider>
        </>
    )
}

export default LocalizedDateTimePicker