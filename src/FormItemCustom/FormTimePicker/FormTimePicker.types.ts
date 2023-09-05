import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands } from '../../@private';

export interface FormTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  time: Required<PrivateDateTimePickerProps['time']>;
}

export const FormTimePickerDefaultProps = {};

export interface FormTimePickerCommands extends PrivateDateTimePickerCommands {}
