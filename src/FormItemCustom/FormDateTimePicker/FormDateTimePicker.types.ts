import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands } from '../../@private';

export interface FormDateTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  time: Required<PrivateDateTimePickerProps['time']>;
}

export const FormDateTimePickerDefaultProps = {};

export interface FormDateTimePickerCommands extends PrivateDateTimePickerCommands {}
