import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands } from '../../@private';

export interface PFormTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  time: Required<PrivateDateTimePickerProps['time']>;
}

export interface PFormTimePickerCommands extends PrivateDateTimePickerCommands {}
