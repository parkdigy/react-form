import React from 'react';
import { PrivateDateTimePickerProps, PrivateDateTimePickerCommands, PrivateDateTimePickerValue } from '../../@private';

export type PFormDateTimePickerValue = PrivateDateTimePickerValue;

export interface PFormDateTimePickerProps extends Omit<PrivateDateTimePickerProps, 'type' | 'time'> {
  ref?: React.Ref<PFormDateTimePickerCommands>;
  time: Required<PrivateDateTimePickerProps['time']>;
}

export interface PFormDateTimePickerCommands extends PrivateDateTimePickerCommands {}
