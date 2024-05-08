import React, { useCallback, useMemo } from 'react';
import { PrivateMonthPickerMonthProps as Props } from './PrivateMonthPickerMonth.types';
import classNames from 'classnames';
import { StyledButton, StyledContainer } from './PrivateMonthPickerMonth.style';

const PrivateMonthPickerMonth = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      month,
      range,
      disabled,
      isDefault,
      active,
      selected,
      selectedStart,
      selectedEnd,
      selectedTemp,
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const className = useMemo(
      () =>
        classNames(
          range && 'range',
          isDefault && 'default',
          active && 'active',
          selected && 'selected',
          selectedStart && 'selected-start',
          selectedEnd && 'selected-end',
          selectedTemp && 'selected-temp',
          disabled && 'disabled'
        ),
      [range, isDefault, active, selected, selectedStart, selectedEnd, selectedTemp, disabled]
    );

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleClick = useCallback(() => {
      onClick && onClick(month);
    }, [month, onClick]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <StyledContainer className='PrivateMonthPickerMonth' ref={ref} item xs={4}>
        <StyledButton
          className={className}
          disabled={disabled}
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {month}월
        </StyledButton>
      </StyledContainer>
    );
  }
);

PrivateMonthPickerMonth.displayName = 'PrivateMonthPickerMonth';

export default PrivateMonthPickerMonth;
