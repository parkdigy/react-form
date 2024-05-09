import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import { FormTelProps as Props, FormTelCommands, FormTelValue } from './FormTel.types';
import { telNoAutoDash } from '@pdg/util';

const FormTel = React.forwardRef<FormTelCommands, Props>(
  (
    {
      className,
      onValue,
      validPattern = /(^([0-9]{2,3})([0-9]{3,4})([0-9]{4})$)|(^([0-9]{2,3})-([0-9]{3,4})-([0-9]{4})$)|(^([0-9]{4})-([0-9]{4})$)|(^\+(?:[-]?[0-9]){8,}$)/,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleValue = useCallback(
      (value: FormTelValue) => {
        const newValue = telNoAutoDash(value.replace(/[^0-9]/gi, ''));
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
        className={classNames(className, 'FormTel')}
        onValue={handleValue}
        maxLength={13}
        validPattern={validPattern}
        {...props}
      />
    );
  }
);

export default FormTel;
