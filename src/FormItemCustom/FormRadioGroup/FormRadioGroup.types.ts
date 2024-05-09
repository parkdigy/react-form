import { ReactNode } from 'react';
import {
  CommonSxProps,
  FormItemsValueItemCommands,
  FormLoadingValueItemCommands,
  FormValueItemBaseCommands,
  FormValueItemProps,
} from '../../@types';

export type FormRadioGroupSingleValue = string | number | boolean;

export interface FormRadioGroupItem<T extends FormRadioGroupSingleValue> {
  label: ReactNode;
  value: T;
  disabled?: boolean;
}

export type FormRadioGroupItems<T extends FormRadioGroupSingleValue> = FormRadioGroupItem<T>[];

export type FormRadioGroupValue<T extends FormRadioGroupSingleValue> = T | undefined;

export interface FormRadioGroupProps<T extends FormRadioGroupSingleValue>
  extends CommonSxProps,
    Omit<FormValueItemProps<T>, 'value'> {
  value?: T;
  items?: FormRadioGroupItem<T>[];
  required?: boolean;
  inline?: boolean;
  loading?: boolean;
  nowrap?: boolean;
  onLoadItems?(): Promise<FormRadioGroupItem<T>[]>;
  onValue?(value: FormRadioGroupValue<T>): FormRadioGroupValue<T>;
}

export interface FormRadioGroupCommands<T extends FormRadioGroupSingleValue>
  extends FormValueItemBaseCommands<T, true>,
    FormItemsValueItemCommands<FormRadioGroupItem<T>>,
    FormLoadingValueItemCommands {}
