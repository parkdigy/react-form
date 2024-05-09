import { StaticDatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { FormAvailableDate } from '../@types';
import { FormDateType, FormTimeType } from '../../@types';
export type PrivateStaticDatePickerUnit = 'date' | 'action_date' | 'hour' | 'minute' | 'second';
export interface PrivateStaticDatePickerProps extends Omit<StaticDatePickerProps<Dayjs>, 'displayStaticWrapperAs' | 'renderInput' | 'onChange'> {
    type: FormDateType;
    time?: FormTimeType;
    availableDate?: FormAvailableDate;
    hours?: number[];
    minutes?: number[];
    seconds?: number[];
    minuteInterval?: number;
    secondInterval?: number;
    onChange(unit: PrivateStaticDatePickerUnit, newValue: Dayjs | null): void;
    onClose?(): void;
}
export interface PrivateStaticDatePickerCommands {
}
