import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthPickerProps as Props,
  PrivateMonthPickerDefaultProps,
  PrivateMonthPickerValue,
  PrivateMonthPickerBaseValue,
} from './PrivateMonthPicker.types';
import { MonthCalendar } from '@mui/x-date-pickers';
import { IconButton } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import './PrivateMonthPicker.scss';
import { useAutoUpdateState } from '@pdg/react-hook';
import { FormIcon } from '../../FormCommon';
import PrivateYearPicker from '../PrivateYearPicker';
import { FormMonthPickerBaseValue } from '../../FormItemCustom';
import PrivateMonthPickerMonthList from './PrivateMonthPickerMonthList';

const PrivateMonthPicker: React.FC<Props> = ({
  value: initValue,
  minValue: initMinValue,
  maxValue: initMaxValue,
  disablePast,
  disableFuture,
  selectFromValue,
  selectToValue,
  onChange,
}) => {
  // State -------------------------------------------------------------------------------------------------------------
  const [value, setValue] = useAutoUpdateState<PrivateMonthPickerValue>(initValue || null);

  // Function ----------------------------------------------------------------------------------------------------------

  const valueToDate = useCallback((v: PrivateMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`), []);
  const valueToYm = useCallback((v: FormMonthPickerBaseValue) => v.year * 100 + v.month, []);
  const dateToValue = useCallback((v: Dayjs) => ({ year: v.year(), month: v.month() + 1 }), []);

  // Memo --------------------------------------------------------------------------------------------------------------

  const valueDate = useMemo(() => (value ? valueToDate(value) : null), [value, valueToDate]);

  const minValue = useMemo(() => initMinValue || PrivateMonthPickerDefaultProps.minValue, [initMinValue]);
  const maxValue = useMemo(() => initMaxValue || PrivateMonthPickerDefaultProps.maxValue, [initMaxValue]);

  const minDate = useMemo(() => valueToDate(minValue), [minValue, valueToDate]);
  const maxDate = useMemo(() => valueToDate(maxValue), [maxValue, valueToDate]);

  const minYm = useMemo(() => valueToYm(minValue), [minValue, valueToYm]);
  const maxYm = useMemo(() => valueToYm(maxValue), [maxValue, valueToYm]);

  const displayValue = useMemo(() => {
    if (value) {
      return value;
    } else {
      const nowDate = new Date();
      const nowYm = nowDate.getFullYear() * 100 + (nowDate.getMonth() + 1);
      if (minDate && minYm > nowYm) {
        return dateToValue(minDate);
      } else if (maxDate && maxYm < nowYm) {
        return dateToValue(maxDate);
      } else {
        return dateToValue(dayjs(nowDate));
      }
    }
  }, [dateToValue, maxDate, maxYm, minDate, minYm, value]);
  const displayValueDate = useMemo(() => valueToDate(displayValue), [displayValue, valueToDate]);
  const displayValueYm = useMemo(() => displayValue.year * 100 + displayValue.month, [displayValue]);

  const prevBtnDisabled = useMemo(() => displayValueYm <= minYm, [displayValueYm, minYm]);
  const nextBtnDisabled = useMemo(() => displayValueYm >= maxYm, [displayValueYm, maxYm]);

  const selectFromYear = useMemo(() => (selectFromValue ? selectFromValue.year : undefined), [selectFromValue]);
  const selectToYear = useMemo(() => (selectToValue ? selectToValue.year : undefined), [selectToValue]);

  // Event Handler -----------------------------------------------------------------------------------------------------

  // const handleYearChange = useCallback(
  //   (value: Dayjs) => {
  //     const valueYm = Number(value.format('YYYYMM'));
  //
  //     if (minValue && valueYm < minYm) {
  //       setValue(minValue);
  //       onChange(minValue, false);
  //     } else if (maxValue && valueYm > maxYm) {
  //       setValue(maxValue);
  //       onChange(maxValue, false);
  //     } else {
  //       const newValue = { year: value.year(), month: value.month() + 1 };
  //       setValue(newValue);
  //       onChange(newValue, false);
  //     }
  //   },
  //   [maxValue, maxYm, minValue, minYm, onChange, setValue]
  // );

  const handleYearChange = useCallback(
    (year: number) => {
      const newValue = { ...displayValue, year };
      const valueYm = valueToYm(newValue);
      if (minValue && valueYm < minYm) {
        setValue(minValue);
        onChange(minValue, false);
      } else if (maxValue && valueYm > maxYm) {
        setValue(maxValue);
        onChange(maxValue, false);
      } else {
        setValue(newValue);
        onChange(newValue, false);
      }
    },
    [displayValue, maxValue, maxYm, minValue, minYm, onChange, setValue, valueToYm]
  );

  // const handleMonthChange = useCallback(
  //   (value: Dayjs) => {
  //     const newValue = { year: value.year(), month: value.month() + 1 };
  //     setValue(newValue);
  //     onChange(newValue, true);
  //   },
  //   [onChange, setValue]
  // );

  const handleMonthChange = useCallback(
    (newValue: PrivateMonthPickerBaseValue) => {
      setValue(newValue);
      onChange(newValue, true);
    },
    [onChange, setValue]
  );

  const handlePrevClick = useCallback(() => {
    const newValue = dateToValue(displayValueDate.subtract(1, 'months'));
    setValue(newValue);
    onChange(newValue, false);
  }, [dateToValue, displayValueDate, onChange, setValue]);

  const handleNextClick = useCallback(() => {
    const newValue = dateToValue(displayValueDate.add(1, 'months'));
    setValue(newValue);
    onChange(newValue, false);
  }, [dateToValue, displayValueDate, onChange, setValue]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='PrivateMonthPicker'>
      <div className='title-wrap'>
        <IconButton disabled={prevBtnDisabled} onClick={handlePrevClick}>
          <FormIcon>KeyboardArrowLeft</FormIcon>
        </IconButton>
        <div className='year-month-wrap'>
          <div className='year'>{displayValue.year}년</div>
          <div className='month'>{displayValue.month}월</div>
        </div>
        <IconButton disabled={nextBtnDisabled} onClick={handleNextClick}>
          <FormIcon>KeyboardArrowRight</FormIcon>
        </IconButton>
      </div>
      <div>
        <PrivateYearPicker
          value={value?.year || null}
          minYear={minValue.year}
          maxYear={maxValue.year}
          disablePast={disablePast}
          disableFuture={disableFuture}
          onChange={handleYearChange}
          hideHeader
          selectFromYear={selectFromYear}
          selectToYear={selectToYear}
        />
      </div>
      <div style={{ borderTop: '1px solid #efefef' }}>
        <PrivateMonthPickerMonthList
          value={value}
          minValue={minValue}
          maxValue={maxValue}
          disablePast={disablePast}
          disableFuture={disableFuture}
          onChange={handleMonthChange}
        />
      </div>
    </div>
  );
};

PrivateMonthPicker.displayName = 'PrivateMonthPicker';
PrivateMonthPicker.defaultProps = PrivateMonthPickerDefaultProps;

export default PrivateMonthPicker;
