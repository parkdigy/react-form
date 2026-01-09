import React from 'react';
import { type PrivateDateTimePickerProps, type PrivateDateTimePickerCommands, type PrivateDateTimePickerValue } from '../../@private';
export type PFormTimePickerValue = PrivateDateTimePickerValue;
export interface PFormTimePickerCommands extends PrivateDateTimePickerCommands {
}
export interface PFormTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
    ref?: React.Ref<PFormTimePickerCommands>;
    time: Exclude<PrivateDateTimePickerProps['time'], undefined>;
}
