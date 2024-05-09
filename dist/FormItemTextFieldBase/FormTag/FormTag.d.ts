import React from 'react';
import { FormTagCommands, FormTagValue } from './FormTag.types';
import './FormTag.scss';
import { FormTextFieldProps } from '../FormTextField';
declare const FormTag: React.ForwardRefExoticComponent<Omit<FormTextFieldProps<FormTagValue, false>, "type"> & {
    formValueSeparator?: string | undefined;
    formValueSort?: boolean | undefined;
    limitTags?: number | undefined;
    getLimitTagsText?: ((more: number) => React.ReactNode) | undefined;
    onAppendTag?: ((tag: string) => boolean) | undefined;
    onRemoveTag?: ((tag: string) => boolean) | undefined;
} & React.RefAttributes<FormTagCommands>>;
export default FormTag;
