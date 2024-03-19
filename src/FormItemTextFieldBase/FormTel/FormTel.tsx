import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import { FormTelProps as Props, FormTelDefaultProps, FormTelCommands, FormTelValue } from './FormTel.types';
import { telNoAutoDash } from '@pdg/util';

const FormTel = React.forwardRef<FormTelCommands, Props>(({ className, onValue, ...props }, ref) => {
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
    <FormText ref={ref} className={classNames(className, 'FormTel')} onValue={handleValue} maxLength={13} {...props} />
  );
});

FormTel.displayName = 'FormTel';
FormTel.defaultProps = FormTelDefaultProps;

export default FormTel;
