import React, { type ReactNode } from 'react';
import { type PFormArrayValueItemCommands } from '../../@types';
import { type PFormTextFieldCommands, type PFormTextFieldProps } from '../PFormTextField';

export type PFormTagValue = string[];

export type PFormTagExtraCommands = PFormArrayValueItemCommands;

export type PFormTagCommands = PFormTextFieldCommands<PFormTagValue, false> & PFormTagExtraCommands;

export type PFormTagProps = Omit<PFormTextFieldProps<PFormTagValue, false>, 'ref' | 'type'> & {
  ref?: React.Ref<PFormTagCommands>;
  formValueSeparator?: string;
  formValueSort?: boolean;
  limitTags?: number;
  allowSpace?: boolean;
  getLimitTagsText?: (more: number) => ReactNode;
  onAppendTag?: (tag: string) => boolean;
  onRemoveTag?: (tag: string) => boolean;
  onTagClick?: (tag: string) => void;
};
