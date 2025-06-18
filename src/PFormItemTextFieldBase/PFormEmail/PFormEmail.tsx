import React, { useCallback } from 'react';
import classNames from 'classnames';
import PFormText from '../PFormText';
import { PFormEmailProps, PFormEmailCommands, PFormEmailValue } from './PFormEmail.types';

const PFormEmail = React.forwardRef<PFormEmailCommands, PFormEmailProps>(
  (
    {
      className,
      validPattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g,
      onValue,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleValue = useCallback(
      (value: PFormEmailValue) => {
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
        className={classNames(className, 'PFormEmail')}
        type='email'
        validPattern={validPattern}
        onValue={handleValue}
        {...props}
      />
    );
  }
);

PFormEmail.displayName = 'PFormEmail';

export default PFormEmail;
