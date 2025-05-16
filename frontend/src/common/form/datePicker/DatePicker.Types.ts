import { DatePickerProps } from "@mui/x-date-pickers/DatePicker"
import { Dayjs } from "dayjs"

interface LocalizedDatePickerProps {
    basicProps: DatePickerProps<Dayjs>
}

export default LocalizedDatePickerProps