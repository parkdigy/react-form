import React from 'react';
import { PSearchGroupRowProps as Props } from './PSearchGroupRow.types';
import { PFormCol, PFormRow } from '../../PFormLayout';
import { Grid } from '@mui/material';
import classNames from 'classnames';

const PSearchGroupRow = ({ children, className, ...props }: Props) => {
  return (
    <PFormRow className={classNames(className, 'PSearchGroupRow')} {...props}>
      <PFormCol>
        <Grid container spacing={1} alignItems='center' flex={1}>
          {children}
        </Grid>
      </PFormCol>
    </PFormRow>
  );
};

export default PSearchGroupRow;
