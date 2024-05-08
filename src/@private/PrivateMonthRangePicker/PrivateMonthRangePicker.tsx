import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthRangePickerProps as Props,
  PrivateMonthRangePickerValue,
  PrivateMonthRangePickerSelectType,
} from './PrivateMonthRangePicker.types';
import { FormMonthPickerBaseValue } from '../../FormItemCustom';
import { Grid } from '@mui/material';
import PrivateMonthPicker, { PrivateMonthPickerBaseValue } from '../PrivateMonthPicker';
import dayjs, { Dayjs } from 'dayjs';
import { StyledActionButton, StyledActionContainer, StyledDiv } from './PrivateMonthRangePicker.style';

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
  onChange,
}) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const nowDate = useMemo(() => dayjs(), []);
  const nowValue = useMemo(() => dateToValue(nowDate), [nowDate]);
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

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getFinalValue = useCallback(
    (v: PrivateMonthRangePickerValue, selectType: PrivateMonthRangePickerSelectType) => {
      const finalValue: PrivateMonthRangePickerValue = [v[0], v[1]];
      if (finalValue[0]) {
        const startYm = valueToYm(finalValue[0]);
        if (startYm < minAvailableYm) {
          finalValue[0] = minAvailableValue;
        } else if (startYm > maxAvailableYm) {
          finalValue[0] = maxAvailableValue;
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
        if (endYm < minAvailableYm) {
          finalValue[1] = minAvailableValue;
        } else if (endYm > maxAvailableYm) {
          finalValue[1] = maxAvailableValue;
        }
      }
      return finalValue;
    },
    [maxAvailableValue, maxAvailableYm, minAvailableValue, minAvailableYm]
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
      if (strict && (fromYm < minAvailableYm || toYm > maxAvailableYm)) {
        return undefined;
      } else if (
        !strict &&
        ((fromYm < minAvailableYm && toYm < minAvailableYm) || (fromYm > maxAvailableYm && toYm > maxAvailableYm))
      ) {
        return undefined;
      } else {
        return (
          <StyledActionButton
            variant='text'
            onClick={() => onChange(getFinalValue([fromValue, toValue], 'end'), 'end', true)}
          >
            {label}
          </StyledActionButton>
        );
      }
    },
    [dateToValue, getFinalValue, maxAvailableYm, minAvailableYm, onChange, valueToYm]
  );

  const actionButtons = useMemo(() => {
    return (
      <StyledActionContainer>
        {getActionButton(dayjs(nowDate).subtract(2, 'months'), nowDate, '최근 3개월', true)}
        {getActionButton(dayjs(nowDate).subtract(5, 'months'), nowDate, '최근 6개월', true)}
        {getActionButton(dayjs(nowDate).subtract(11, 'months'), nowDate, '최근 12개월', true)}
        {getActionButton(dayjs(nowDate).subtract(23, 'months'), nowDate, '최근 24개월', true)}
        {getActionButton(
          dayjs(nowDate).subtract(2, 'years').set('months', 0),
          dayjs(nowDate).subtract(2, 'years').set('months', 11),
          '재작년'
        )}
        {getActionButton(
          dayjs(nowDate).subtract(1, 'years').set('months', 0),
          dayjs(nowDate).subtract(1, 'years').set('months', 11),
          '작년'
        )}
        {getActionButton(dayjs(nowDate).set('months', 0), dayjs(nowDate).set('months', 11), '올해')}
      </StyledActionContainer>
    );
  }, [getActionButton, nowDate]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleStartMonthChange = useCallback(
    (v: PrivateMonthPickerBaseValue, isMonthSelect: boolean) => {
      const finalValue: PrivateMonthRangePickerValue = getFinalValue([v, value[1]], 'start');
      onChange(finalValue, 'start', isMonthSelect);
    },
    [getFinalValue, onChange, value]
  );

  const handleEndMonthChange = useCallback(
    (v: PrivateMonthPickerBaseValue, isMonthSelect: boolean) => {
      const finalValue: PrivateMonthRangePickerValue = getFinalValue([value[0], v], 'end');
      onChange(finalValue, 'end', isMonthSelect);
    },
    [getFinalValue, onChange, value]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div>
      <Grid container className='PrivateMonthRangePicker'>
        <Grid item>
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
        <Grid item>
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

PrivateMonthRangePicker.displayName = 'PrivateMonthRangePicker';

export default PrivateMonthRangePicker;

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

const valueToYm = (v: FormMonthPickerBaseValue) => v.year * 100 + v.month;

const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
