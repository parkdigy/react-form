import {
  FormValueItemProps,
  FormValueItemBaseCommands,
  FormRangeValueItemCommands,
  FormRangeValueItemNameCommands,
} from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import {
  PrivateInputDatePickerProps,
  PrivateYearRangePickerBaseValue,
  PrivateYearRangePickerValue,
} from '../../@private';

export type FormYearRangePickerBaseValue = PrivateYearRangePickerBaseValue;

export type FormYearRangePickerValue = PrivateYearRangePickerValue;

export interface FormYearRangePickerProps
  extends CommonSxProps,
    Omit<FormValueItemProps<FormYearRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>,
    Pick<PrivateInputDatePickerProps, 'align'> {
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
  minYear?: FormYearRangePickerBaseValue;
  maxYear?: FormYearRangePickerBaseValue;
  inputWidth?: number | string;
  enableKeyboardInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueFromNameSuffix?: string;
  formValueToNameSuffix?: string;
}

export interface FormYearRangePickerCommands
  extends FormValueItemBaseCommands<FormYearRangePickerValue, false>,
    FormRangeValueItemCommands<FormYearRangePickerBaseValue>,
    FormRangeValueItemNameCommands {}
