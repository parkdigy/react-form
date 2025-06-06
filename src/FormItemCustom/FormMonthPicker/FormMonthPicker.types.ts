import {
  FormValueItemProps,
  FormValueItemBaseCommands,
  FormYearMonthValueItemNameCommands,
  FormYearMonthValueItemCommands,
} from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import { PrivateMonthPickerBaseValue, PrivateMonthPickerValue } from '../../@private';

export type FormMonthPickerBaseValue = PrivateMonthPickerBaseValue;

export type FormMonthPickerValue = PrivateMonthPickerValue;

export interface FormMonthPickerProps extends CommonSxProps, FormValueItemProps<FormMonthPickerValue, false> {
  required?: boolean;
  icon?: string;
  format?: string;
  labelShrink?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  minValue?: FormMonthPickerBaseValue;
  maxValue?: FormMonthPickerBaseValue;
  inputWidth?: number | string;
  enableKeyboardInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueYearNameSuffix?: string;
  formValueMonthNameSuffix?: string;
}

export interface FormMonthPickerCommands
  extends FormValueItemBaseCommands<FormMonthPickerValue, false>,
    FormYearMonthValueItemCommands,
    FormYearMonthValueItemNameCommands {}
