import React, { useCallback } from 'react';
import FormText from '../FormText';
import { FormUrlProps as Props, FormUrlDefaultProps, FormUrlCommands, FormUrlValue } from './FormUrl.types';
import classNames from 'classnames';

const FormUrl = React.forwardRef<FormUrlCommands, Props>(({ className, onValue, ...props }, ref) => {
  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleValue = useCallback(
    (value: FormUrlValue) => {
      const newValue = value.replace(/ /gi, '');
      return onValue ? onValue(newValue) : newValue;
    },
    [onValue]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <FormText ref={ref} className={classNames(className, 'FormUrl')} type='url' onValue={handleValue} {...props} />
  );
});

FormUrl.displayName = 'FormUrl';
FormUrl.defaultProps = FormUrlDefaultProps;

export default FormUrl;
