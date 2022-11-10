import { PrivateDatePickerValue, PrivateDatePickerProps, PrivateDatePickerCommands } from '../../@private';

export type FormDatePickerValue = PrivateDatePickerValue;

export interface FormDatePickerProps
  extends Omit<
    PrivateDatePickerProps,
    'type' | 'time' | 'hours' | 'minutes' | 'seconds' | 'minuteInterval' | 'secondInterval'
  > {}

export const FormDatePickerDefaultProps = {};

export interface FormDatePickerCommands extends PrivateDatePickerCommands {}
