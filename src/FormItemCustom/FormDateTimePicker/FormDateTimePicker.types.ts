import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands } from '../../@common.private';

export interface FormDateTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  time: Required<PrivateDateTimePickerProps['time']>;
}

export interface FormDateTimePickerCommands extends PrivateDateTimePickerCommands {}
