import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands, PrivateDateTimePickerValue } from '../../@private';
export type PFormTimePickerValue = PrivateDateTimePickerValue;
export interface PFormTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
    time: Required<PrivateDateTimePickerProps['time']>;
}
export interface PFormTimePickerCommands extends PrivateDateTimePickerCommands {
}
