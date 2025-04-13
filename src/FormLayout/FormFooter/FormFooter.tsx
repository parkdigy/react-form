import React, { useMemo } from 'react';
import { FormFooterProps as Props } from './FormFooter.types';
import { Grid } from '@mui/material';
import { useFormState } from '../../FormContext';
import FormDivider from '../FormDivider';

const FormFooter: React.FC<Props> = ({ children, noLine, hidden }) => {
  const { spacing } = useFormState();

  const style = useMemo(() => (hidden ? { display: 'none' } : undefined), [hidden]);

  return (
    <Grid size={{ xs: 12 }} className='FormFooter' style={style}>
      <Grid container spacing={spacing} direction='column'>
        {!noLine && (
          <Grid size={{ xs: 12 }} sx={{ mt: spacing }}>
            <FormDivider line />
          </Grid>
        )}
        {children}
      </Grid>
    </Grid>
  );
};

export default FormFooter;
