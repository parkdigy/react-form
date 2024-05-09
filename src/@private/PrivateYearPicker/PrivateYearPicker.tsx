import React, { useCallback, useMemo } from 'react';
import {
  PrivateYearPickerProps as Props,
  PrivateYearPickerValue,
  PrivateYearPickerBaseValue,
} from './PrivateYearPicker.types';
import { useAutoUpdateState } from '@pdg/react-hook';
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
  onChange,
}) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useAutoUpdateState<PrivateYearPickerValue>(initValue);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const nowYear = useMemo(() => new Date().getFullYear(), []);

  const minAvailableYear = useMemo(() => {
    if (disablePast) {
      return nowYear > minYear ? nowYear : minYear;
    } else {
      return minYear;
    }
  }, [disablePast, minYear, nowYear]);

  const maxAvailableYear = useMemo(() => {
    if (disableFuture) {
      return nowYear < maxYear ? nowYear : maxYear;
    } else {
      return maxYear;
    }
  }, [disableFuture, maxYear, nowYear]);

  const displayYear = useMemo(() => {
    if (value) {
      return value;
    } else {
      let year = selectFromYear || selectToYear || nowYear;
      if (minAvailableYear > year) {
        year = minAvailableYear;
      } else if (maxAvailableYear < year) {
        year = maxAvailableYear;
      }
      return year;
    }
  }, [maxAvailableYear, minAvailableYear, nowYear, selectFromYear, selectToYear, value]);
  const displayError = useMemo(
    () => displayYear < minAvailableYear || displayYear > maxAvailableYear,
    [displayYear, minAvailableYear, maxAvailableYear]
  );

  const prevBtnDisabled = useMemo(() => displayYear <= minAvailableYear, [displayYear, minAvailableYear]);
  const nextBtnDisabled = useMemo(() => displayYear >= maxAvailableYear, [displayYear, maxAvailableYear]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleYearChange = useCallback(
    (v: PrivateYearPickerBaseValue) => {
      if (minAvailableYear && v < minAvailableYear) {
        setValue(minAvailableYear);
        onChange(minAvailableYear, true);
      } else if (maxAvailableYear && v > maxAvailableYear) {
        setValue(maxAvailableYear);
        onChange(maxAvailableYear, true);
      } else {
        setValue(v);
        onChange(v, true);
      }
    },
    [maxAvailableYear, minAvailableYear, onChange, setValue]
  );

  const handlePrevClick = useCallback(() => {
    if (displayYear) {
      const newValue = displayYear - 1;
      setValue(newValue);
      onChange(newValue, false);
    }
  }, [displayYear, onChange, setValue]);

  const handleNextClick = useCallback(() => {
    if (displayYear) {
      const newValue = displayYear + 1;
      setValue(newValue);
      onChange(newValue, false);
    }
  }, [displayYear, onChange, setValue]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='PrivateYearPicker'>
      {!hideHeader && (
        <StyledTitleContainer>
          <StyledIconButton disabled={prevBtnDisabled} onClick={handlePrevClick}>
            <PdgIcon>KeyboardArrowLeft</PdgIcon>
          </StyledIconButton>
          {displayError ? (
            <StyledYearMonthError>{displayYear}년</StyledYearMonthError>
          ) : (
            <StyledYearMonth>{displayYear}년</StyledYearMonth>
          )}
          <StyledIconButton disabled={nextBtnDisabled} onClick={handleNextClick}>
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
