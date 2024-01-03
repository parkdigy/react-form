import React, { useMemo } from 'react';
import {
  PrivateYearRangePickerYearProps as Props,
  PrivateYearRangePickerYearDefaultProps,
} from './PrivateYearRangePickerYear.types';
import classNames from 'classnames';
import { Button, Grid } from '@mui/material';

const PrivateYearRangePickerYear = React.forwardRef<HTMLDivElement, Props>(
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

PrivateYearRangePickerYear.displayName = 'PrivateYearRangePickerYear';
PrivateYearRangePickerYear.defaultProps = PrivateYearRangePickerYearDefaultProps;

export default PrivateYearRangePickerYear;
