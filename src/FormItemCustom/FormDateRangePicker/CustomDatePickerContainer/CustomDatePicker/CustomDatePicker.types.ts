import { Dayjs } from 'dayjs';

export type CustomDatePickerDateValue = Dayjs | null;

export type CustomDatePickerValue = [CustomDatePickerDateValue, CustomDatePickerDateValue];

export type CustomDatePickerSelectType = 'start' | 'end';

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

export const CustomDatePickerDefaultProps = {};

export interface CustomDatePickerCommands {
  previousMonth(): void;
  nextMonth(): void;
  activeMonth(month: Dayjs): void;
}
