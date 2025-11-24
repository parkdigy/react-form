import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { PFormContextValue } from '../PFormContext';

//--------------------------------------------------------------------------------------------------------------------

export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
export type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;

//--------------------------------------------------------------------------------------------------------------------

export interface PCommonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface PCommonSxProps extends PCommonProps {
  sx?: SxProps<Theme>;
}

//--------------------------------------------------------------------------------------------------------------------

export type PFormYearMonthValue = { year: number | ''; month: number | '' };

export type PFormValue = string | number | boolean | PFormYearMonthValue;

export interface PFormValueMap {
  [key: string]: PFormValue;
}

export type PFormValueItemData = Record<string, any>;

export interface PFormValueItemBaseCommands<
  T,
  AllowUndefinedValue extends boolean,
  V = AllowUndefinedValue extends true ? T | undefined : T,
> {
  getType: () =>
    | 'default'
    | 'PFormCheckbox'
    | 'PFormToggleButtonGroup'
    | 'PFormRadioGroup'
    | 'PFormRating'
    | 'PFormTextEditor'
    | 'PFormAutocomplete'
    | 'PFormDatePicker'
    | 'PFormDateTimePicker'
    | 'PFormTimePicker'
    | 'PFormDateRangePicker'
    | 'PFormMonthPicker'
    | 'PFormMonthRangePicker'
    | 'PFormYearPicker'
    | 'PFormYearRangePicker'
    | 'PFormFile'
    | 'PFormSwitch';
  getName: () => string;
  getReset: () => V;
  reset: () => void;
  getValue: () => V;
  setValue: (value: V) => void;
  getData: () => PFormValueItemData | undefined;
  setData: (data?: PFormValueItemData) => void;
  isExceptValue: () => boolean;
  isDisabled: () => boolean;
  setDisabled: (disabled: boolean) => void;
  isHidden: () => boolean;
  setHidden: (hidden: boolean) => void;
  focus: () => void;
  focusValidate: () => void;
  validate: () => boolean;
  setError: (error: boolean, errorText: ReactNode | undefined) => void;
}

export interface PFormArrayValueItemCommands {
  isFormValueSort: () => boolean;
  getFormValueSeparator: () => string;
}

export interface PFormItemsValueItemCommands<T> {
  getItems: () => readonly T[] | undefined;
  setItems: (items: readonly T[] | undefined) => void;
}

export interface PFormCheckValueItemCommands<T> {
  getChecked: () => boolean;
  setChecked: (checked: boolean, notFireOnChange?: boolean) => void;
  getUncheckedValue: () => T;
  setUncheckedValue: (uncheckedValue: T) => void;
}

export interface PFormMultipleValueItemCommands {
  isMultiple: () => boolean;
}

export interface PFormLoadingValueItemCommands {
  getLoading: () => boolean;
  setLoading: (loading: boolean) => void;
}

export interface PFormDateValueItemCommands {
  getFormValueFormat: () => string;
}

export interface PFormRangeValueItemCommands<T> {
  getFromValue: () => T | null;
  setFromValue: (value: T | null) => void;
  getToValue: () => T | null;
  setToValue: (value: T | null) => void;
}

export interface PFormRangeValueItemNameCommands {
  getFormValueFromNameSuffix: () => string;
  getFormValueToNameSuffix: () => string;
  getFormValueFromName: () => string;
  getFormValueToName: () => string;
}

export interface PFormYearMonthValueItemCommands {
  getYear: () => number | null;
  setYear: (year: number | null) => void;
  getMonth: () => number | null;
  setMonth: (month: number | null) => void;
}

export interface PFormYearMonthValueItemNameCommands {
  getFormValueYearNameSuffix: () => string;
  getFormValueMonthNameSuffix: () => string;
  getFormValueYearName: () => string;
  getFormValueMonthName: () => string;
}

export interface PFormYearMonthRangeValueItemCommands {
  getFromYear: () => number | null;
  setFromYear: (year: number | null) => void;
  getFromMonth: () => number | null;
  setFromMonth: (month: number | null) => void;
  getToYear: () => number | null;
  setToYear: (year: number | null) => void;
  getToMonth: () => number | null;
  setToMonth: (month: number | null) => void;
}

export interface PFormYearMonthRangeValueItemNameCommands {
  getFormValueFromYearNameSuffix: () => string;
  getFormValueFromMonthNameSuffix: () => string;
  getFormValueToYearNameSuffix: () => string;
  getFormValueToMonthNameSuffix: () => string;
  getFormValueFromYearName: () => string;
  getFormValueFromMonthName: () => string;
  getFormValueToYearName: () => string;
  getFormValueToMonthName: () => string;
}

export interface PFormValueItemCommands<
  T,
  AllowUndefinedValue extends boolean = true,
  ItemType = any,
  RangeItemValue = any,
> extends PFormValueItemBaseCommands<T, AllowUndefinedValue>,
    Partial<PFormArrayValueItemCommands>,
    Partial<PFormItemsValueItemCommands<ItemType>>,
    Partial<PFormCheckValueItemCommands<T>>,
    Partial<PFormMultipleValueItemCommands>,
    Partial<PFormLoadingValueItemCommands>,
    Partial<PFormDateValueItemCommands>,
    Partial<PFormRangeValueItemCommands<RangeItemValue>>,
    Partial<PFormRangeValueItemNameCommands>,
    Partial<PFormYearMonthValueItemCommands>,
    Partial<PFormYearMonthValueItemNameCommands>,
    Partial<PFormYearMonthRangeValueItemCommands>,
    Partial<PFormYearMonthRangeValueItemNameCommands> {}

export interface PFormValueItemCommandsMap<T, AllowUndefinedValue extends boolean = true, ItemType = any> {
  [key: string]: PFormValueItemCommands<T, AllowUndefinedValue, ItemType> | undefined;
}

//--------------------------------------------------------------------------------------------------------------------

export interface PFormValueItemProps<
  T,
  AllowUndefinedValue extends boolean = true,
  V = AllowUndefinedValue extends true ? T | undefined : T,
> extends PartialPick<PFormContextValue<T>, 'variant' | 'size' | 'color' | 'focused'> {
  name: string;
  value?: T;
  labelIcon?: string;
  label?: ReactNode;
  width?: string | number;
  fullWidth?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  hidden?: boolean;
  exceptValue?: boolean;
  helperText?: ReactNode;
  data?: PFormValueItemData;
  onChange?: (value: V) => void;
  onValidate?: (value: V) => true | string;
}
