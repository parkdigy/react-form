import React from 'react';
import { type PrivateDateTimePickerProps, type PrivateDateTimePickerCommands, type PrivateDateTimePickerValue } from '../../@private';
export type PFormDateTimePickerValue = PrivateDateTimePickerValue;
export interface PFormDateTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
    ref?: React.Ref<PFormDateTimePickerCommands>;
    time: Exclude<PrivateDateTimePickerProps['time'], undefined>;
}
export interface PFormDateTimePickerCommands extends PrivateDateTimePickerCommands {
}
