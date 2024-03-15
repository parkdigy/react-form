import { FormValueItemProps, FormValueItemBaseCommands, FormRangeValueItemCommands, FormYearMonthRangeValueItemNameCommands, FormYearMonthRangeValueItemCommands } from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import { PrivateInputDatePickerProps, PrivateMonthRangePickerBaseValue, PrivateMonthRangePickerValue } from '../../@private';
export type FormMonthRangePickerBaseValue = PrivateMonthRangePickerBaseValue;
export type FormMonthRangePickerValue = PrivateMonthRangePickerValue;
export interface FormMonthRangePickerProps extends CommonSxProps, Omit<FormValueItemProps<FormMonthRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>, Pick<PrivateInputDatePickerProps, 'align'> {
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
    minValue?: FormMonthRangePickerBaseValue;
    maxValue?: FormMonthRangePickerBaseValue;
    inputWidth?: number | string;
    readOnlyInput?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    formValueFromYearNameSuffix?: string;
    formValueFromMonthNameSuffix?: string;
    formValueToYearNameSuffix?: string;
    formValueToMonthNameSuffix?: string;
}
export declare const FormMonthRangePickerDefaultProps: Required<Pick<FormMonthRangePickerProps, 'format' | 'minValue' | 'maxValue' | 'formValueFromYearNameSuffix' | 'formValueFromMonthNameSuffix' | 'formValueToYearNameSuffix' | 'formValueToMonthNameSuffix'>>;
export interface FormMonthRangePickerCommands extends FormValueItemBaseCommands<FormMonthRangePickerValue, false>, FormRangeValueItemCommands<FormMonthRangePickerBaseValue>, FormYearMonthRangeValueItemCommands, FormYearMonthRangeValueItemNameCommands {
}
