import React from 'react';
import { SearchGroupRowProps as Props, SearchGroupRowDefaultProps } from './SearchGroupRow.types';
import { FormCol, FormRow } from '../../FormLayout';
import { Grid } from '@mui/material';

const SearchGroupRow: React.FC<Props> = ({ children }) => {
  return (
    <FormRow>
      <FormCol>
        <Grid container spacing={1} alignItems='center'>
          {children}
        </Grid>
      </FormCol>
    </FormRow>
  );
};

SearchGroupRow.displayName = 'SearchGroupRow';
SearchGroupRow.defaultProps = SearchGroupRowDefaultProps;

export default SearchGroupRow;
