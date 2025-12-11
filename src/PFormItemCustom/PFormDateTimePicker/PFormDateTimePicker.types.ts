import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands, PrivateDateTimePickerValue } from '../../@private';

export type PFormDateTimePickerValue = PrivateDateTimePickerValue;

export interface PFormDateTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  time: Required<PrivateDateTimePickerProps['time']>;
}

export interface PFormDateTimePickerCommands extends PrivateDateTimePickerCommands {}
