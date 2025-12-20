import React from 'react';
import { PrivateDatePickerValue, PrivateDatePickerProps, PrivateDatePickerCommands } from '../../@private';

export type PFormDatePickerValue = PrivateDatePickerValue;

export interface PFormDatePickerProps extends Omit<
  PrivateDatePickerProps,
  'ref' | 'type' | 'time' | 'hours' | 'minutes' | 'seconds' | 'minuteInterval' | 'secondInterval'
> {
  ref?: React.Ref<PFormDatePickerCommands>;
}

export interface PFormDatePickerCommands extends PrivateDatePickerCommands {}
