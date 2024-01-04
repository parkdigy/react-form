import { FormValueItemProps, FormValueItemBaseCommands, FormRangeValueItemCommands, FormYearMonthRangeValueItemNameCommands } from '../../@types';
import { CommonSxProps } from '../../@types';
import { ReactNode } from 'react';
import { PrivateInputDatePickerProps, PrivateMonthRangePickerBaseValue, PrivateMonthRangePickerValue } from '../../@private';
export type FormMonthRangePickerBaseValue = PrivateMonthRangePickerBaseValue;
export type FormMonthRangePickerValue = PrivateMonthRangePickerValue;
export interface FormMonthRangePickerProps extends CommonSxProps, Omit<FormValueItemProps<FormMonthRangePickerValue, false>, 'label' | 'labelIcon' | 'width'>, Pick<PrivateInputDatePickerProps, 'align'> {
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
    formValueFromYearName?: string;
    formValueFromMonthName?: string;
    formValueToYearName?: string;
    formValueToMonthName?: string;
    formValueFromYearNameSuffix?: string;
    formValueFromMonthNameSuffix?: string;
    formValueToYearNameSuffix?: string;
    formValueToMonthNameSuffix?: string;
}
export declare const FormMonthRangePickerDefaultProps: Required<Pick<FormMonthRangePickerProps, 'format' | 'minValue' | 'maxValue' | 'formValueFromYearNameSuffix' | 'formValueFromMonthNameSuffix' | 'formValueToYearNameSuffix' | 'formValueToMonthNameSuffix'>>;
export interface FormMonthRangePickerCommands extends FormValueItemBaseCommands<FormMonthRangePickerValue, false>, FormRangeValueItemCommands<FormMonthRangePickerBaseValue>, FormYearMonthRangeValueItemNameCommands {
}
