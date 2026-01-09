import React from 'react';
import { type PFormTextEditorProps as Props } from './PFormTextEditor.types';
import './PFormTextEditor.scss';
type PFormTextEditorType = typeof PFormTextEditor & {
    apiKey: string;
    onOpenWindow?: () => void;
    onCloseWindow?: () => void;
    onImageUpload?: Props['onImageUpload'];
};
declare const PFormTextEditor: ({ ref, variant: initVariant, size: initSize, color: initColor, focused: initFocused, apiKey, toolbar, onOpenWindow, onCloseWindow, menubar, height, hidden: initHidden, onImageUpload, name, labelIcon, label, readOnly, required, disabled: initDisabled, error: initError, helperText: helperText, value: initValue, data: initData, exceptValue, onChange, onValidate, className, }: Props) => React.JSX.Element;
declare const _default: PFormTextEditorType;
export default _default;
