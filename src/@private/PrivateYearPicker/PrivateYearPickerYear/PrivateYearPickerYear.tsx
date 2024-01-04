import React, { useMemo } from 'react';
import { PrivateYearPickerYearProps as Props, PrivateYearPickerYearDefaultProps } from './PrivateYearPickerYear.types';
import classNames from 'classnames';
import { StyledButton, StyledContainer } from './PrivateYearPickerYear.style';

const PrivateYearPickerYear = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      year,
      disabled,
      active,
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
          active && 'active',
          disabled && 'disabled'
        ),
      [isDefault, selected, selectedStart, selectedEnd, selectedTemp, active, disabled]
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

PrivateYearPickerYear.displayName = 'PrivateYearPickerYear';
PrivateYearPickerYear.defaultProps = PrivateYearPickerYearDefaultProps;

export default PrivateYearPickerYear;
