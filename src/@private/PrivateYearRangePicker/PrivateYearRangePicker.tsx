import React, { useCallback, useMemo } from 'react';
import {
  PrivateYearRangePickerProps as Props,
  PrivateYearRangePickerDefaultProps,
  PrivateYearRangePickerValue,
} from './PrivateYearRangePicker.types';
import dayjs from 'dayjs';
import './PrivateYearRangePicker.scss';
import { useAutoUpdateState } from '@pdg/react-hook';
import PrivateYearRangePickerYearList from './PrivateYearRangePickerYearList';

const DEFAULT_VALUE = [null, null];

const PrivateYearRangePicker: React.FC<Props> = ({
  selectType,
  value: initValue,
  minYear: initMinYear,
  maxYear: initMaxYear,
  disablePast,
  disableFuture,
  hideHeader,
  onChange,
}) => {
  // State -------------------------------------------------------------------------------------------------------------

  const [value, setValue] = useAutoUpdateState<PrivateYearRangePickerValue>(initValue || DEFAULT_VALUE);

  // Memo --------------------------------------------------------------------------------------------------------------

  const minYear = useMemo(
    () => (initMinYear === undefined ? PrivateYearRangePickerDefaultProps.minYear : initMinYear),
    [initMinYear]
  );
  const maxYear = useMemo(
    () => (initMaxYear === undefined ? PrivateYearRangePickerDefaultProps.maxYear : initMaxYear),
    [initMaxYear]
  );

  const displayValue = useMemo(() => {
    let defaultYear = dayjs().year();
    if (minYear > defaultYear) {
      defaultYear = minYear;
    } else if (maxYear < defaultYear) {
      defaultYear = maxYear;
    }

    if (value) {
      return [value[0] || defaultYear, value[1] || defaultYear];
    } else {
      return [defaultYear, defaultYear];
    }
  }, [maxYear, minYear, value]);

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleYearChange = useCallback(
    (valueYear: number) => {
      const newValue: PrivateYearRangePickerValue = [...value];

      if (minYear && valueYear < minYear) {
        valueYear = minYear;
      } else if (maxYear && valueYear > maxYear) {
        valueYear = maxYear;
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
    [selectType, value, minYear, maxYear, setValue, onChange]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <div className='PrivateYearRangePicker'>
      {!hideHeader && (
        <div className='title-wrap'>
          <div className='year-month-wrap'>
            <div className='year'>
              {displayValue[0]}년 ~ {displayValue[1]}년
            </div>
          </div>
        </div>
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
    </div>
  );
};

PrivateYearRangePicker.displayName = 'PrivateYearRangePicker';
PrivateYearRangePicker.defaultProps = PrivateYearRangePickerDefaultProps;

export default PrivateYearRangePicker;
