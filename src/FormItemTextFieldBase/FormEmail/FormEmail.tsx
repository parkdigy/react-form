import React, { useCallback } from 'react';
import classNames from 'classnames';
import FormText from '../FormText';
import { FormEmailProps, FormEmailDefaultProps, FormEmailCommands, FormEmailValue } from './FormEmail.types';

const FormEmail = React.forwardRef<FormEmailCommands, FormEmailProps>(({ className, onValue, ...props }, ref) => {
  const handleValue = useCallback(
    (value: FormEmailValue) => {
      const newValue = value.replace(/ /gi, '');
      return onValue ? onValue(newValue) : newValue;
    },
    [onValue]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <FormText ref={ref} className={classNames(className, 'FormEmail')} type='email' onValue={handleValue} {...props} />
  );
});

FormEmail.displayName = 'FormEmail';
FormEmail.defaultProps = FormEmailDefaultProps;

export default FormEmail;
