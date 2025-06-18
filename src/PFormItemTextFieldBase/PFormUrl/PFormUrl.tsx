import React, { useCallback } from 'react';
import PFormText from '../PFormText';
import { PFormUrlProps as Props, PFormUrlCommands, PFormUrlValue } from './PFormUrl.types';
import classNames from 'classnames';

const PFormUrl = React.forwardRef<PFormUrlCommands, Props>(
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
      (value: PFormUrlValue) => {
        const newValue = value.replace(/ /gi, '');
        return onValue ? onValue(newValue) : newValue;
      },
      [onValue]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <PFormText
        ref={ref}
        className={classNames(className, 'PFormUrl')}
        type='url'
        validPattern={validPattern}
        onValue={handleValue}
        {...props}
      />
    );
  }
);

PFormUrl.displayName = 'PFormUrl';

export default PFormUrl;
