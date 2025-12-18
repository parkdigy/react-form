import React, { useMemo } from 'react';
import { PFormFooterProps as Props } from './PFormFooter.types';
import { Grid } from '@mui/material';
import { useFormState } from '../../PFormContext';
import PFormDivider from '../PFormDivider';

const PFormFooter = ({ children, noLine, hidden }): Props => {
  const { spacing } = useFormState();

  const style = useMemo(() => (hidden ? { display: 'none' } : undefined), [hidden]);

  return (
    <Grid size={{ xs: 12 }} className='PFormFooter' style={style}>
      <Grid container spacing={spacing} direction='column'>
        {!noLine && (
          <Grid size={{ xs: 12 }} sx={{ mt: spacing }}>
            <PFormDivider line />
          </Grid>
        )}
        {children}
      </Grid>
    </Grid>
  );
};

export default PFormFooter;
