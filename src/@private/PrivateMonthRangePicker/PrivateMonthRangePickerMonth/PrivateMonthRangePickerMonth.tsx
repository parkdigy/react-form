import React, { useMemo } from 'react';
import {
  PrivateMonthRangePickerMonthProps as Props,
  PrivateMonthRangePickerMonthDefaultProps,
} from './PrivateMonthRangePickerMonth.types';
import classNames from 'classnames';
import { Button, Grid } from '@mui/material';

const PrivateMonthRangePickerMonth = React.forwardRef<HTMLDivElement, Props>(
  (
    { month, disabled, selected, selectedStart, selectedEnd, selectedTemp, onClick, onMouseEnter, onMouseLeave },
    ref
  ) => {
    const className = useMemo(
      () =>
        classNames(
          'MuiPickersMonth-monthButton',
          selected && 'selected',
          selectedStart && 'selected-start',
          selectedEnd && 'selected-end',
          selectedTemp && 'selected-temp',
          disabled && 'disabled'
        ),
      [selected, selectedStart, selectedEnd, selectedTemp, disabled]
    );

    return (
      <Grid ref={ref} item xs={4} className='MuiPickersMonth-root'>
        <Button
          className={className}
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {month}월
        </Button>
      </Grid>
    );
  }
);

PrivateMonthRangePickerMonth.displayName = 'PrivateMonthRangePickerMonth';
PrivateMonthRangePickerMonth.defaultProps = PrivateMonthRangePickerMonthDefaultProps;

export default PrivateMonthRangePickerMonth;
