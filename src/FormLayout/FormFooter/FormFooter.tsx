import React, { useMemo } from 'react';
import { FormFooterProps as Props, FormFooterDefaultProps } from './FormFooter.types';
import { Grid } from '@mui/material';
import { useFormState } from '../../FormContext';
import FormDivider from '../FormDivider';

const FormFooter: React.FC<Props> = ({ children, noLine, hidden }) => {
  const { spacing } = useFormState();

  const style = useMemo(() => (hidden ? { display: 'none' } : undefined), [hidden]);

  return (
    <Grid item xs={12} className='FormFooter' style={style}>
      <Grid container spacing={spacing} direction='column'>
        {!noLine && (
          <Grid item xs={12} sx={{ mt: spacing }}>
            <FormDivider line />
          </Grid>
        )}
        {children}
      </Grid>
    </Grid>
  );
};

FormFooter.displayName = 'FormFooter';
FormFooter.defaultProps = FormFooterDefaultProps;

export default FormFooter;
