import React from 'react';
import { type PrivateMonthPickerMonthProps as Props } from './PrivateMonthPickerMonth.types';
import classNames from 'classnames';
import { StyledButton, StyledContainer } from './PrivateMonthPickerMonth.style.private';

const PrivateMonthPickerMonth = ({
  ref,
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
}: Props) => {
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
        onClick={() => onClick?.(month)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {month}월
      </StyledButton>
    </StyledContainer>
  );
};

export default PrivateMonthPickerMonth;
