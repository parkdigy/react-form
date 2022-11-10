import { Dayjs } from 'dayjs';
export declare type CustomDatePickerDateValue = Dayjs | null;
export declare type CustomDatePickerValue = [CustomDatePickerDateValue, CustomDatePickerDateValue];
export declare type CustomDatePickerSelectType = 'start' | 'end';
export interface CustomDatePickerProps {
    selectType: CustomDatePickerSelectType;
    value?: CustomDatePickerValue;
    focusedDate?: CustomDatePickerDateValue;
    month: Dayjs;
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    onValueChange?(selectType: CustomDatePickerSelectType, value: CustomDatePickerDateValue): void;
    onMouseEnterPickersDay?(date: CustomDatePickerDateValue): void;
    onMonthChange?(date: Dayjs): void;
}
export declare const CustomDatePickerDefaultProps: {};
export interface CustomDatePickerCommands {
    previousMonth(): void;
    nextMonth(): void;
    activeMonth(month: Dayjs): void;
}
