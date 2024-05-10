import React, { useCallback, useMemo } from 'react';
import {
  PrivateYearPickerProps as Props,
  PrivateYearPickerValue,
  PrivateYearPickerBaseValue,
} from './PrivateYearPicker.types';
import { useAutoUpdateLayoutRef, useAutoUpdateState } from '@pdg/react-hook';
import PrivateYearPickerYearList from './PrivateYearPickerYearList';
import {
  StyledIconButton,
  StyledTitleContainer,
  StyledYearMonth,
  StyledYearMonthError,
} from './PrivateYearPicker.style.private';
import { PdgIcon } from '@pdg/react-component';

const DEFAULT_MIN_YEAR = 2020;
const DEFAULT_MAX_YEAR = 2050;

const PrivateYearPicker: React.FC<Props> = ({
  value: initValue = null,
  minYear = DEFAULT_MIN_YEAR,
  maxYear = DEFAULT_MAX_YEAR,
  disablePast,
  disableFuture,
  hideHeader,
  selectFromYear,
  selectToYear,
  onChange: initOnChange,
}) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onChangeRef = useAutoUpdateLayoutRef(initOnChange);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useAutoUpdateState<PrivateYearPickerValue>(initValue);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const yearInfo = useMemo(() => {
    const nowYear = new Date().getFullYear();

    let minAvailableYear: number;
    if (disablePast) {
      minAvailableYear = nowYear > minYear ? nowYear : minYear;
    } else {
      minAvailableYear = minYear;
    }

    let maxAvailableYear: number;
    if (disableFuture) {
      maxAvailableYear = nowYear < maxYear ? nowYear : maxYear;
    } else {
      maxAvailableYear = maxYear;
    }

    return { now: nowYear, available: { min: minAvailableYear, max: maxAvailableYear } };
  }, [disableFuture, disablePast, maxYear, minYear]);

  const displayInfo = useMemo(() => {
    let displayYear: number;
    if (value) {
      displayYear = value;
    } else {
      let year = selectFromYear || selectToYear || yearInfo.now;
      if (yearInfo.available.min > year) {
        year = yearInfo.available.min;
      } else if (yearInfo.available.max < year) {
        year = yearInfo.available.max;
      }
      displayYear = year;
    }

    const displayError = displayYear < yearInfo.available.min || displayYear > yearInfo.available.max;

    return { year: displayYear, error: displayError };
  }, [selectFromYear, selectToYear, value, yearInfo]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleYearChange = useCallback(
    (v: PrivateYearPickerBaseValue) => {
      if (yearInfo.available.min && v < yearInfo.available.min) {
        setValue(yearInfo.available.min);
        onChangeRef.current(yearInfo.available.min, true);
      } else if (yearInfo.available.max && v > yearInfo.available.max) {
        setValue(yearInfo.available.max);
        onChangeRef.current(yearInfo.available.max, true);
      } else {
        setValue(v);
        onChangeRef.current(v, true);
      }
    },
    [yearInfo, setValue, onChangeRef]
  );

  const handlePrevClick = useCallback(() => {
    if (displayInfo.year) {
      const newValue = displayInfo.year - 1;
      setValue(newValue);
      onChangeRef.current(newValue, false);
    }
  }, [displayInfo, onChangeRef, setValue]);

  const handleNextClick = useCallback(() => {
    if (displayInfo.year) {
      const newValue = displayInfo.year + 1;
      setValue(newValue);
      onChangeRef.current(newValue, false);
    }
  }, [displayInfo, onChangeRef, setValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='PrivateYearPicker'>
      {!hideHeader && (
        <StyledTitleContainer>
          <StyledIconButton disabled={displayInfo.year <= yearInfo.available.min} onClick={handlePrevClick}>
            <PdgIcon>KeyboardArrowLeft</PdgIcon>
          </StyledIconButton>
          {displayInfo.error ? (
            <StyledYearMonthError>{displayInfo.year}년</StyledYearMonthError>
          ) : (
            <StyledYearMonth>{displayInfo.year}년</StyledYearMonth>
          )}
          <StyledIconButton disabled={displayInfo.year >= yearInfo.available.max} onClick={handleNextClick}>
            <PdgIcon>KeyboardArrowRight</PdgIcon>
          </StyledIconButton>
        </StyledTitleContainer>
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
      </div>
    </div>
  );
};

export default PrivateYearPicker;
