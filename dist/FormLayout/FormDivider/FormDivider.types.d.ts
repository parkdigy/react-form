import { ReactNode } from 'react';
import { CommonSxProps } from '../../@types';
import { FormProps } from '../../Form';
import { PdgIconProps } from '@pdg/react-component';
export interface FormDividerProps extends CommonSxProps {
    size?: FormProps['size'];
    color?: FormProps['color'];
    icon?: PdgIconProps['children'];
    label?: ReactNode;
    line?: boolean;
    lineVerticalMargin?: string | number;
    hidden?: boolean;
    collapse?: boolean;
    collapseIn?: boolean;
    error?: boolean;
    warning?: boolean;
    onCollapseChange?(collapseIn: boolean): void;
}
export declare const FormDividerDefaultProps: FormDividerProps;
