import {
  FormValueItemProps,
  FormValueItemBaseCommands,
  FormRangeValueItemCommands,
  FormYearMonthValueItemCommands,
} from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import {
  PrivateInputDatePickerProps,
  PrivateMonthRangePickerBaseValue,
  PrivateMonthRangePickerValue,
  PrivateYearRangePickerBaseValue,
  PrivateYearRangePickerValue,
} from '../../@private';

export type FormMonthRangePickerBaseValue = PrivateMonthRangePickerBaseValue;

export type FormMonthRangePickerValue = PrivateMonthRangePickerValue;

export interface FormMonthRangePickerProps
  extends CommonSxProps,
    Omit<FormValueItemProps<FormMonthRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>,
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
  minValue?: FormMonthRangePickerBaseValue;
  maxValue?: FormMonthRangePickerBaseValue;
  inputWidth?: number | string;
  readOnlyInput?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  formValueStartName?: string;
  formValueEndName?: string;
  formValueStartNameSuffix?: string;
  formValueEndNameSuffix?: string;
  formValueYearName?: string;
  formValueMonthName?: string;
  formValueYearNameSuffix?: string;
  formValueMonthNameSuffix?: string;
}

export const FormMonthRangePickerDefaultProps: Required<
  Pick<
    FormMonthRangePickerProps,
    | 'format'
    | 'minValue'
    | 'maxValue'
    | 'formValueStartNameSuffix'
    | 'formValueEndNameSuffix'
    | 'formValueYearNameSuffix'
    | 'formValueMonthNameSuffix'
  >
> = {
  format: 'YYYY년 MM월',
  minValue: {
    year: 2000,
    month: 1,
  },
  maxValue: {
    year: 2100,
    month: 12,
  },
  formValueStartNameSuffix: '_from',
  formValueEndNameSuffix: '_to',
  formValueYearNameSuffix: '_year',
  formValueMonthNameSuffix: '_month',
};

export interface FormMonthRangePickerCommands
  extends FormValueItemBaseCommands<FormMonthRangePickerValue, false>,
    FormRangeValueItemCommands<FormMonthRangePickerBaseValue>,
    FormYearMonthValueItemCommands {}
