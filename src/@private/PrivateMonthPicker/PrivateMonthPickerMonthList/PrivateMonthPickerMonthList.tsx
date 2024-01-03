import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  PrivateMonthPickerMonthListProps as Props,
  PrivateMonthPickerMonthListDefaultProps,
} from './PrivateMonthPickerMonthList.types';
import { Button, Grid } from '@mui/material';
import PrivateMonthPickerMonth from '../PrivateMonthPickerMonth';
import { FormMonthPickerBaseValue } from '../../../FormItemCustom';
import dayjs, { Dayjs } from 'dayjs';

const PrivateMonthPickerMonthList: React.FC<Props> = ({
  value,
  minValue,
  maxValue,
  disablePast,
  disableFuture,
  onChange,
}) => {
  // Ref ---------------------------------------------------------------------------------------------------------------

  const startButtonRef = useRef<HTMLDivElement | null>(null);
  const endButtonRef = useRef<HTMLDivElement | null>(null);

  // Function ----------------------------------------------------------------------------------------------------------

  const valueToYm = useCallback((v: FormMonthPickerBaseValue) => v.year * 100 + v.month, []);
  const dateToValue = useCallback((v: Dayjs) => ({ year: v.year(), month: v.month() + 1 }), []);

  // Memo --------------------------------------------------------------------------------------------------------------

  const minYm = useMemo(() => valueToYm(minValue), [minValue, valueToYm]);
  const maxYm = useMemo(() => valueToYm(maxValue), [maxValue, valueToYm]);

  const defaultValue = useMemo(() => {
    const nowYm = new Date().getFullYear() * 100 + new Date().getMonth() + 1;
    if (nowYm < minYm) {
      return minValue;
    } else if (nowYm > maxYm) {
      return maxValue;
    } else {
      return dateToValue(dayjs());
    }
  }, [minYm, maxYm, minValue, maxValue, dateToValue]);

  const defaultYear = useMemo(() => defaultValue.year, [defaultValue]);
  const defaultMonth = useMemo(() => defaultValue.month, [defaultValue]);

  const months = useMemo(() => {
    const newMonths: {
      month: number;
      selected?: boolean;
      selectedStart?: boolean;
      selectedEnd?: boolean;
      selectedTemp?: boolean;
      disabled?: boolean;
    }[] = [];
    for (let i = 1; i <= 12; i += 1) {
      const ym = value ? value.year * 100 + i : defaultYear * 100 + i;
      newMonths.push({
        month: i,
        selectedStart: value ? i === value.month : i === defaultMonth,
        disabled: ym < minYm || ym > maxYm || (disablePast && i < defaultYear) || (disableFuture && i > defaultYear),
      });
    }
    return newMonths;
  }, [disableFuture, disablePast, maxYm, minYm, defaultMonth, defaultYear, value]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <Grid container className='MuiMonthCalendar-root'>
      {months.map((info) => (
        <PrivateMonthPickerMonth
          key={info.month}
          ref={
            info.selectedStart || info.selectedEnd
              ? (ref) => {
                  if (info.selectedStart) {
                    startButtonRef.current = ref;
                  } else if (info.selectedEnd) {
                    endButtonRef.current = ref;
                  }
                }
              : undefined
          }
          month={info.month}
          selected={info.selected}
          selectedStart={info.selectedStart}
          selectedEnd={info.selectedEnd}
          selectedTemp={info.selectedTemp}
          disabled={info.disabled}
          onClick={() => onChange({ year: value?.year || defaultYear, month: info.month })}
        />
      ))}
    </Grid>
  );
};

PrivateMonthPickerMonthList.displayName = 'PrivateMonthPickerMonthList';
PrivateMonthPickerMonthList.defaultProps = PrivateMonthPickerMonthListDefaultProps;

export default PrivateMonthPickerMonthList;
