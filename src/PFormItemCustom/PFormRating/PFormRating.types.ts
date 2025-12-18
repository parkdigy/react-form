import React from 'react';
import { RatingProps } from '@mui/material';
import { PartialPick, PFormValueItemProps, PFormValueItemBaseCommands } from '../../@types';
import { PCommonSxProps } from '../../@types';

export type PFormRatingValue = number;

export interface PFormRatingProps
  extends
    PCommonSxProps,
    PartialPick<RatingProps, 'highlightSelectedOnly' | 'max' | 'precision'>,
    Omit<PFormValueItemProps<PFormRatingValue, false>, 'fullWidth'> {
  ref?: React.Ref<PFormRatingCommands>;
  required?: boolean;
  icon?: string;
  emptyIcon?: string;
  onValue?: (value: PFormRatingValue) => PFormRatingValue;
}

export interface PFormRatingCommands extends PFormValueItemBaseCommands<PFormRatingValue, false> {}
