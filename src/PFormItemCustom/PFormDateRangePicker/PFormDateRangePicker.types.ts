import React, { type ReactNode } from 'react';
import {
  type PFormDateRangePickerTooltipPickerContainerCalendarCount,
  type PFormDateRangePickerTooltipPickerDateValue,
} from './PFormDateRangePickerTooltipPickerContainer';
import {
  type PCommonSxProps,
  type PFormRangeValueItemCommands,
  type PFormDateValueItemCommands,
  type PFormValueItemBaseCommands,
  type PFormValueItemProps,
  type PFormRangeValueItemNameCommands,
} from '../../@types';
import { Dayjs } from 'dayjs';
import { type PrivateInputDatePickerProps } from '../../@private';

export type PFormDateRangePickerDateValue = PFormDateRangePickerTooltipPickerDateValue;

export type PFormDateRangePickerValue = [PFormDateRangePickerDateValue, PFormDateRangePickerDateValue];

export type PFormDateRangePickerCalendarCount = PFormDateRangePickerTooltipPickerContainerCalendarCount;

export interface PFormDateRangePickerProps
  extends
    PCommonSxProps,
    Omit<PFormValueItemProps<PFormDateRangePickerValue, false>, 'ref' | 'label' | 'labelIcon' | 'width'>,
    Pick<PrivateInputDatePickerProps, 'align'> {
  ref?: React.Ref<PFormDateRangePickerCommands>;
  fromLabel?: ReactNode;
  fromLabelIcon?: string;
  toLabel?: ReactNode;
  toLabelIcon?: string;
  allowSingleSelect?: boolean;
  required?: boolean;
  requiredStart?: boolean;
  requiredEnd?: boolean;
  readOnlyStart?: boolean;
  readOnlyEnd?: boolean;
  enableKeyboardInput?: boolean;
  labelShrink?: boolean;
  calendarCount?: PFormDateRangePickerCalendarCount;
  format?: string;
  formValueFormat?: string;
  formValueFromNameSuffix?: string;
  formValueToNameSuffix?: string;
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
  onGetActionButtons?: () => { label: string; start: Dayjs; end: Dayjs }[];
}

export interface PFormDateRangePickerCommands
  extends
    PFormValueItemBaseCommands<PFormDateRangePickerValue, false>,
    PFormDateValueItemCommands,
    PFormRangeValueItemCommands<PFormDateRangePickerDateValue>,
    PFormRangeValueItemNameCommands {}
