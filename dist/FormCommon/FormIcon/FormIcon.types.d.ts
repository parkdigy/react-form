import { IconProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
export interface FormIconProps extends Pick<IconProps, 'color' | 'style' | 'sx' | 'className' | 'fontSize'> {
    children: string | SvgIconComponent;
}
export declare const FormIconDefaultProps: {};
