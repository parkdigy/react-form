import React, { useCallback } from 'react';
import classNames from 'classnames';
import FormText from '../FormText';
import { FormEmailProps, FormEmailCommands, FormEmailValue } from './FormEmail.types';

const FormEmail = React.forwardRef<FormEmailCommands, FormEmailProps>(
  (
    {
      className,
      validPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g,
      onValue,
      ...props
    },
    ref
  ) => {
    const handleValue = useCallback(
      (value: FormEmailValue) => {
        const newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
      },
      [onValue]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormText
        ref={ref}
        className={classNames(className, 'FormEmail')}
        type='email'
        validPattern={validPattern}
        onValue={handleValue}
        {...props}
      />
    );
  }
);

FormEmail.displayName = 'FormEmail';

export default FormEmail;
