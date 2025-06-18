import { PartialPick, PCommonSxProps } from '../../@types';
import { PFormDividerProps } from '../PFormDivider';
import { PFormContextValue } from '../../PFormContext';
export interface PFormBlockProps extends PCommonSxProps, PartialPick<PFormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>, PartialPick<PFormDividerProps, 'icon' | 'label' | 'line' | 'lineVerticalMargin' | 'hidden'> {
    collapse?: boolean;
    collapseIn?: boolean;
    error?: boolean;
    warning?: boolean;
}
