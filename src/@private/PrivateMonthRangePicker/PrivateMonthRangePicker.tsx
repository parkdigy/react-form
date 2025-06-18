import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthRangePickerProps as Props,
  PrivateMonthRangePickerValue,
  PrivateMonthRangePickerSelectType,
} from './PrivateMonthRangePicker.types';
import { PFormMonthPickerBaseValue } from '../../PFormItemCustom';
import { Grid } from '@mui/material';
import PrivateMonthPicker, { PrivateMonthPickerBaseValue } from '../PrivateMonthPicker';
import dayjs, { Dayjs } from 'dayjs';
import { StyledActionButton, StyledActionContainer, StyledDiv } from './PrivateMonthRangePicker.style.private';
import { useAutoUpdateLayoutRef } from '@pdg/react-hook';

const DEFAULT_MIN_VALUE = {
  year: 2020,
  month: 1,
};
const DEFAULT_MAX_VALUE = {
  year: 2050,
  month: 12,
};

const PrivateMonthRangePicker: React.FC<Props> = ({
  value,
  minValue = DEFAULT_MIN_VALUE,
  maxValue = DEFAULT_MAX_VALUE,
  disablePast,
  disableFuture,
  onChange: initOnChange,
}) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onChangeRef = useAutoUpdateLayoutRef(initOnChange);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const dateInfo = useMemo(() => {
    const nowDate = dayjs();
    const nowValue = dateToValue(nowDate);
    const nowYm = valueToYm(nowValue);

    let minAvailableValue: { year: number; month: number };
    if (disablePast) {
      const minYm = valueToYm(minValue);
      minAvailableValue = nowYm > minYm ? nowValue : minValue;
    } else {
      minAvailableValue = minValue;
    }
    const minAvailableYm = valueToYm(minAvailableValue);

    let maxAvailableValue: { year: number; month: number };
    if (disableFuture) {
      const maxYm = valueToYm(maxValue);
      maxAvailableValue = nowYm < maxYm ? nowValue : maxValue;
    } else {
      maxAvailableValue = maxValue;
    }

    const maxAvailableYm = valueToYm(maxAvailableValue);

    return {
      now: {
        date: nowDate,
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

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (v: PrivateMonthRangePickerValue, selectType: PrivateMonthRangePickerSelectType) => {
      const finalValue: PrivateMonthRangePickerValue = [v[0], v[1]];
      if (finalValue[0]) {
        const startYm = valueToYm(finalValue[0]);
        if (startYm < dateInfo.available.min.ym) {
          finalValue[0] = dateInfo.available.min.value;
        } else if (startYm > dateInfo.available.max.ym) {
          finalValue[0] = dateInfo.available.max.value;
        }
      }
      if (finalValue[1]) {
        let endYm = valueToYm(finalValue[1]);
        if (finalValue[0]) {
          if (valueToYm(finalValue[0]) > endYm) {
            if (selectType === 'start') {
              finalValue[1] = finalValue[0];
            } else {
              finalValue[0] = finalValue[1];
            }
          }
        }
        endYm = valueToYm(finalValue[1]);
        if (endYm < dateInfo.available.min.ym) {
          finalValue[1] = dateInfo.available.min.value;
        } else if (endYm > dateInfo.available.max.ym) {
          finalValue[1] = dateInfo.available.max.value;
        }
      }
      return finalValue;
    },
    [dateInfo]
  );

  /********************************************************************************************************************
   * action button
   * ******************************************************************************************************************/

  const getActionButton = useCallback(
    (fromDate: Dayjs, toDate: Dayjs, label: string, strict?: boolean) => {
      const fromValue = dateToValue(fromDate);
      const fromYm = valueToYm(fromValue);
      const toValue = dateToValue(toDate);
      const toYm = valueToYm(toValue);
      if (strict && (fromYm < dateInfo.available.min.ym || toYm > dateInfo.available.max.ym)) {
        return undefined;
      } else if (
        !strict &&
        ((fromYm < dateInfo.available.min.ym && toYm < dateInfo.available.min.ym) ||
          (fromYm > dateInfo.available.max.ym && toYm > dateInfo.available.max.ym))
      ) {
        return undefined;
      } else {
        return (
          <StyledActionButton
            variant='text'
            onClick={() => onChangeRef.current(getFinalValue([fromValue, toValue], 'end'), 'end', true)}
          >
            {label}
          </StyledActionButton>
        );
      }
    },
    [getFinalValue, dateInfo, onChangeRef]
  );

  const actionButtons = useMemo(() => {
    return (
      <StyledActionContainer>
        {getActionButton(dayjs(dateInfo.now.date).subtract(2, 'months'), dateInfo.now.date, '최근 3개월', true)}
        {getActionButton(dayjs(dateInfo.now.date).subtract(5, 'months'), dateInfo.now.date, '최근 6개월', true)}
        {getActionButton(dayjs(dateInfo.now.date).subtract(11, 'months'), dateInfo.now.date, '최근 12개월', true)}
        {getActionButton(dayjs(dateInfo.now.date).subtract(23, 'months'), dateInfo.now.date, '최근 24개월', true)}
        {getActionButton(
          dayjs(dateInfo.now.date).subtract(2, 'years').set('months', 0),
          dayjs(dateInfo.now.date).subtract(2, 'years').set('months', 11),
          '재작년'
        )}
        {getActionButton(
          dayjs(dateInfo.now.date).subtract(1, 'years').set('months', 0),
          dayjs(dateInfo.now.date).subtract(1, 'years').set('months', 11),
          '작년'
        )}
        {getActionButton(dayjs(dateInfo.now.date).set('months', 0), dayjs(dateInfo.now.date).set('months', 11), '올해')}
      </StyledActionContainer>
    );
  }, [getActionButton, dateInfo]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleStartMonthChange = useCallback(
    (v: PrivateMonthPickerBaseValue, isMonthSelect: boolean) => {
      const finalValue: PrivateMonthRangePickerValue = getFinalValue([v, value[1]], 'start');
      onChangeRef.current(finalValue, 'start', isMonthSelect);
    },
    [getFinalValue, onChangeRef, value]
  );

  const handleEndMonthChange = useCallback(
    (v: PrivateMonthPickerBaseValue, isMonthSelect: boolean) => {
      const finalValue: PrivateMonthRangePickerValue = getFinalValue([value[0], v], 'end');
      onChangeRef.current(finalValue, 'end', isMonthSelect);
    },
    [getFinalValue, onChangeRef, value]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div>
      <Grid container className='PrivateMonthRangePicker'>
        <Grid>
          <PrivateMonthPicker
            value={value[0]}
            selectToValue={value[1]}
            minValue={minValue}
            maxValue={maxValue}
            disablePast={disablePast}
            disableFuture={disableFuture}
            onChange={handleStartMonthChange}
          />
        </Grid>
        <StyledDiv>~</StyledDiv>
        <Grid>
          <PrivateMonthPicker
            value={value[1]}
            selectFromValue={value[0]}
            minValue={minValue}
            maxValue={maxValue}
            disablePast={disablePast}
            disableFuture={disableFuture}
            onChange={handleEndMonthChange}
          />
        </Grid>
      </Grid>
      {actionButtons}
    </div>
  );
};

export default PrivateMonthRangePicker;

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

const valueToYm = (v: PFormMonthPickerBaseValue) => v.year * 100 + v.month;

const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
