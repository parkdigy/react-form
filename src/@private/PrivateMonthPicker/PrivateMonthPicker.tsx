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
import { PdgIcon } from '@pdg/react-component';
import { dateToValue, valueToDate, valueToYm } from './PrivateMonthPicker.function.private';

const DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1,
};
const DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12,
};

const PrivateMonthPicker: React.FC<Props> = ({
  value: initValue = null,
  minValue = DEFAULT_MIN_VALUE,
  maxValue = DEFAULT_MAX_VALUE,
  disablePast,
  disableFuture,
  selectFromValue,
  selectToValue,
  onChange,
}) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useAutoUpdateState<PrivateMonthPickerValue>(initValue);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const nowValue = useMemo(() => dateToValue(dayjs()), []);
  const nowYm = useMemo(() => valueToYm(nowValue), [nowValue]);

  const minAvailableValue = useMemo(() => {
    if (disablePast) {
      const minYm = valueToYm(minValue);
      return nowYm > minYm ? nowValue : minValue;
    } else {
      return minValue;
    }
  }, [disablePast, minValue, nowYm, nowValue]);
  const minAvailableYm = useMemo(() => valueToYm(minAvailableValue), [minAvailableValue]);

  const maxAvailableValue = useMemo(() => {
    if (disableFuture) {
      const maxYm = valueToYm(maxValue);
      return nowYm < maxYm ? nowValue : maxValue;
    } else {
      return maxValue;
    }
  }, [disableFuture, maxValue, nowYm, nowValue]);
  const maxAvailableYm = useMemo(() => valueToYm(maxAvailableValue), [maxAvailableValue]);

  const displayValue = useMemo(() => {
    if (value && !Number.isNaN(value.year) && !Number.isNaN(value.month)) {
      return value;
    } else {
      if (nowYm < minAvailableYm) {
        return minAvailableValue;
      } else if (nowYm > maxAvailableYm) {
        return maxAvailableValue;
      } else {
        return selectFromValue || selectToValue || nowValue;
      }
    }
  }, [
    maxAvailableValue,
    maxAvailableYm,
    minAvailableValue,
    minAvailableYm,
    nowValue,
    nowYm,
    selectFromValue,
    selectToValue,
    value,
  ]);
  const displayValueDate = useMemo(() => valueToDate(displayValue), [displayValue]);
  const displayValueYm = useMemo(() => displayValue.year * 100 + displayValue.month, [displayValue]);
  const displayValueError = useMemo(
    () => displayValueYm < minAvailableYm || displayValueYm > maxAvailableYm,
    [displayValueYm, maxAvailableYm, minAvailableYm]
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleYearChange = useCallback(
    (year: number) => {
      const newValue = { ...displayValue, year };
      const valueYm = valueToYm(newValue);
      if (valueYm < minAvailableYm) {
        setValue(minAvailableValue);
        onChange(minAvailableValue, false);
      } else if (valueYm > maxAvailableYm) {
        setValue(maxAvailableValue);
        onChange(maxAvailableValue, false);
      } else {
        setValue(newValue);
        onChange(newValue, false);
      }
    },
    [displayValue, maxAvailableValue, maxAvailableYm, minAvailableValue, minAvailableYm, onChange, setValue]
  );

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
  }, [displayValueDate, onChange, setValue]);

  const handleNextClick = useCallback(() => {
    const newValue = dateToValue(displayValueDate.add(1, 'months'));
    setValue(newValue);
    onChange(newValue, false);
  }, [displayValueDate, onChange, setValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const prevBtnDisabled = displayValueYm <= minAvailableYm;
  const nextBtnDisabled = displayValueYm >= maxAvailableYm;
  const selectFromYear = selectFromValue ? selectFromValue.year : undefined;
  const selectToYear = selectToValue ? selectToValue.year : undefined;

  return (
    <StyledContainer className='PrivateMonthPicker'>
      <TitleContainer>
        <StyledIconButton disabled={prevBtnDisabled} onClick={handlePrevClick}>
          <PdgIcon>KeyboardArrowLeft</PdgIcon>
        </StyledIconButton>
        {displayValueError ? (
          <StyledYearMonthError>
            {displayValue.year}년 {displayValue.month}월
          </StyledYearMonthError>
        ) : (
          <StyledYearMonth>
            {displayValue.year}년 {displayValue.month}월
          </StyledYearMonth>
        )}
        <StyledIconButton disabled={nextBtnDisabled} onClick={handleNextClick}>
          <PdgIcon>KeyboardArrowRight</PdgIcon>
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
          minAvailableValue={minAvailableValue}
          maxAvailableValue={maxAvailableValue}
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
