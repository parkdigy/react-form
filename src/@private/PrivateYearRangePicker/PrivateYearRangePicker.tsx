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

  const displayValue = useMemo(() => {
    let defaultYear = nowYear;
    if (minAvailableYear > defaultYear) {
      defaultYear = minYear;
    } else if (maxAvailableYear < defaultYear) {
      defaultYear = maxAvailableYear;
    }

    if (value) {
      return [value[0] || value[1] || defaultYear, value[1] || value[0] || defaultYear];
    } else {
      return [defaultYear, defaultYear];
    }
  }, [maxAvailableYear, minAvailableYear, minYear, nowYear, value]);

  const displayValueError = useMemo(
    () => [
      displayValue[0] < minAvailableYear || displayValue[0] > maxAvailableYear,
      displayValue[1] < minAvailableYear || displayValue[1] > maxAvailableYear,
    ],
    [displayValue, minAvailableYear, maxAvailableYear]
  );

  /********************************************************************************************************************
   * action button
   * ******************************************************************************************************************/

  const getActionButton = useCallback(
    (fromYear: number, toYear: number, label: string) => {
      if (fromYear < minAvailableYear || toYear > maxAvailableYear) {
        return undefined;
      } else {
        const newValue: PrivateYearRangePickerValue = [
          Math.max(fromYear, minAvailableYear),
          Math.min(toYear, maxAvailableYear),
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
    [maxAvailableYear, minAvailableYear, onChange, setValue]
  );

  const actionButtons = useMemo(() => {
    return (
      <StyledActionContainer>
        {getActionButton(nowYear - 2, nowYear, '최근 3년')}
        {getActionButton(nowYear - 4, nowYear, '최근 5년')}
        {getActionButton(nowYear - 9, nowYear, '최근 10년')}
      </StyledActionContainer>
    );
  }, [getActionButton, nowYear]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleYearChange = useCallback(
    (valueYear: number) => {
      const newValue: PrivateYearRangePickerValue = [...value];

      if (minAvailableYear && valueYear < minAvailableYear) {
        valueYear = minAvailableYear;
      } else if (maxAvailableYear && valueYear > maxAvailableYear) {
        valueYear = maxAvailableYear;
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
    [value, minAvailableYear, maxAvailableYear, selectType, setValue, onChange]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='PrivateYearRangePicker'>
      {!hideHeader && (
        <StyledTitleContainer>
          {displayValueError[0] ? (
            <StyledYearError>{displayValue[0]}년</StyledYearError>
          ) : (
            <StyledYear>{displayValue[0]}년</StyledYear>
          )}
          <StyledTitleGap>~</StyledTitleGap>
          {displayValueError[1] ? (
            <StyledYearError>{displayValue[1]}년</StyledYearError>
          ) : (
            <StyledYear>{displayValue[1]}년</StyledYear>
          )}
        </StyledTitleContainer>
      )}
      <div>
        <PrivateYearRangePickerYearList
          value={value}
          selectType={selectType}
          displayValue={displayValue}
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
