import React from 'react';
import { PFormTextEditorProps as Props, PFormTextEditorCommands } from './PFormTextEditor.types';
import './PFormTextEditor.scss';
type PFormTextEditorType = typeof PFormTextEditor & {
    apiKey: string;
    onOpenWindow?: () => void;
    onCloseWindow?: () => void;
    onImageUpload?: Props['onImageUpload'];
};
declare const PFormTextEditor: React.ForwardRefExoticComponent<Props & React.RefAttributes<PFormTextEditorCommands>>;
declare const _default: PFormTextEditorType;
export default _default;
