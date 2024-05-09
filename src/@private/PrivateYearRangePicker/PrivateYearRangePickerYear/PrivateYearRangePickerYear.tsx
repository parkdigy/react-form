import React, { useMemo } from 'react';
import { PrivateYearRangePickerYearProps as Props } from './PrivateYearRangePickerYear.types';
import classNames from 'classnames';
import { StyledContainer, StyledButton } from './PrivateYearRangePickerYear.style.private';

const PrivateYearRangePickerYear = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      year,
      disabled,
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
          isDefault && 'default',
          selected && 'selected',
          selectedStart && 'selected-start',
          selectedEnd && 'selected-end',
          selectedTemp && 'selected-temp',
          disabled && 'disabled'
        ),
      [isDefault, selected, selectedStart, selectedEnd, selectedTemp, disabled]
    );

    return (
      <StyledContainer className='PrivateYearRangePickerYear' ref={ref} item xs={4}>
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

export default PrivateYearRangePickerYear;
