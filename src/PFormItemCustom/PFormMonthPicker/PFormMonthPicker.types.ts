import React, { ReactNode } from 'react';
import {
  PFormValueItemProps,
  PFormValueItemBaseCommands,
  PFormYearMonthValueItemNameCommands,
  PFormYearMonthValueItemCommands,
} from '../../@types';
import { PCommonSxProps } from '../../@types';
import { PrivateMonthPickerBaseValue, PrivateMonthPickerValue } from '../../@private';

export type PFormMonthPickerBaseValue = PrivateMonthPickerBaseValue;

export type PFormMonthPickerValue = PrivateMonthPickerValue;

export interface PFormMonthPickerProps extends PCommonSxProps, PFormValueItemProps<PFormMonthPickerValue, false> {
  ref?: React.Ref<PFormMonthPickerCommands>;
  required?: boolean;
  icon?: string;
  format?: string;
  labelShrink?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  minValue?: PFormMonthPickerBaseValue;
  maxValue?: PFormMonthPickerBaseValue;
  inputWidth?: number | string;
  enableKeyboardInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueYearNameSuffix?: string;
  formValueMonthNameSuffix?: string;
}

export interface PFormMonthPickerCommands
  extends
    PFormValueItemBaseCommands<PFormMonthPickerValue, false>,
    PFormYearMonthValueItemCommands,
    PFormYearMonthValueItemNameCommands {}
