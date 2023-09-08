import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { FormContextValue } from '../FormContext';
import { Dayjs } from 'dayjs';

//--------------------------------------------------------------------------------------------------------------------

export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
export type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;

//--------------------------------------------------------------------------------------------------------------------

export interface CommonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface CommonSxProps extends CommonProps {
  sx?: SxProps<Theme>;
}

//--------------------------------------------------------------------------------------------------------------------

export type FormValue = string | number | boolean;

export interface FormValueMap {
  [key: string]: FormValue;
}

export type FormValueItemData = Record<string, any>;

export interface FormValueItemBaseCommands<
  T,
  AllowUndefinedValue extends boolean,
  V = AllowUndefinedValue extends true ? T | undefined : T,
> {
  getType():
    | 'default'
    | 'FormCheckbox'
    | 'FormToggleButtonGroup'
    | 'FormRadioGroup'
    | 'FormRating'
    | 'FormTextEditor'
    | 'FormAutocomplete'
    | 'FormDatePicker'
    | 'FormDateTimePicker'
    | 'FormTimePicker'
    | 'FormDateRangePicker'
    | 'FormFile';
  getName(): string;
  getReset(): V;
  reset(): void;
  getValue(): V;
  setValue(value: V): void;
  getData(): FormValueItemData | undefined;
  setData(data?: FormValueItemData): void;
  isExceptValue(): boolean;
  isDisabled(): boolean;
  setDisabled(disabled: boolean): void;
  focus(): void;
  focusValidate(): void;
  validate(): boolean;
  setError(error: boolean, errorText: ReactNode | undefined): void;
}

export interface FormArrayValueItemCommands {
  isFormValueSort(): boolean;
  getFormValueSeparator(): string | undefined;
}

export interface FormItemsValueItemCommands<T> {
  getItems(): T[] | undefined;
  setItems(items: T[] | undefined): void;
}

export interface FormCheckValueItemCommands<T> {
  getChecked(): boolean;
  setChecked(checked: boolean): void;
  getUncheckedValue(): T;
  setUncheckedValue(uncheckedValue: T): void;
}

export interface FormMultipleValueItemCommands {
  isMultiple(): boolean;
}

export interface FormLoadingValueItemCommands {
  getLoading(): boolean;
  setLoading(loading: boolean): void;
}

export interface FormDateValueItemCommands {
  getFormValueFormat(): string;
}

export interface FormDateRangeValueItemCommands {
  getStartValue(): Dayjs | null;
  setStartValue(value: Dayjs | null): void;
  getEndValue(): Dayjs | null;
  setEndValue(value: Dayjs | null): void;
  getFormValueStartNameSuffix(): string;
  getFormValueEndNameSuffix(): string;
  getFormValueStartName(): string;
  getFormValueEndName(): string;
}

export interface FormValueItemCommands<T, AllowUndefinedValue extends boolean = true, ItemType = any>
  extends FormValueItemBaseCommands<T, AllowUndefinedValue>,
    Partial<FormArrayValueItemCommands>,
    Partial<FormItemsValueItemCommands<ItemType>>,
    Partial<FormCheckValueItemCommands<T>>,
    Partial<FormMultipleValueItemCommands>,
    Partial<FormLoadingValueItemCommands>,
    Partial<FormDateValueItemCommands>,
    Partial<FormDateRangeValueItemCommands> {}

export interface FormValueItemCommandsMap<T, AllowUndefinedValue extends boolean = true, ItemType = any> {
  [key: string]: FormValueItemCommands<T, AllowUndefinedValue, ItemType> | undefined;
}

//--------------------------------------------------------------------------------------------------------------------

export interface FormValueItemProps<
  T,
  AllowUndefinedValue extends boolean = true,
  V = AllowUndefinedValue extends true ? T | undefined : T,
> extends PartialPick<FormContextValue<T>, 'variant' | 'size' | 'color' | 'focused'> {
  name: string;
  value?: T;
  labelIcon?: string;
  label?: ReactNode;
  width?: string | number;
  fullWidth?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  exceptValue?: boolean;
  helperText?: ReactNode;
  data?: FormValueItemData;
  onChange?(value: V): void;
  onValidate?(value: V): true | string;
}
