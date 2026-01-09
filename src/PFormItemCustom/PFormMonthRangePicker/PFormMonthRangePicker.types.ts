import React, { type ReactNode } from 'react';
import {
  type PFormValueItemProps,
  type PFormValueItemBaseCommands,
  type PFormRangeValueItemCommands,
  type PFormYearMonthRangeValueItemNameCommands,
  type PFormYearMonthRangeValueItemCommands,
} from '../../@types';
import { type PCommonSxProps } from '../../@types';
import {
  type PrivateInputDatePickerProps,
  type PrivateMonthRangePickerBaseValue,
  type PrivateMonthRangePickerValue,
} from '../../@private';

export type PFormMonthRangePickerBaseValue = PrivateMonthRangePickerBaseValue;

export type PFormMonthRangePickerValue = PrivateMonthRangePickerValue;

export interface PFormMonthRangePickerProps
  extends
    PCommonSxProps,
    Omit<PFormValueItemProps<PFormMonthRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>,
    Pick<PrivateInputDatePickerProps, 'align'> {
  ref?: React.Ref<PFormMonthRangePickerCommands>;
  fromLabel?: ReactNode;
  fromLabelIcon?: string;
  toLabel?: ReactNode;
  toLabelIcon?: string;
  required?: boolean;
  icon?: string;
  format?: string;
  labelShrink?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  minValue?: PFormMonthRangePickerBaseValue;
  maxValue?: PFormMonthRangePickerBaseValue;
  inputWidth?: number | string;
  enableKeyboardInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueFromYearNameSuffix?: string;
  formValueFromMonthNameSuffix?: string;
  formValueToYearNameSuffix?: string;
  formValueToMonthNameSuffix?: string;
}

export interface PFormMonthRangePickerCommands
  extends
    PFormValueItemBaseCommands<PFormMonthRangePickerValue, false>,
    PFormRangeValueItemCommands<PFormMonthRangePickerBaseValue>,
    PFormYearMonthRangeValueItemCommands,
    PFormYearMonthRangeValueItemNameCommands {}
