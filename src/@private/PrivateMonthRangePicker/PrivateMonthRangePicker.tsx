import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthRangePickerProps as Props,
  PrivateMonthRangePickerDefaultProps,
  PrivateMonthRangePickerValue,
  PrivateMonthRangePickerSelectType,
} from './PrivateMonthRangePicker.types';
import { FormMonthPickerBaseValue } from '../../FormItemCustom';
import { Grid } from '@mui/material';
import PrivateMonthPicker, { PrivateMonthPickerBaseValue } from '../PrivateMonthPicker';
import dayjs, { Dayjs } from 'dayjs';
import { StyledDiv } from './PrivateMonthRangePicker.style';

const PrivateMonthRangePicker: React.FC<Props> = ({
  value,
  minValue: initMinValue,
  maxValue: initMaxValue,
  disablePast,
  disableFuture,
  onChange,
}) => {
  // Function ----------------------------------------------------------------------------------------------------------

  const valueToYm = useCallback((v: FormMonthPickerBaseValue) => v.year * 100 + v.month, []);
  const dateToValue = useCallback((v: Dayjs) => ({ year: v.year(), month: v.month() + 1 }), []);

  // Memo --------------------------------------------------------------------------------------------------------------

  const nowValue = useMemo(() => dateToValue(dayjs()), [dateToValue]);
  const nowYm = useMemo(() => valueToYm(nowValue), [nowValue, valueToYm]);

  const minValue = useMemo(() => initMinValue || PrivateMonthRangePickerDefaultProps.minValue, [initMinValue]);
  const maxValue = useMemo(() => initMaxValue || PrivateMonthRangePickerDefaultProps.maxValue, [initMaxValue]);

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

  // Function ----------------------------------------------------------------------------------------------------------

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
    [maxAvailableValue, maxAvailableYm, minAvailableValue, minAvailableYm, valueToYm]
  );

  // Event Handler -----------------------------------------------------------------------------------------------------

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

  // Render ------------------------------------------------------------------------------------------------------------

  return (
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
  );
};

PrivateMonthRangePicker.displayName = 'PrivateMonthRangePicker';
PrivateMonthRangePicker.defaultProps = PrivateMonthRangePickerDefaultProps;

export default PrivateMonthRangePicker;
