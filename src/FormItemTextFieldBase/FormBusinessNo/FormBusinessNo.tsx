import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import { FormBusinessNoProps as Props, FormBusinessNoCommands, FormBusinessNoValue } from './FormBusinessNo.types';
import { businessNoAutoDash } from '@pdg/util';

const FormBusinessNo = React.forwardRef<FormBusinessNoCommands, Props>(
  (
    {
      className,
      validPattern = /(([0-9]{3})([0-9]{2})([0-9]{5}))|(([0-9]{3})-([0-9]{2})-([0-9]{5}))/,
      onValue,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleValue = useCallback(
      (value: FormBusinessNoValue) => {
        const newValue = businessNoAutoDash(value.replace(/[^0-9]/gi, ''));
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
        className={classNames(className, 'FormBusinessNo')}
        maxLength={12}
        validPattern={validPattern}
        onValue={handleValue}
        {...props}
      />
    );
  }
);

FormBusinessNo.displayName = 'FormBusinessNo';

export default FormBusinessNo;
