import React, { useCallback, useMemo } from 'react';
import { PrivateMonthPickerMonthListProps as Props } from './PrivateMonthPickerMonthList.types';
import PrivateMonthPickerMonth from '../PrivateMonthPickerMonth';
import { PFormMonthPickerBaseValue } from '../../../PFormItemCustom';
import dayjs, { Dayjs } from 'dayjs';
import { StyledContainer } from './PrivateMonthPickerMonthList.style.private';

const PrivateMonthPickerMonthList: React.FC<Props> = ({
  value,
  defaultValue: initDefaultValue,
  minAvailableValue,
  maxAvailableValue,
  disablePast,
  disableFuture,
  selectFromValue,
  selectToValue,
  onChange,
}) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const dateInfo = useMemo(() => {
    const nowDate = dayjs();
    const nowValue = dateToValue(nowDate);
    const nowYm = valueToYm(nowValue);
    const availableYm = {
      min: valueToYm(minAvailableValue),
      max: valueToYm(maxAvailableValue),
    };
    const defaultValue = initDefaultValue
      ? initDefaultValue
      : nowYm < availableYm.min
        ? minAvailableValue
        : nowYm > availableYm.max
          ? maxAvailableValue
          : nowValue;

    return { nowDate, nowValue, nowYm, availableYm, defaultValue };
  }, [initDefaultValue, maxAvailableValue, minAvailableValue]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const currentYear = value ? value.year : dateInfo.defaultValue.year;

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const months = useMemo(() => {
    const newMonths: {
      month: number;
      range?: boolean;
      isDefault?: boolean;
      active?: boolean;
      selected?: boolean;
      selectedStart?: boolean;
      selectedEnd?: boolean;
      selectedTemp?: boolean;
      disabled?: boolean;
    }[] = [];
    const range = !!selectFromValue || !!selectToValue;
    const startYm = selectFromValue ? valueToYm(selectFromValue) : value ? valueToYm(value) : 0;
    const endYm = selectToValue ? valueToYm(selectToValue) : value ? valueToYm(value) : 0;

    for (let i = 1; i <= 12; i += 1) {
      const ym = currentYear * 100 + i;

      newMonths.push({
        month: i,
        range,
        isDefault: !value && i === dateInfo.defaultValue.month,
        active: (!!selectFromValue || !!selectToValue) && !!value && ym === valueToYm(value),
        selected: !!value && ym >= startYm && ym <= endYm,
        selectedStart: !!value && ym === startYm,
        selectedEnd: !!value && ym === endYm,
        disabled:
          ym < dateInfo.availableYm.min ||
          ym > dateInfo.availableYm.max ||
          (disablePast && ym < dateInfo.nowYm) ||
          (disableFuture && ym > dateInfo.nowYm),
      });
    }
    return newMonths;
  }, [
    selectFromValue,
    selectToValue,
    value,
    currentYear,
    dateInfo.defaultValue.month,
    dateInfo.availableYm.min,
    dateInfo.availableYm.max,
    dateInfo.nowYm,
    disablePast,
    disableFuture,
  ]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleMonthChange = useCallback(
    (month: number) => {
      onChange({ year: currentYear, month });
    },
    [currentYear, onChange]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledContainer className='PrivateMonthPickerMonthList' container>
      {months.map((info) => (
        <PrivateMonthPickerMonth
          key={info.month}
          month={info.month}
          range={info.range}
          isDefault={info.isDefault}
          active={info.active}
          selected={info.selected}
          selectedStart={info.selectedStart}
          selectedEnd={info.selectedEnd}
          selectedTemp={info.selectedTemp}
          disabled={info.disabled}
          onClick={handleMonthChange}
        />
      ))}
    </StyledContainer>
  );
};

export default PrivateMonthPickerMonthList;

/********************************************************************************************************************
 * Function
 * ******************************************************************************************************************/

const valueToYm = (v: PFormMonthPickerBaseValue) => v.year * 100 + v.month;

const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
