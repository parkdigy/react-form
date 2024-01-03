import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthRangePickerProps as Props,
  PrivateMonthRangePickerDefaultProps,
  PrivateMonthRangePickerValue,
  PrivateMonthRangePickerBaseValue,
  PrivateMonthRangePickerSelectType,
} from './PrivateMonthRangePicker.types';
import dayjs, { Dayjs } from 'dayjs';
import { FormMonthPickerBaseValue } from '../../FormItemCustom';
import PrivateYearRangePicker, {
  PrivateYearRangePickerSelectType,
  PrivateYearRangePickerValue,
} from '../PrivateYearRangePicker';
import PrivateMonthRangePickerMonthList from './PrivateMonthRangePickerMonthList';
import { Grid } from '@mui/material';
import PrivateMonthPicker, { PrivateMonthPickerBaseValue } from '../PrivateMonthPicker';
import './PrivateMonthRangePicker.scss';

const PrivateMonthRangePicker: React.FC<Props> = ({
  selectType,
  value,
  minValue: initMinValue,
  maxValue: initMaxValue,
  disablePast,
  disableFuture,
  onChange,
}) => {
  // Function ----------------------------------------------------------------------------------------------------------

  const valueToDate = useCallback((v: PrivateMonthRangePickerBaseValue) => dayjs(`${v.year}-${v.month}-01`), []);
  const valueToYm = useCallback((v: FormMonthPickerBaseValue) => v.year * 100 + v.month, []);
  const dateToValue = useCallback((v: Dayjs) => ({ year: v.year(), month: v.month() + 1 }), []);

  // Memo --------------------------------------------------------------------------------------------------------------

  const minValue = useMemo(() => initMinValue || PrivateMonthRangePickerDefaultProps.minValue, [initMinValue]);
  const maxValue = useMemo(() => initMaxValue || PrivateMonthRangePickerDefaultProps.maxValue, [initMaxValue]);

  const minDate = useMemo(() => valueToDate(minValue), [minValue, valueToDate]);
  const maxDate = useMemo(() => valueToDate(maxValue), [maxValue, valueToDate]);

  const endMinValue = useMemo(() => (value[0] ? value[0] : minValue), [value, minValue]);

  const minYm = useMemo(() => (minValue ? minValue.year * 100 + minValue.month : 0), [minValue]);
  const maxYm = useMemo(() => (maxValue ? maxValue.year * 100 + maxValue.month : 999999), [maxValue]);

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

  const yearValue: PrivateYearRangePickerValue = useMemo(
    () => [value[0] ? value[0].year : defaultYear, value[1] ? value[1].year : null],
    [defaultYear, value]
  );

  const getFinalValue = useCallback(
    (v: PrivateMonthRangePickerValue, selectType: PrivateMonthRangePickerSelectType) => {
      const finalValue: PrivateMonthRangePickerValue = [v[0], v[1]];
      if (finalValue[0]) {
        const startYm = valueToYm(finalValue[0]);
        if (startYm < minYm) {
          finalValue[0] = minValue;
        } else if (startYm > maxYm) {
          finalValue[0] = maxValue;
        }
      }
      if (finalValue[1]) {
        let endYm = valueToYm(finalValue[1]);
        if (finalValue[0]) {
          if (valueToYm(finalValue[0]) > endYm) {
            if (selectType === 'start') {
              finalValue[1] = finalValue[0];
            } else {
              finalValue[0] = finalValue[1];
            }
          }
        }
        endYm = valueToYm(finalValue[1]);
        if (endYm < minYm) {
          finalValue[1] = minValue;
        } else if (endYm > maxYm) {
          finalValue[1] = maxValue;
        }
      }
      return finalValue;
    },
    [maxValue, maxYm, minValue, minYm, valueToYm]
  );

  // Event Handler -----------------------------------------------------------------------------------------------------

  // const handleChange = useCallback(
  //   (v: PrivateMonthRangePickerBaseValue, isMonthSelect: boolean) => {
  //     const newValue: PrivateMonthRangePickerValue = [v, value[1]];
  //     if (!newValue[1]) {
  //       newValue[1] = newValue[0];
  //     } else if (newValue[0] && newValue[1] && valueToYm(newValue[0]) > valueToYm(newValue[1])) {
  //       newValue[1] = newValue[0];
  //     }
  //     onChange(newValue, 'start', isMonthSelect);
  //   },
  //   [onChange, value, valueToYm]
  // );
  //
  // const handleEndChange = useCallback(
  //   (v: PrivateMonthRangePickerBaseValue, isMonthSelect: boolean) => {
  //     onChange([value[0], v], 'end', isMonthSelect);
  //   },
  //   [onChange, value]
  // );

  // const handleYearChange = useCallback(
  //   (newValue: PrivateYearRangePickerValue, selectType: PrivateYearRangePickerSelectType) => {
  //     let finalValue: PrivateMonthRangePickerValue = [value[0], value[1]];
  //     if (newValue[0]) {
  //       finalValue[0] = { year: newValue[0], month: value[0] ? value[0].month : defaultMonth };
  //     } else {
  //       finalValue[0] = null;
  //     }
  //     if (newValue[1]) {
  //       finalValue[1] = { year: newValue[1], month: value[1] ? value[1].month : defaultMonth };
  //     } else {
  //       finalValue[1] = null;
  //     }
  //     finalValue = getFinalValue(finalValue);
  //
  //     onChange(finalValue, selectType, false);
  //   },
  //   [defaultMonth, getFinalValue, onChange, value]
  // );

  // const handleMonthChange = useCallback(
  //   (v: PrivateMonthRangePickerValue, selectType: PrivateMonthRangePickerSelectType) => {
  //     onChange(v, selectType, true);
  //   },
  //   [onChange]
  // );

  const handleStartMonthChange = useCallback(
    (v: PrivateMonthPickerBaseValue, isMonthSelect: boolean) => {
      const finalValue: PrivateMonthRangePickerValue = getFinalValue([v, value[1]], 'start');
      onChange(finalValue, 'start', isMonthSelect);
    },
    [getFinalValue, onChange, value]
  );

  const handleEndMonthChange = useCallback(
    (v: PrivateMonthPickerBaseValue, isMonthSelect: boolean) => {
      const finalValue: PrivateMonthRangePickerValue = getFinalValue([value[0], v], 'end');
      onChange(finalValue, 'end', isMonthSelect);
    },
    [getFinalValue, onChange, value]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  // return <PrivateMonthPicker value={value[0]} minValue={minValue} maxValue={maxValue} onChange={handleChange} />;

  return (
    <div className='PrivateMonthRangePicker'>
      <div className='title-wrap'>
        <div className='year-month-wrap'>
          {/*<div className='year'>{displayValue.year}년</div>*/}
          {/*<div className='month'>{displayValue.month}월</div>*/}
        </div>
      </div>
      <Grid container className='container'>
        <Grid item>
          <PrivateMonthPicker
            value={value[0]}
            selectToValue={value[1]}
            minValue={minValue}
            maxValue={maxValue}
            disablePast={disablePast}
            disableFuture={disableFuture}
            onChange={handleStartMonthChange}
          />
        </Grid>
        <Grid className='container-div'>~</Grid>
        <Grid item>
          <PrivateMonthPicker
            value={value[1]}
            selectFromValue={value[0]}
            minValue={minValue}
            maxValue={maxValue}
            disablePast={disablePast}
            disableFuture={disableFuture}
            onChange={handleEndMonthChange}
          />
        </Grid>
      </Grid>
      {/*<div>*/}
      {/*  <PrivateYearRangePicker*/}
      {/*    selectType={selectType}*/}
      {/*    value={yearValue}*/}
      {/*    minYear={minValue.year}*/}
      {/*    maxYear={maxValue.year}*/}
      {/*    disablePast={disablePast}*/}
      {/*    disableFuture={disableFuture}*/}
      {/*    onChange={handleYearChange}*/}
      {/*    hideHeader*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div style={{ borderTop: '1px solid #efefef' }}>*/}
      {/*  <PrivateMonthRangePickerMonthList*/}
      {/*    selectType={selectType}*/}
      {/*    value={value}*/}
      {/*    minValue={minValue}*/}
      {/*    maxValue={maxValue}*/}
      {/*    disablePast={disablePast}*/}
      {/*    disableFuture={disableFuture}*/}
      {/*    onChange={handleMonthChange}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};

PrivateMonthRangePicker.displayName = 'PrivateMonthRangePicker';
PrivateMonthRangePicker.defaultProps = PrivateMonthRangePickerDefaultProps;

export default PrivateMonthRangePicker;
