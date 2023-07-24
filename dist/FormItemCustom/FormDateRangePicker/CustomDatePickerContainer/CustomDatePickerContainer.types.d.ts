import { CustomDatePickerDateValue, CustomDatePickerSelectType, CustomDatePickerValue } from './CustomDatePicker';
import { Dayjs } from 'dayjs';
export declare type CustomDatePickerContainerMonths = [Dayjs, Dayjs, Dayjs];
export declare type CustomDatePickerContainerCalendarCount = 2 | 3;
export interface CustomDatePickerContainerProps {
    calendarCount?: CustomDatePickerContainerCalendarCount;
    selectType: CustomDatePickerSelectType;
    value: CustomDatePickerValue;
    months: CustomDatePickerContainerMonths;
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    onGetActionButtons?(): {
        label: string;
        start: Dayjs;
        end: Dayjs;
    }[];
    onChange(newValue: CustomDatePickerValue): void;
    onValueChange(selectType: CustomDatePickerSelectType, newValue: CustomDatePickerDateValue): void;
    onMonthsChange(months: CustomDatePickerContainerMonths): void;
}
export declare const CustomDatePickerContainerDefaultProps: Pick<CustomDatePickerContainerProps, 'calendarCount'>;
export interface CustomDatePickerContainerCommands {
    previousMonth(): void;
    nextMonth(): void;
    activeMonth(month: Dayjs): void;
}
