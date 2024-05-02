import { ReactNode } from 'react';
import { FormArrayValueItemCommands } from '../../@types';
import { FormTextFieldCommands, FormTextFieldDefaultProps, FormTextFieldProps } from '../FormTextField';

export type FormTagValue = string[];

export type FormTagExtraCommands = FormArrayValueItemCommands;

export type FormTagCommands = FormTextFieldCommands<FormTagValue, false> & FormTagExtraCommands;

export type FormTagProps = Omit<FormTextFieldProps<FormTagValue, false>, 'type'> & {
  formValueSeparator?: string;
  formValueSort?: boolean;
  limitTags?: number;
  getLimitTagsText?: (more: number) => ReactNode;
  onAppendTag?: (tag: string) => boolean;
  onRemoveTag?: (tag: string) => boolean;
};

export const FormTagDefaultProps: Pick<FormTagProps, 'value' | 'clear' | 'formValueSeparator'> = {
  ...FormTextFieldDefaultProps,
  value: [],
  clear: true,
  formValueSeparator: ',',
};
