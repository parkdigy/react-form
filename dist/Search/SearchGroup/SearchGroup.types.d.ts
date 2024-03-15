import { CommonSxProps } from '../../@types';
import { GridProps } from '@mui/material';
export interface SearchGroupProps extends CommonSxProps {
    align?: 'left' | 'center' | 'right';
    max?: boolean;
    hidden?: boolean;
    spacing?: GridProps['spacing'];
}
export declare const SearchGroupDefaultProps: Pick<SearchGroupProps, 'spacing'>;
