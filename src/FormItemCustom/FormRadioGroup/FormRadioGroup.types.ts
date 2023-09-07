import { ReactNode } from 'react';
import {
  CommonSxProps,
  FormItemsValueItemCommands,
  FormLoadingValueItemCommands,
  FormValueItemBaseCommands,
  FormValueItemProps,
} from '../../@types';

export interface FormRadioGroupItem<T> {
  label: ReactNode;
  value: T;
  disabled?: boolean;
}

export type FormRadioGroupItems<T> = FormRadioGroupItem<T>[];

export type FormRadioGroupValue<T> = T | undefined;

export interface FormRadioGroupProps<T> extends CommonSxProps, Omit<FormValueItemProps<T>, 'value'> {
  value?: T;
  items?: FormRadioGroupItem<T>[];
  required?: boolean;
  inline?: boolean;
  loading?: boolean;
  nowrap?: boolean;
  hidden?: boolean;
  onLoadItems?(): Promise<FormRadioGroupItem<T>[]>;
  onValue?(value: FormRadioGroupValue<T>): FormRadioGroupValue<T>;
}

export const FormRadioGroupDefaultProps: Pick<FormRadioGroupProps<any>, 'inline'> = {
  inline: true,
};

export interface FormRadioGroupCommands<T>
  extends FormValueItemBaseCommands<T, true>,
    FormItemsValueItemCommands<FormRadioGroupItem<T>>,
    FormLoadingValueItemCommands {}
