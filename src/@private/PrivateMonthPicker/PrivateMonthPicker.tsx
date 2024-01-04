import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthPickerProps as Props,
  PrivateMonthPickerDefaultProps,
  PrivateMonthPickerValue,
  PrivateMonthPickerBaseValue,
} from './PrivateMonthPicker.types';
import dayjs, { Dayjs } from 'dayjs';
import { useAutoUpdateState } from '@pdg/react-hook';
import { FormIcon } from '../../FormCommon';
import PrivateYearPicker from '../PrivateYearPicker';
import { FormMonthPickerBaseValue } from '../../FormItemCustom';
import PrivateMonthPickerMonthList from './PrivateMonthPickerMonthList';
import {
  StyledContainer,
  StyledIconButton,
  StyledYearMonth,
  StyledYearMonthError,
  TitleContainer,
} from './PrivateMonthPicker.style';

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

  const nowValue = useMemo(() => dateToValue(dayjs()), [dateToValue]);
  const nowYm = useMemo(() => valueToYm(nowValue), [nowValue, valueToYm]);

  const minValue = useMemo(() => initMinValue || PrivateMonthPickerDefaultProps.minValue, [initMinValue]);
  const maxValue = useMemo(() => initMaxValue || PrivateMonthPickerDefaultProps.maxValue, [initMaxValue]);

  const minAvailableValue = useMemo(() => {
    if (disablePast) {
      const minYm = valueToYm(minValue);
      return nowYm > minYm ? nowValue : minValue;
    } else {
      return minValue;
    }
  }, [disablePast, valueToYm, minValue, nowYm, nowValue]);
  const minAvailableYm = useMemo(() => valueToYm(minAvailableValue), [minAvailableValue, valueToYm]);

  const maxAvailableValue = useMemo(() => {
    if (disableFuture) {
      const maxYm = valueToYm(maxValue);
      return nowYm < maxYm ? nowValue : maxValue;
    } else {
      return maxValue;
    }
  }, [disableFuture, valueToYm, maxValue, nowYm, nowValue]);
  const maxAvailableYm = useMemo(() => valueToYm(maxAvailableValue), [maxAvailableValue, valueToYm]);

  const displayValue = useMemo(() => {
    if (value && !Number.isNaN(value.year) && !Number.isNaN(value.month)) {
      return value;
    } else {
      if (nowYm < minAvailableYm) {
        return minAvailableValue;
      } else if (nowYm > maxAvailableYm) {
        return maxAvailableValue;
      } else {
        return nowValue;
      }
    }
  }, [maxAvailableValue, maxAvailableYm, minAvailableValue, minAvailableYm, nowValue, nowYm, value]);
  const displayValueDate = useMemo(() => valueToDate(displayValue), [displayValue, valueToDate]);
  const displayValueYm = useMemo(() => displayValue.year * 100 + displayValue.month, [displayValue]);
  const displayValueError = useMemo(
    () => displayValueYm < minAvailableYm || displayValueYm > maxAvailableYm,
    [displayValueYm, maxAvailableYm, minAvailableYm]
  );

  const prevBtnDisabled = useMemo(() => displayValueYm <= minAvailableYm, [displayValueYm, minAvailableYm]);
  const nextBtnDisabled = useMemo(() => displayValueYm >= maxAvailableYm, [displayValueYm, maxAvailableYm]);

  const selectFromYear = useMemo(() => (selectFromValue ? selectFromValue.year : undefined), [selectFromValue]);
  const selectToYear = useMemo(() => (selectToValue ? selectToValue.year : undefined), [selectToValue]);

  // Event Handler -----------------------------------------------------------------------------------------------------

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
    [displayValue, maxAvailableValue, maxAvailableYm, minAvailableValue, minAvailableYm, onChange, setValue, valueToYm]
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
  }, [dateToValue, displayValueDate, onChange, setValue]);

  const handleNextClick = useCallback(() => {
    const newValue = dateToValue(displayValueDate.add(1, 'months'));
    setValue(newValue);
    onChange(newValue, false);
  }, [dateToValue, displayValueDate, onChange, setValue]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <StyledContainer className='PrivateMonthPicker'>
      <TitleContainer>
        <StyledIconButton disabled={prevBtnDisabled} onClick={handlePrevClick}>
          <FormIcon>KeyboardArrowLeft</FormIcon>
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
          <FormIcon>KeyboardArrowRight</FormIcon>
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

PrivateMonthPicker.displayName = 'PrivateMonthPicker';
PrivateMonthPicker.defaultProps = PrivateMonthPickerDefaultProps;

export default PrivateMonthPicker;
