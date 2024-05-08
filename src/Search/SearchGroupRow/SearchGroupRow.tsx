import React from 'react';
import { SearchGroupRowProps as Props } from './SearchGroupRow.types';
import { FormCol, FormRow } from '../../FormLayout';
import { Grid } from '@mui/material';

const SearchGroupRow: React.FC<Props> = ({ children, ...props }) => {
  return (
    <FormRow {...props}>
      <FormCol>
        <Grid container spacing={1} alignItems='center'>
          {children}
        </Grid>
      </FormCol>
    </FormRow>
  );
};

SearchGroupRow.displayName = 'SearchGroupRow';

export default SearchGroupRow;
