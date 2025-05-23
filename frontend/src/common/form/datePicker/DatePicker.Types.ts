import { DatePickerProps } from "@mui/x-date-pickers/DatePicker"
import { Dayjs } from "dayjs"

type LocalizedDatePickerProps = DatePickerProps<Dayjs, false> & {
    helperText: string
}

export default LocalizedDatePickerProps