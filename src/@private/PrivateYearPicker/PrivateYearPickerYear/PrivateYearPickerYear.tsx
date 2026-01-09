import React from 'react';
import { type PrivateYearPickerYearProps as Props } from './PrivateYearPickerYear.types';
import classNames from 'classnames';
import { StyledButton, StyledContainer } from './PrivateYearPickerYear.style.private';

const PrivateYearPickerYear = ({
  ref,
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
}: Props) => {
  return (
    <StyledContainer className='PrivateYearPickerYear' ref={ref} size={{ xs: 4 }}>
      <StyledButton
        className={classNames(
          range && 'range',
          isDefault && 'default',
          selected && 'selected',
          selectedStart && 'selected-start',
          selectedEnd && 'selected-end',
          selectedTemp && 'selected-temp',
          active && 'active',
          disabled && 'disabled'
        )}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {year}
      </StyledButton>
    </StyledContainer>
  );
};

export default PrivateYearPickerYear;
