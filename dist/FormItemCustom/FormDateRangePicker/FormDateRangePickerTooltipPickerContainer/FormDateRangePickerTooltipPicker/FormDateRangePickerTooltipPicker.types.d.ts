import { Dayjs } from 'dayjs';
export type FormDateRangePickerTooltipPickerDateValue = Dayjs | null;
export type FormDateRangePickerTooltipPickerValue = [
    FormDateRangePickerTooltipPickerDateValue,
    FormDateRangePickerTooltipPickerDateValue
];
export type FormDateRangePickerTooltipPickerSelectType = 'start' | 'end';
export interface FormDateRangePickerTooltipPickerProps {
    selectType: FormDateRangePickerTooltipPickerSelectType;
    value?: FormDateRangePickerTooltipPickerValue;
    focusedDate?: FormDateRangePickerTooltipPickerDateValue;
    month: Dayjs;
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    onValueChange?(selectType: FormDateRangePickerTooltipPickerSelectType, value: FormDateRangePickerTooltipPickerDateValue): void;
    onMouseEnterPickersDay?(date: FormDateRangePickerTooltipPickerDateValue): void;
    onMonthChange?(date: Dayjs): void;
}
export declare const FormDateRangePickerTooltipPickerDefaultProps: {};
export interface FormDateRangePickerTooltipPickerCommands {
    previousMonth(): void;
    nextMonth(): void;
    activeMonth(month: Dayjs): void;
}
