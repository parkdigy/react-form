import React, { ReactNode } from 'react';
import { PFormTagCommands, PFormTagValue } from './PFormTag.types';
import { PFormTextFieldProps } from '../PFormTextField';
declare const PFormTag: React.ForwardRefExoticComponent<Omit<PFormTextFieldProps<PFormTagValue, false>, "type"> & {
    formValueSeparator?: string;
    formValueSort?: boolean;
    limitTags?: number;
    allowSpace?: boolean;
    getLimitTagsText?: (more: number) => ReactNode;
    onAppendTag?: (tag: string) => boolean;
    onRemoveTag?: (tag: string) => boolean;
    onTagClick?: (tag: string) => void;
} & React.RefAttributes<PFormTagCommands>>;
export default PFormTag;
