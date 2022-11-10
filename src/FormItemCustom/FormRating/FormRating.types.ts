import { RatingProps } from '@mui/material';
import { PartialPick, FormValueItemProps, FormValueItemBaseCommands } from '../../@types';
import { CommonSxProps } from '../../@types';

export type FormRatingValue = number;

export interface FormRatingProps
  extends CommonSxProps,
    PartialPick<RatingProps, 'highlightSelectedOnly' | 'max' | 'precision'>,
    Omit<FormValueItemProps, 'value' | 'fullWidth' | 'onChange'> {
  value?: FormRatingValue;
  required?: boolean;
  icon?: string;
  emptyIcon?: string;
  onChange?(value: number): void;
  onValue?(value: number): number;
}

export const FormRatingDefaultProps: Pick<FormRatingProps, 'value' | 'precision'> = {
  value: 0,
  precision: 1,
};

export interface FormRatingCommands extends FormValueItemBaseCommands<FormRatingValue> {}
