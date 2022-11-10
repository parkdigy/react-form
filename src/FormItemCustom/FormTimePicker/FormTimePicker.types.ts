import { PrivateDatePickerProps, PrivateDatePickerCommands } from '../../@private';

export interface FormTimePickerProps extends Omit<PrivateDatePickerProps, 'type' | 'time'> {
  time: Required<PrivateDatePickerProps['time']>;
}

export const FormTimePickerDefaultProps = {};

export interface FormTimePickerCommands extends PrivateDatePickerCommands {}
