import { PFormValueItemProps, PFormValueItemBaseCommands } from '../../@types';
import { PCommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import { PrivateYearPickerBaseValue, PrivateYearPickerValue } from '../../@private';

export type PFormYearPickerBaseValue = PrivateYearPickerBaseValue;

export type PFormYearPickerValue = PrivateYearPickerValue;

export interface PFormYearPickerProps extends PCommonSxProps, PFormValueItemProps<PFormYearPickerValue, false> {
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

export interface PFormYearPickerCommands extends PFormValueItemBaseCommands<PFormYearPickerValue, false> {}
