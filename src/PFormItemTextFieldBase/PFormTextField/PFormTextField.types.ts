import { ReactNode } from 'react';
import { TextFieldProps } from '@mui/material';
import { PFormValueItemBaseCommands, PFormValueItemProps } from '../../@types';

export type PFormTextFieldValue = any;

export interface PFormTextFieldCommands<T = PFormTextFieldValue, AllowUndefinedValue extends boolean = true>
  extends PFormValueItemBaseCommands<T, AllowUndefinedValue> {}

export type PFormTextFieldProps<
  T = PFormTextFieldValue,
  AllowUndefinedValue extends boolean = true,
  V = AllowUndefinedValue extends true ? T | undefined : T,
> = Omit<
  TextFieldProps,
  | 'ref'
  | 'name'
  | 'value'
  | 'onChange'
  | 'InputProps'
  | 'InputLabelProps'
  | 'inputProps'
  | 'SelectProps'
  | 'FormHelperTextProps'
  | 'aria-dropeffect'
  | 'aria-grabbed'
> &
  Omit<PFormValueItemProps<T, AllowUndefinedValue>, 'label' | 'fullWidth' | 'disabled' | 'error'> & {
    icon?: string;
    clear?: boolean;
    maxLength?: number;
    labelShrink?: boolean;
    validPattern?: RegExp;
    invalidPattern?: RegExp;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    noFormValueItem?: boolean;
    disableReturnKey?: boolean;
    submitWhenReturnKey?: boolean;
    onValue?: (value: V) => V;
  };
