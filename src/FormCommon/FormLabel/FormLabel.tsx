import React from 'react';
import { InputLabel } from '@mui/material';
import { FormLabelProps as Props, FormLabelDefaultProps } from './FormLabel.types';
import FormIcon from '../FormIcon';

const FormLabel = React.forwardRef<HTMLLabelElement, Props>(({ children, icon, size, style, ...props }, ref) => {
  return (
    <InputLabel
      ref={ref}
      shrink
      className='FormItemBase-InputLabel'
      size={size === 'medium' ? 'normal' : size}
      {...props}
      style={{ height: 20, transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined, ...style }}
    >
      {icon ? (
        <>
          <FormIcon style={{ verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 }}>
            {icon}
          </FormIcon>
          <span style={{ verticalAlign: 'middle' }}>{children}</span>
        </>
      ) : (
        children
      )}
    </InputLabel>
  );
});

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabelDefaultProps;

export default FormLabel;
