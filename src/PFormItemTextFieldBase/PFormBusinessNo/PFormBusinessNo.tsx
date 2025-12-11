import React, { useCallback } from 'react';
import PFormText from '../PFormText';
import classNames from 'classnames';
import { PFormBusinessNoProps as Props, PFormBusinessNoCommands, PFormBusinessNoValue } from './PFormBusinessNo.types';
import { formatBusinessNo } from '@pdg/formatting';

const PFormBusinessNo = React.forwardRef<PFormBusinessNoCommands, Props>(
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
      (value: PFormBusinessNoValue) => {
        const newValue = formatBusinessNo(value.replace(/[^0-9]/gi, ''));
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
        className={classNames(className, 'PFormBusinessNo')}
        maxLength={12}
        validPattern={validPattern}
        onValue={handleValue}
        {...props}
      />
    );
  }
);

PFormBusinessNo.displayName = 'PFormBusinessNo';

export default PFormBusinessNo;
