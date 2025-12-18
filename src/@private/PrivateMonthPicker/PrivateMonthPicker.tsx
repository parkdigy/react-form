import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthPickerProps as Props,
  PrivateMonthPickerValue,
  PrivateMonthPickerBaseValue,
} from './PrivateMonthPicker.types';
import dayjs from 'dayjs';
import { useAutoUpdateState } from '@pdg/react-hook';
import PrivateYearPicker from '../PrivateYearPicker';
import PrivateMonthPickerMonthList from './PrivateMonthPickerMonthList';
import {
  StyledContainer,
  StyledIconButton,
  StyledYearMonth,
  StyledYearMonthError,
  TitleContainer,
} from './PrivateMonthPicker.style.private';
import { PIcon } from '@pdg/react-component';
import { dateToValue, valueToDate, valueToYm } from './PrivateMonthPicker.function.private';

const DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1,
};
const DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12,
};

const PrivateMonthPicker = ({
  value: initValue = null,
  minValue = DEFAULT_MIN_VALUE,
  maxValue = DEFAULT_MAX_VALUE,
  disablePast,
  disableFuture,
  selectFromValue,
  selectToValue,
  onChange,
}: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useAutoUpdateState<PrivateMonthPickerValue>(initValue);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const dateInfo = useMemo(() => {
    const nowValue = dateToValue(dayjs());
    const nowYm = valueToYm(nowValue);

    let minAvailableValue: PrivateMonthPickerBaseValue;
    if (disablePast) {
      const minYm = valueToYm(minValue);
      minAvailableValue = nowYm > minYm ? nowValue : minValue;
    } else {
      minAvailableValue = minValue;
    }
    const minAvailableYm = valueToYm(minAvailableValue);

    let maxAvailableValue: PrivateMonthPickerBaseValue;
    if (disableFuture) {
      const maxYm = valueToYm(maxValue);
      maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
    } else {
      maxAvailableValue = maxValue;
    }
    const maxAvailableYm = valueToYm(maxAvailableValue);

    return {
      now: {
        value: nowValue,
        ym: nowYm,
      },
      available: {
        min: {
          value: minAvailableValue,
          ym: minAvailableYm,
        },
        max: {
          value: maxAvailableValue,
          ym: maxAvailableYm,
        },
      },
    };
  }, [disableFuture, disablePast, maxValue, minValue]);

  const displayInfo = useMemo(() => {
    let displayValue: PrivateMonthPickerBaseValue;
    if (value && !Number.isNaN(value.year) && !Number.isNaN(value.month)) {
      displayValue = value;
    } else {
      if (dateInfo.now.ym < dateInfo.available.min.ym) {
        displayValue = dateInfo.available.min.value;
      } else if (dateInfo.now.ym > dateInfo.available.max.ym) {
        displayValue = dateInfo.available.max.value;
      } else {
        displayValue = selectFromValue || selectToValue || dateInfo.now.value;
      }
    }

    const displayValueDate = valueToDate(displayValue);
    const displayValueYm = displayValue.year * 100 + displayValue.month;
    const displayValueError = displayValueYm < dateInfo.available.min.ym || displayValueYm > dateInfo.available.max.ym;

    return { value: displayValue, date: displayValueDate, ym: displayValueYm, error: displayValueError };
  }, [dateInfo, selectFromValue, selectToValue, value]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleYearChange = useCallback(
    (year: number) => {
      const newValue = { ...displayInfo.value, year };
      const valueYm = valueToYm(newValue);
      if (valueYm < dateInfo.available.min.ym) {
        setValue(dateInfo.available.min.value);
        onChange(dateInfo.available.min.value, false);
      } else if (valueYm > dateInfo.available.max.ym) {
        setValue(dateInfo.available.max.value);
        onChange(dateInfo.available.max.value, false);
      } else {
        setValue(newValue);
        onChange(newValue, false);
      }
    },
    [dateInfo, displayInfo, onChange, setValue]
  );

  const handleMonthChange = useCallback(
    (newValue: PrivateMonthPickerBaseValue) => {
      setValue(newValue);
      onChange(newValue, true);
    },
    [onChange, setValue]
  );

  const handlePrevClick = useCallback(() => {
    const newValue = dateToValue(displayInfo.date.subtract(1, 'months'));
    setValue(newValue);
    onChange(newValue, false);
  }, [displayInfo, onChange, setValue]);

  const handleNextClick = useCallback(() => {
    const newValue = dateToValue(displayInfo.date.add(1, 'months'));
    setValue(newValue);
    onChange(newValue, false);
  }, [displayInfo, onChange, setValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const prevBtnDisabled = displayInfo.ym <= dateInfo.available.min.ym;
  const nextBtnDisabled = displayInfo.ym >= dateInfo.available.max.ym;
  const selectFromYear = selectFromValue ? selectFromValue.year : undefined;
  const selectToYear = selectToValue ? selectToValue.year : undefined;

  return (
    <StyledContainer className='PrivateMonthPicker'>
      <TitleContainer>
        <StyledIconButton disabled={prevBtnDisabled} onClick={handlePrevClick}>
          <PIcon>KeyboardArrowLeft</PIcon>
        </StyledIconButton>
        {displayInfo.error ? (
          <StyledYearMonthError>
            {displayInfo.value.year}년 {displayInfo.value.month}월
          </StyledYearMonthError>
        ) : (
          <StyledYearMonth>
            {displayInfo.value.year}년 {displayInfo.value.month}월
          </StyledYearMonth>
        )}
        <StyledIconButton disabled={nextBtnDisabled} onClick={handleNextClick}>
          <PIcon>KeyboardArrowRight</PIcon>
        </StyledIconButton>
      </TitleContainer>
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
          defaultValue={selectFromValue || selectToValue}
          minAvailableValue={dateInfo.available.min.value}
          maxAvailableValue={dateInfo.available.max.value}
          disablePast={disablePast}
          disableFuture={disableFuture}
          selectFromValue={selectFromValue}
          selectToValue={selectToValue}
          onChange={handleMonthChange}
        />
      </div>
    </StyledContainer>
  );
};

export default PrivateMonthPicker;
