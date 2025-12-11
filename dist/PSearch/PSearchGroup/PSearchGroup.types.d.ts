import { PCommonSxProps } from '../../@types';
import { GridProps } from '@mui/material';
export interface PSearchGroupProps extends PCommonSxProps {
    align?: 'left' | 'center' | 'right';
    max?: boolean;
    hidden?: boolean;
    spacing?: GridProps['spacing'];
}
