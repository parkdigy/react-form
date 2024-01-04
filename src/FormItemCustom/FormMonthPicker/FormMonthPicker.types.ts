import { FormValueItemProps, FormValueItemBaseCommands, FormYearMonthValueItemNameCommands } from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import { PrivateMonthPickerBaseValue, PrivateMonthPickerValue } from '../../@private';

export type FormMonthPickerBaseValue = PrivateMonthPickerBaseValue;

export type FormMonthPickerValue = PrivateMonthPickerValue;

export interface FormMonthPickerProps extends CommonSxProps, FormValueItemProps<FormMonthPickerValue, false> {
  required?: boolean;
  hidden?: boolean;
  icon?: string;
  format?: string;
  labelShrink?: boolean;
  disablePast?: boolean;
  disableFuture?: boolean;
  minValue?: FormMonthPickerBaseValue;
  maxValue?: FormMonthPickerBaseValue;
  inputWidth?: number | string;
  readOnlyInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueYearName?: string;
  formValueMonthName?: string;
  formValueYearNameSuffix?: string;
  formValueMonthNameSuffix?: string;
}

export const FormMonthPickerDefaultProps: Required<
  Pick<
    FormMonthPickerProps,
    'format' | 'formValueYearNameSuffix' | 'formValueMonthNameSuffix' | 'minValue' | 'maxValue'
  >
> = {
  format: 'YYYY년 MM월',
  formValueYearNameSuffix: '_year',
  formValueMonthNameSuffix: '_month',
  minValue: {
    year: 2020,
    month: 1,
  },
  maxValue: {
    year: 2050,
    month: 12,
  },
};

export interface FormMonthPickerCommands
  extends FormValueItemBaseCommands<FormMonthPickerValue, false>,
    FormYearMonthValueItemNameCommands {}
