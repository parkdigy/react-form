import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  PrivateMonthRangePickerMonthListProps as Props,
  PrivateMonthRangePickerMonthListDefaultProps,
} from './PrivateMonthRangePickerMonthList.types';
import { Button, Grid } from '@mui/material';
import PrivateMonthRangePickerMonth from '../PrivateMonthRangePickerMonth';
import { FormMonthPickerBaseValue } from '../../../FormItemCustom';
import dayjs, { Dayjs } from 'dayjs';
import { PrivateMonthRangePickerBaseValue, PrivateMonthRangePickerValue } from '../PrivateMonthRangePicker.types';

const PrivateMonthRangePickerMonthList: React.FC<Props> = ({
  selectType,
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
  const mouseOverTimer = useRef<NodeJS.Timeout>();

  // State -------------------------------------------------------------------------------------------------------------

  const [mouseOverMonth, setMouseOverMonth] = useState<PrivateMonthRangePickerBaseValue>();

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    return () => {
      if (mouseOverTimer.current) {
        clearTimeout(mouseOverTimer.current);
        mouseOverTimer.current = undefined;
      }
    };
  }, []);

  // Function ----------------------------------------------------------------------------------------------------------

  const valueToYm = useCallback((v: FormMonthPickerBaseValue) => v.year * 100 + v.month, []);
  const dateToValue = useCallback((v: Dayjs) => ({ year: v.year(), month: v.month() + 1 }), []);
  const makeYm = useCallback((year: number, month: number) => year * 100 + month, []);

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

  const displayValue: [PrivateMonthRangePickerBaseValue, PrivateMonthRangePickerBaseValue] = useMemo(
    () => [value[0] ? value[0] : defaultValue, value[1] ? value[1] : defaultValue],
    [defaultValue, value]
  );

  const months = useMemo(() => {
    const newMonths: {
      month: number;
      selected?: boolean;
      selectedStart?: boolean;
      selectedEnd?: boolean;
      selectedTemp?: boolean;
      disabled?: boolean;
    }[] = [];

    const monthValue = selectType === 'start' ? value[0] : value[1] ? value[1] : value[0];
    const monthDisplayValue = selectType === 'start' ? displayValue[0] : displayValue[1];
    const startYm = value[0] ? valueToYm(value[0]) : 999999;
    const endYm = value[1] ? valueToYm(value[1]) : 0;
    const mouseOverYm = mouseOverMonth ? valueToYm(mouseOverMonth) : null;

    for (let i = 1; i <= 12; i += 1) {
      const ym = monthValue ? makeYm(monthValue.year, i) : null;
      const displayYm = makeYm(monthDisplayValue.year, i);

      newMonths.push({
        month: i,
        // selectedStart: value ? i === value.month : i === defaultMonth,
        selected: !!ym && ym >= startYm && ym <= endYm,
        selectedStart: ym ? ym === startYm : i === monthDisplayValue.month,
        selectedEnd: ym === endYm,
        // selectedTemp: selectType === 'start' && !!ym && !!mouseOverYm && ym < endYm && ym >= mouseOverYm,
        disabled:
          displayYm < minYm ||
          displayYm > maxYm ||
          (disablePast && i < defaultYear) ||
          (disableFuture && i > defaultYear),
      });
    }
    return newMonths;
  }, [selectType, value, displayValue, valueToYm, makeYm, minYm, maxYm, disablePast, defaultYear, disableFuture]);

  // Function ----------------------------------------------------------------------------------------------------------

  const mouseOver = useCallback((month: number | undefined) => {
    if (mouseOverTimer.current) {
      clearTimeout(mouseOverTimer.current);
      mouseOverTimer.current = undefined;
    }
    if (month) {
      const monthDisplayValue = selectType === 'start' ? displayValue[0] : displayValue[1];
      setMouseOverMonth({ year: monthDisplayValue.year, month });
    } else {
      mouseOverTimer.current = setTimeout(() => {
        mouseOverTimer.current = undefined;
        setMouseOverMonth(undefined);
      }, 100);
    }
  }, []);

  const monthClick = useCallback(
    (month: number) => {
      const newValue: PrivateMonthRangePickerValue = [value[0], value[1]];
      let onChangeSelectType = selectType;

      if (selectType === 'start') {
        newValue[0] = value[0] ? { year: value[0].year, month } : { year: defaultYear, month };
      } else if (selectType === 'end') {
        newValue[1] = value[1]
          ? { year: value[1].year, month }
          : { year: value[0] ? value[0].year : defaultYear, month };
      }
      if (newValue[0] && newValue[1]) {
        const startYm = valueToYm(newValue[0]);
        const endYm = valueToYm(newValue[1]);
        if (selectType === 'end' && startYm > endYm) {
          newValue[0] = newValue[1];
          onChangeSelectType = 'start';
        } else if (selectType === 'start' && startYm > endYm) {
          newValue[1] = newValue[0];
        }
      }
      onChange(newValue, onChangeSelectType);
    },
    [defaultYear, onChange, selectType, value, valueToYm]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <Grid container className='MuiMonthCalendar-root'>
      {months.map((info) => (
        <PrivateMonthRangePickerMonth
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
          onClick={() => monthClick(info.month)}
          onMouseEnter={() => mouseOver(info.month)}
          onMouseLeave={() => mouseOver(undefined)}
        />
      ))}
    </Grid>
  );
};

PrivateMonthRangePickerMonthList.displayName = 'PrivateMonthRangePickerMonthList';
PrivateMonthRangePickerMonthList.defaultProps = PrivateMonthRangePickerMonthListDefaultProps;

export default PrivateMonthRangePickerMonthList;
