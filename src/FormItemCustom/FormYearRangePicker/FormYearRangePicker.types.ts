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
  startLabel?: ReactNode;
  startLabelIcon?: string;
  endLabel?: ReactNode;
  endLabelIcon?: string;
  required?: boolean;
  hidden?: boolean;
  icon?: string;
  format?: string;
  labelShrink?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  minYear?: FormYearRangePickerBaseValue;
  maxYear?: FormYearRangePickerBaseValue;
  inputWidth?: number | string;
  readOnlyInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueFromName?: string;
  formValueToName?: string;
  formValueFromNameSuffix?: string;
  formValueToNameSuffix?: string;
}

export const FormYearRangePickerDefaultProps: Required<
  Pick<FormYearRangePickerProps, 'format' | 'minYear' | 'maxYear' | 'formValueFromNameSuffix' | 'formValueToNameSuffix'>
> = {
  format: 'YYYY년',
  minYear: 2020,
  maxYear: 2050,
  formValueFromNameSuffix: '_from',
  formValueToNameSuffix: '_to',
};

export interface FormYearRangePickerCommands
  extends FormValueItemBaseCommands<FormYearRangePickerValue, false>,
    FormRangeValueItemCommands<FormYearRangePickerBaseValue>,
    FormRangeValueItemNameCommands {}
