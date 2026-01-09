import React, { useMemo } from 'react';
import { type PFormFooterProps as Props } from './PFormFooter.types';
import { Grid } from '@mui/material';
import { useFormState } from '../../PFormContext';
import PFormDivider from '../PFormDivider';

const PFormFooter = ({ children, noLine, hidden }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { spacing } = useFormState();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo(() => (hidden ? { display: 'none' } : undefined), [hidden]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

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
