import React, { ReactNode } from 'react';
import { FormTagCommands, FormTagValue } from './FormTag.types';
import { FormTextFieldProps } from '../FormTextField';
declare const FormTag: React.ForwardRefExoticComponent<Omit<FormTextFieldProps<FormTagValue, false>, "type"> & {
    formValueSeparator?: string;
    formValueSort?: boolean;
    limitTags?: number;
    allowSpace?: boolean;
    getLimitTagsText?: (more: number) => ReactNode;
    onAppendTag?: (tag: string) => boolean;
    onRemoveTag?: (tag: string) => boolean;
    onTagClick?: (tag: string) => void;
} & React.RefAttributes<FormTagCommands>>;
export default FormTag;
