import React, { useCallback, useMemo } from 'react';
import { PrivateYearRangePickerProps as Props, PrivateYearRangePickerValue } from './PrivateYearRangePicker.types';
import { useAutoUpdateState } from '@pdg/react-hook';
import PrivateYearRangePickerYearList from './PrivateYearRangePickerYearList';
import {
  StyledActionButton,
  StyledActionContainer,
  StyledTitleContainer,
  StyledTitleGap,
  StyledYear,
  StyledYearError,
} from './PrivateYearRangePicker.style.private';

const DEFAULT_MIN_YEAR = 2020;
const DEFAULT_MAX_YEAR = 2050;
const DEFAULT_VALUE = [null, null] as PrivateYearRangePickerValue;

const PrivateYearRangePicker: React.FC<Props> = ({
  selectType,
  value: initValue = DEFAULT_VALUE,
  minYear = DEFAULT_MIN_YEAR,
  maxYear = DEFAULT_MAX_YEAR,
  disablePast,
  disableFuture,
  hideHeader,
  onChange,
}) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [value, setValue] = useAutoUpdateState<PrivateYearRangePickerValue>(initValue);

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
    let displayValue: [number, number];
    let defaultYear = yearInfo.now;
    if (yearInfo.available.min > defaultYear) {
      defaultYear = minYear;
    } else if (yearInfo.available.max < defaultYear) {
      defaultYear = yearInfo.available.max;
    }

    if (value) {
      displayValue = [value[0] || value[1] || defaultYear, value[1] || value[0] || defaultYear];
    } else {
      displayValue = [defaultYear, defaultYear];
    }

    const displayValueError: [boolean, boolean] = [
      displayValue[0] < yearInfo.available.min || displayValue[0] > yearInfo.available.max,
      displayValue[1] < yearInfo.available.min || displayValue[1] > yearInfo.available.max,
    ];

    return { value: displayValue, error: displayValueError };
  }, [minYear, value, yearInfo]);

  /********************************************************************************************************************
   * action button
   * ******************************************************************************************************************/

  const getActionButton = useCallback(
    (fromYear: number, toYear: number, label: string) => {
      if (fromYear < yearInfo.available.min || toYear > yearInfo.available.max) {
        return undefined;
      } else {
        const newValue: PrivateYearRangePickerValue = [
          Math.max(fromYear, yearInfo.available.min),
          Math.min(toYear, yearInfo.available.max),
        ];
        return (
          <StyledActionButton
            variant='text'
            onClick={() => {
              setValue(newValue);
              onChange(newValue, 'end');
            }}
          >
            {label}
          </StyledActionButton>
        );
      }
    },
    [yearInfo, onChange, setValue]
  );

  const actionButtons = useMemo(() => {
    return (
      <StyledActionContainer>
        {getActionButton(yearInfo.now - 2, yearInfo.now, '최근 3년')}
        {getActionButton(yearInfo.now - 4, yearInfo.now, '최근 5년')}
        {getActionButton(yearInfo.now - 9, yearInfo.now, '최근 10년')}
      </StyledActionContainer>
    );
  }, [getActionButton, yearInfo]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleYearChange = useCallback(
    (valueYear: number) => {
      const newValue: PrivateYearRangePickerValue = [...value];

      if (yearInfo.available.min && valueYear < yearInfo.available.min) {
        valueYear = yearInfo.available.min;
      } else if (yearInfo.available.max && valueYear > yearInfo.available.max) {
        valueYear = yearInfo.available.max;
      }

      if (selectType === 'start') {
        newValue[0] = valueYear;
      } else {
        newValue[1] = valueYear;
      }

      if (selectType === 'start' && newValue[1]) {
        if (newValue[1] < (newValue[0] || 0)) {
          newValue[1] = newValue[0];
        }
        onChange(newValue, selectType);
      } else if (selectType === 'end' && newValue[0]) {
        if (newValue[0] > (newValue[1] || 9999)) {
          newValue[0] = newValue[1];
          onChange(newValue, 'start');
        } else {
          onChange(newValue, selectType);
        }
      } else {
        onChange(newValue, selectType);
      }

      setValue(newValue);
    },
    [value, yearInfo, selectType, setValue, onChange]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='PrivateYearRangePicker'>
      {!hideHeader && (
        <StyledTitleContainer>
          {displayInfo.error[0] ? (
            <StyledYearError>{displayInfo.value[0]}년</StyledYearError>
          ) : (
            <StyledYear>{displayInfo.value[0]}년</StyledYear>
          )}
          <StyledTitleGap>~</StyledTitleGap>
          {displayInfo.error[1] ? (
            <StyledYearError>{displayInfo.value[1]}년</StyledYearError>
          ) : (
            <StyledYear>{displayInfo.value[1]}년</StyledYear>
          )}
        </StyledTitleContainer>
      )}
      <div>
        <PrivateYearRangePickerYearList
          value={value}
          selectType={selectType}
          displayValue={displayInfo.value}
          minYear={minYear}
          maxYear={maxYear}
          disablePast={disablePast}
          disableFuture={disableFuture}
          onChange={handleYearChange}
        />
      </div>
      {actionButtons}
    </div>
  );
};

export default PrivateYearRangePicker;
