import React, { useMemo } from 'react';
import { PrivateYearPickerYearProps as Props } from './PrivateYearPickerYear.types';
import classNames from 'classnames';
import { StyledButton, StyledContainer } from './PrivateYearPickerYear.style';

const PrivateYearPickerYear = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      year,
      disabled,
      active,
      range,
      isDefault,
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
    const className = useMemo(
      () =>
        classNames(
          range && 'range',
          isDefault && 'default',
          selected && 'selected',
          selectedStart && 'selected-start',
          selectedEnd && 'selected-end',
          selectedTemp && 'selected-temp',
          active && 'active',
          disabled && 'disabled'
        ),
      [range, isDefault, selected, selectedStart, selectedEnd, selectedTemp, active, disabled]
    );

    return (
      <StyledContainer className='PrivateYearPickerYear' ref={ref} item xs={4}>
        <StyledButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {year}
        </StyledButton>
      </StyledContainer>
    );
  }
);

export default PrivateYearPickerYear;
