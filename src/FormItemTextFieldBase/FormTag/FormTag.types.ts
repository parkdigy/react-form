import { ReactNode } from 'react';
import { FormArrayValueItemCommands } from '../../@types';
import { FormTextFieldCommands, FormTextFieldProps } from '../FormTextField';

export type FormTagValue = string[];

export type FormTagExtraCommands = FormArrayValueItemCommands;

export type FormTagCommands = FormTextFieldCommands<FormTagValue, false> & FormTagExtraCommands;

export type FormTagProps = Omit<FormTextFieldProps<FormTagValue, false>, 'type'> & {
  formValueSeparator?: string;
  formValueSort?: boolean;
  limitTags?: number;
  allowSpace?: boolean;
  getLimitTagsText?: (more: number) => ReactNode;
  onAppendTag?: (tag: string) => boolean;
  onRemoveTag?: (tag: string) => boolean;
  onTagClick?: (tag: string) => void;
};
