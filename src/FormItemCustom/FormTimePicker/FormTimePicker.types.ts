import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands } from '../../@common.private';

export interface FormTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  time: Required<PrivateDateTimePickerProps['time']>;
}

export interface FormTimePickerCommands extends PrivateDateTimePickerCommands {}
