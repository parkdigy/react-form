import React, { useCallback } from 'react';
import { PrivateMonthPickerMonthProps as Props } from './PrivateMonthPickerMonth.types';
import classNames from 'classnames';
import { StyledButton, StyledContainer } from './PrivateMonthPickerMonth.style.private';

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
     * Event Handler
     * ******************************************************************************************************************/

    const handleClick = useCallback(() => {
      onClick && onClick(month);
    }, [month, onClick]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <StyledContainer className='PrivateMonthPickerMonth' ref={ref} size={{ xs: 4 }}>
        <StyledButton
          className={classNames(
            range && 'range',
            isDefault && 'default',
            active && 'active',
            selected && 'selected',
            selectedStart && 'selected-start',
            selectedEnd && 'selected-end',
            selectedTemp && 'selected-temp',
            disabled && 'disabled'
          )}
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

export default PrivateMonthPickerMonth;
