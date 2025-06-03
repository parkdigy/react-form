import { FormValueItemProps, FormValueItemBaseCommands } from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import { PrivateYearPickerBaseValue, PrivateYearPickerValue } from '../../@private';

export type FormYearPickerBaseValue = PrivateYearPickerBaseValue;

export type FormYearPickerValue = PrivateYearPickerValue;

export interface FormYearPickerProps extends CommonSxProps, FormValueItemProps<FormYearPickerValue, false> {
  required?: boolean;
  icon?: string;
  format?: string;
  labelShrink?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  minYear?: FormYearPickerBaseValue;
  maxYear?: FormYearPickerBaseValue;
  inputWidth?: number | string;
  enableKeyboardInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export interface FormYearPickerCommands extends FormValueItemBaseCommands<FormYearPickerValue, false> {}
