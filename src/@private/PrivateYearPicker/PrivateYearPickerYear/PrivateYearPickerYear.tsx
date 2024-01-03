import React, { useMemo } from 'react';
import { PrivateYearPickerYearProps as Props, PrivateYearPickerYearDefaultProps } from './PrivateYearPickerYear.types';
import classNames from 'classnames';
import { Button, Grid } from '@mui/material';

const PrivateYearPickerYear = React.forwardRef<HTMLDivElement, Props>(
  (
    { year, disabled, selected, selectedStart, selectedEnd, selectedTemp, onClick, onMouseEnter, onMouseLeave },
    ref
  ) => {
    const className = useMemo(
      () =>
        classNames(
          'MuiPickersYear-yearButton',
          selected && 'selected',
          selectedStart && 'selected-start',
          selectedEnd && 'selected-end',
          selectedTemp && 'selected-temp',
          disabled && 'disabled'
        ),
      [selected, selectedStart, selectedEnd, selectedTemp, disabled]
    );

    return (
      <Grid ref={ref} item xs={4} className='MuiPickersYear-root'>
        <Button
          className={className}
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {year}
        </Button>
      </Grid>
    );
  }
);

PrivateYearPickerYear.displayName = 'PrivateYearPickerYear';
PrivateYearPickerYear.defaultProps = PrivateYearPickerYearDefaultProps;

export default PrivateYearPickerYear;
