import { ReactNode } from 'react';
import { CustomDatePickerContainerCalendarCount } from './CustomDatePickerContainer';
import { CustomDatePickerDateValue } from './CustomDatePickerContainer/CustomDatePicker';
import {
  CommonSxProps,
  FormDateRangeValueItemCommands,
  FormDateValueItemCommands,
  FormValueItemBaseCommands,
  FormValueItemProps,
} from '../../@types';
import { Dayjs } from 'dayjs';
import { InputDatePickerProps } from './InputDatePicker';

export type FormDateRangePickerDateValue = CustomDatePickerDateValue;

export type FormDateRangePickerValue = [FormDateRangePickerDateValue, FormDateRangePickerDateValue];

export type FormDateRangePickerCalendarCount = CustomDatePickerContainerCalendarCount;

export interface FormDateRangePickerProps
  extends CommonSxProps,
    Omit<FormValueItemProps, 'label' | 'labelIcon' | 'value' | 'width' | 'onChange'>,
    Pick<InputDatePickerProps, 'align'> {
  value?: FormDateRangePickerValue;
  startLabel?: ReactNode;
  startLabelIcon?: string;
  endLabel?: ReactNode;
  endLabelIcon?: string;
  allowSingleSelect?: boolean;
  required?: boolean;
  requiredStart?: boolean;
  requiredEnd?: boolean;
  readOnlyStart?: boolean;
  readOnlyEnd?: boolean;
  readOnlyInput?: boolean;
  labelShrink?: boolean;
  calendarCount?: FormDateRangePickerCalendarCount;
  format?: string;
  formValueFormat?: string;
  formValueStartNameSuffix?: string;
  formValueEndNameSuffix?: string;
  icon?: string;
  startIcon?: string;
  endIcon?: string;
  startAdornment?: ReactNode;
  startStartAdornment?: ReactNode;
  startEndAdornment?: ReactNode;
  endAdornment?: ReactNode;
  endStartAdornment?: ReactNode;
  endEndAdornment?: ReactNode;
  inputWidth?: number | string;
  disablePast?: boolean;
  disableFuture?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  hidden?: boolean;
  onChange?(value: FormDateRangePickerValue): void;
  onValidate?(value: FormDateRangePickerValue): boolean | string;
}

export const FormDateRangePickerDefaultProps: Required<
  Pick<
    FormDateRangePickerProps,
    'calendarCount' | 'format' | 'formValueFormat' | 'formValueStartNameSuffix' | 'formValueEndNameSuffix' | 'align'
  >
> = {
  calendarCount: 2,
  format: 'YYYY-MM-DD',
  formValueFormat: 'YYYY-MM-DD',
  formValueStartNameSuffix: '_from',
  formValueEndNameSuffix: '_to',
  align: 'center',
};

export interface FormDateRangePickerCommands
  extends FormValueItemBaseCommands<FormDateRangePickerValue>,
    FormDateValueItemCommands,
    FormDateRangeValueItemCommands {}
