import React, { useCallback } from 'react';
import classNames from 'classnames';
import FormTextField from '../FormTextField';
import { FormTextProps as Props, FormTextDefaultProps } from './FormText.types';
import { FormItemValue, FormValueItemBaseCommands } from '../../@types';

const FormText = React.forwardRef<FormValueItemBaseCommands, Props>(({ className, onValue, ...props }, ref) => {
  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleValue = useCallback(
    (value: FormItemValue) => {
      let finalValue = value == null ? '' : value;
      if (onValue) {
        finalValue = onValue(finalValue);
      }
      return finalValue;
    },
    [onValue]
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return <FormTextField ref={ref} className={classNames(className, 'FormText')} onValue={handleValue} {...props} />;
});

FormText.displayName = 'FormText';
FormText.defaultProps = FormTextDefaultProps;

export default FormText;
