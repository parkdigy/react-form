import React, { ReactNode } from 'react';
import { PCommonSxProps } from '../../@types';
import { PFormProps } from '../../PForm';
import { PIconProps } from '@pdg/react-component';
export interface PFormDividerProps extends PCommonSxProps {
    ref?: React.Ref<HTMLDivElement>;
    size?: PFormProps['size'];
    color?: PFormProps['color'];
    icon?: PIconProps['children'];
    label?: ReactNode;
    line?: boolean;
    lineVerticalMargin?: string | number;
    hidden?: boolean;
    collapse?: boolean;
    collapseIn?: boolean;
    error?: boolean;
    warning?: boolean;
    onCollapseChange?: (collapseIn: boolean) => void;
}
