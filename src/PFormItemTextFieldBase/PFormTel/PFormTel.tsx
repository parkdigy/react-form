import React, { useCallback } from 'react';
import PFormText from '../PFormText';
import classNames from 'classnames';
import { PFormTelProps as Props, PFormTelCommands, PFormTelValue } from './PFormTel.types';
import { formatTelNo } from '@pdg/formatting';

const PFormTel = React.forwardRef<PFormTelCommands, Props>(
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
      (value: PFormTelValue) => {
        const newValue = formatTelNo(value.replace(/[^0-9]/gi, ''));
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
        className={classNames(className, 'PFormTel')}
        onValue={handleValue}
        maxLength={13}
        validPattern={validPattern}
        {...props}
      />
    );
  }
);

PFormTel.displayName = 'PFormTel';

export default PFormTel;
