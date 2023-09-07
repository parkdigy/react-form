import { RatingProps } from '@mui/material';
import { PartialPick, FormValueItemProps, FormValueItemBaseCommands } from '../../@types';
import { CommonSxProps } from '../../@types';

export type FormRatingValue = number;

export interface FormRatingProps
  extends CommonSxProps,
    PartialPick<RatingProps, 'highlightSelectedOnly' | 'max' | 'precision'>,
    Omit<FormValueItemProps<FormRatingValue, false>, 'fullWidth'> {
  required?: boolean;
  icon?: string;
  emptyIcon?: string;
  hidden?: boolean;
  onValue?(value: FormRatingValue): FormRatingValue;
}

export const FormRatingDefaultProps: Pick<FormRatingProps, 'value' | 'precision'> = {
  value: 0,
  precision: 1,
};

export interface FormRatingCommands extends FormValueItemBaseCommands<FormRatingValue, false> {}
