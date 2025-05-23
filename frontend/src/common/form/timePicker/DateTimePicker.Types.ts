import { TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';

export type LocalizedTimePickerProps = TimePickerProps<Dayjs, false> & {
    helperText: string
}