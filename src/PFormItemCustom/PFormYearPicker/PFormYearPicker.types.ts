import { type PFormValueItemProps, type PFormValueItemBaseCommands } from '../../@types';
import { type PCommonSxProps } from '../../@types';
import React, { type ReactNode } from 'react';
import { type PrivateYearPickerBaseValue, type PrivateYearPickerValue } from '../../@private';

export type PFormYearPickerBaseValue = PrivateYearPickerBaseValue;

export type PFormYearPickerValue = PrivateYearPickerValue;

export interface PFormYearPickerCommands extends PFormValueItemBaseCommands<PFormYearPickerValue, false> {}

export interface PFormYearPickerProps extends PCommonSxProps, PFormValueItemProps<PFormYearPickerValue, false> {
  ref?: React.Ref<PFormYearPickerCommands>;
  required?: boolean;
  icon?: string;
  format?: string;
  labelShrink?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  minYear?: PFormYearPickerBaseValue;
  maxYear?: PFormYearPickerBaseValue;
  inputWidth?: number | string;
  enableKeyboardInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}
