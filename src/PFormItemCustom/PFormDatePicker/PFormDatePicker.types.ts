import { PrivateDatePickerValue, PrivateDatePickerProps, PrivateDatePickerCommands } from '../../@private';

export type PFormDatePickerValue = PrivateDatePickerValue;

export interface PFormDatePickerProps
  extends Omit<
    PrivateDatePickerProps,
    'type' | 'time' | 'hours' | 'minutes' | 'seconds' | 'minuteInterval' | 'secondInterval'
  > {}

export interface PFormDatePickerCommands extends PrivateDatePickerCommands {}
