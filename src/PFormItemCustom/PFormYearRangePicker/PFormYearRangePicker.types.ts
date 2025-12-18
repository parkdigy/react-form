import React, { ReactNode } from 'react';
import {
  PFormValueItemProps,
  PFormValueItemBaseCommands,
  PFormRangeValueItemCommands,
  PFormRangeValueItemNameCommands,
} from '../../@types';
import { PCommonSxProps } from '../../@types';
import {
  PrivateInputDatePickerProps,
  PrivateYearRangePickerBaseValue,
  PrivateYearRangePickerValue,
} from '../../@private';

export type PFormYearRangePickerBaseValue = PrivateYearRangePickerBaseValue;

export type PFormYearRangePickerValue = PrivateYearRangePickerValue;

export interface PFormYearRangePickerProps
  extends
    PCommonSxProps,
    Omit<PFormValueItemProps<PFormYearRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>,
    Pick<PrivateInputDatePickerProps, 'align'> {
  ref?: React.Ref<PFormYearRangePickerCommands>;
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
  minYear?: PFormYearRangePickerBaseValue;
  maxYear?: PFormYearRangePickerBaseValue;
  inputWidth?: number | string;
  enableKeyboardInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueFromNameSuffix?: string;
  formValueToNameSuffix?: string;
}

export interface PFormYearRangePickerCommands
  extends
    PFormValueItemBaseCommands<PFormYearRangePickerValue, false>,
    PFormRangeValueItemCommands<PFormYearRangePickerBaseValue>,
    PFormRangeValueItemNameCommands {}
