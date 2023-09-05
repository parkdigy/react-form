import { RatingProps } from '@mui/material';
import { PartialPick, FormValueItemProps, FormValueItemBaseCommands } from '../../@types';
import { CommonSxProps } from '../../@types';
export type FormRatingValue = number;
export interface FormRatingProps extends CommonSxProps, PartialPick<RatingProps, 'highlightSelectedOnly' | 'max' | 'precision'>, Omit<FormValueItemProps, 'value' | 'fullWidth' | 'onChange'> {
    value?: FormRatingValue;
    required?: boolean;
    icon?: string;
    emptyIcon?: string;
    hidden?: boolean;
    onChange?(value: number): void;
    onValue?(value: number): number;
}
export declare const FormRatingDefaultProps: Pick<FormRatingProps, 'value' | 'precision'>;
export interface FormRatingCommands extends FormValueItemBaseCommands<FormRatingValue> {
}
