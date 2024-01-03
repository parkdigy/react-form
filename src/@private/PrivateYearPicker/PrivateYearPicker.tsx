import React, { useCallback, useMemo } from 'react';
import {
  PrivateYearPickerProps as Props,
  PrivateYearPickerDefaultProps,
  PrivateYearPickerValue,
  PrivateYearPickerBaseValue,
} from './PrivateYearPicker.types';
import { YearCalendar } from '@mui/x-date-pickers';
import { IconButton } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import './PrivateYearPicker.scss';
import { useAutoUpdateState } from '@pdg/react-hook';
import { FormYearPickerBaseValue } from '../../FormItemCustom';
import { FormIcon } from '../../FormCommon';
import PrivateYearPickerYearList from './PrivateYearPickerYearList';

const PrivateYearPicker: React.FC<Props> = ({
  value: initValue,
  minYear: initMinYear,
  maxYear: initMaxYear,
  disablePast,
  disableFuture,
  hideHeader,
  selectFromYear,
  selectToYear,
  onChange,
}) => {
  // State -------------------------------------------------------------------------------------------------------------
  const [value, setValue] = useAutoUpdateState<PrivateYearPickerValue>(initValue || null);

  // Function ----------------------------------------------------------------------------------------------------------

  const valueToDate = useCallback((v: FormYearPickerBaseValue) => dayjs(`${v}-01-01`), []);
  const dateToValue = useCallback((v: Dayjs) => v.year(), []);

  // Memo --------------------------------------------------------------------------------------------------------------

  const valueDate = useMemo(() => (value ? valueToDate(value) : null), [value, valueToDate]);

  const minYear = useMemo(() => (initMinYear === undefined ? 0 : initMinYear), [initMinYear]);
  const maxYear = useMemo(() => (initMaxYear === undefined ? 2999 : initMaxYear), [initMaxYear]);

  const minDate = useMemo(() => (minYear ? valueToDate(minYear) : undefined), [minYear, valueToDate]);
  const maxDate = useMemo(() => (maxYear ? valueToDate(maxYear) : undefined), [maxYear, valueToDate]);

  const displayValue = useMemo(() => {
    if (value) {
      return value;
    } else {
      let year = dayjs().year();
      if (minYear > year) {
        year = minYear;
      } else if (maxYear < year) {
        year = maxYear;
      }
      return year;
    }
  }, [maxYear, minYear, value]);

  const prevBtnDisabled = useMemo(() => displayValue <= minYear, [displayValue, minYear]);
  const nextBtnDisabled = useMemo(() => displayValue >= maxYear, [displayValue, maxYear]);

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleYearChange = useCallback(
    (v: PrivateYearPickerBaseValue) => {
      if (minYear && v < minYear) {
        setValue(minYear);
        onChange(minYear, true);
      } else if (maxYear && v > maxYear) {
        setValue(maxYear);
        onChange(maxYear, true);
      } else {
        setValue(v);
        onChange(v, true);
      }
    },
    [maxYear, minYear, onChange, setValue]
  );

  const handlePrevClick = useCallback(() => {
    if (displayValue) {
      const newValue = displayValue - 1;
      setValue(newValue);
      onChange(newValue, false);
    }
  }, [displayValue, onChange, setValue]);

  const handleNextClick = useCallback(() => {
    if (displayValue) {
      const newValue = displayValue + 1;
      setValue(newValue);
      onChange(newValue, false);
    }
  }, [displayValue, onChange, setValue]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='PrivateYearPicker'>
      {!hideHeader && (
        <div className='title-wrap'>
          <IconButton disabled={prevBtnDisabled} onClick={handlePrevClick}>
            <FormIcon>KeyboardArrowLeft</FormIcon>
          </IconButton>
          <div className='year-month-wrap'>
            <div className='year'>{displayValue}년</div>
          </div>
          <IconButton disabled={nextBtnDisabled} onClick={handleNextClick}>
            <FormIcon>KeyboardArrowRight</FormIcon>
          </IconButton>
        </div>
      )}
      <div>
        <PrivateYearPickerYearList
          value={value}
          minYear={minYear}
          maxYear={maxYear}
          disablePast={disablePast}
          disableFuture={disableFuture}
          selectFromYear={selectFromYear}
          selectToYear={selectToYear}
          onChange={handleYearChange}
        />
        {/*<YearCalendar*/}
        {/*  minDate={minDate}*/}
        {/*  maxDate={maxDate}*/}
        {/*  disablePast={disablePast}*/}
        {/*  disableFuture={disableFuture}*/}
        {/*  value={valueDate}*/}
        {/*  onChange={handleYearChange}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

PrivateYearPicker.displayName = 'PrivateYearPicker';
PrivateYearPicker.defaultProps = PrivateYearPickerDefaultProps;

export default PrivateYearPicker;
