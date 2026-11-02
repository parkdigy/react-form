import React, { type ReactNode } from 'react';
import { type PCommonSxProps } from '../../@types';
interface Props extends PCommonSxProps {
    name: string;
    label?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: ReactNode;
    pickerRef: React.Ref<HTMLFieldSetElement>;
}
declare const PrivateEmbedPicker: ({ name, label, required, disabled, readOnly, hidden, fullWidth, error, helperText, pickerRef, className, style, sx, children, }: Props) => React.JSX.Element;
export default PrivateEmbedPicker;
