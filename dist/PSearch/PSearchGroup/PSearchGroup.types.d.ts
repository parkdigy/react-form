import { type PCommonSxProps } from '../../@types';
import { type GridProps } from '@mui/material';
export interface PSearchGroupProps extends PCommonSxProps {
    align?: 'left' | 'center' | 'right';
    max?: boolean;
    hidden?: boolean;
    spacing?: GridProps['spacing'];
}
