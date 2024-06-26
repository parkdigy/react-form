import React from 'react';
import classNames from 'classnames';
import { FormHiddenProps as Props, FormHiddenCommands, FormHiddenValue } from './FormHidden.types';
import './FormHidden.scss';
import FormTextField from '../FormTextField';

const FormHidden = React.forwardRef<FormHiddenCommands, Props>(({ className, ...props }, ref) => {
  return (
    <FormTextField<FormHiddenValue>
      ref={ref}
      className={classNames(className, 'FormHidden')}
      type='hidden'
      variant='standard'
      {...props}
    />
  );
});

FormHidden.displayName = 'FormHidden';

export default FormHidden;
