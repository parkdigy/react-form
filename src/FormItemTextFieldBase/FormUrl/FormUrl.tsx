import React, { useCallback } from 'react';
import FormText from '../FormText';
import { FormUrlProps as Props, FormUrlCommands, FormUrlValue } from './FormUrl.types';
import classNames from 'classnames';

const FormUrl = React.forwardRef<FormUrlCommands, Props>(
  (
    {
      className,
      validPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'%()*+,;=.]+$/gim,
      onValue,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleValue = useCallback(
      (value: FormUrlValue) => {
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
        className={classNames(className, 'FormUrl')}
        type='url'
        validPattern={validPattern}
        onValue={handleValue}
        {...props}
      />
    );
  }
);

FormUrl.displayName = 'FormUrl';

export default FormUrl;
