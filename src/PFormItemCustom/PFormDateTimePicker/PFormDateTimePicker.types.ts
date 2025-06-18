import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands } from '../../@private';

export interface PFormDateTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  time: Required<PrivateDateTimePickerProps['time']>;
}

export interface PFormDateTimePickerCommands extends PrivateDateTimePickerCommands {}
