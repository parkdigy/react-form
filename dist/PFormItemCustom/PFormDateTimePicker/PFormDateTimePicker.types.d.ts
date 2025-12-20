import React from 'react';
import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands, PrivateDateTimePickerValue } from '../../@private';
export type PFormDateTimePickerValue = PrivateDateTimePickerValue;
export interface PFormDateTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
    ref?: React.Ref<PFormDateTimePickerCommands>;
    time: Exclude<PrivateDateTimePickerProps['time'], undefined>;
}
export interface PFormDateTimePickerCommands extends PrivateDateTimePickerCommands {
}
