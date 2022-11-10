import { PrivateDatePickerProps, PrivateDatePickerCommands } from '../../@private';
export interface FormDateTimePickerProps extends Omit<PrivateDatePickerProps, 'type' | 'time'> {
    time: Required<PrivateDatePickerProps['time']>;
}
export declare const FormDateTimePickerDefaultProps: {};
export interface FormDateTimePickerCommands extends PrivateDatePickerCommands {
}
