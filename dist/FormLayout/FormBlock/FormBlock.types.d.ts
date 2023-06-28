import { PartialPick, CommonSxProps } from '../../@types';
import { FormDividerProps } from '../FormDivider';
import { FormContextValue } from '../../FormContext';
export interface FormBlockProps extends CommonSxProps, PartialPick<FormContextValue, 'variant' | 'size' | 'color' | 'spacing' | 'focused' | 'labelShrink' | 'fullWidth'>, PartialPick<FormDividerProps, 'icon' | 'label' | 'line' | 'lineVerticalMargin' | 'hidden'> {
    collapse?: boolean;
    collapseIn?: boolean;
    error?: boolean;
}
export declare const FormBlockDefaultProps: {};
