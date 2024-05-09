import React, { useCallback, useMemo } from 'react';
import { PrivateMonthPickerMonthListProps as Props } from './PrivateMonthPickerMonthList.types';
import PrivateMonthPickerMonth from '../PrivateMonthPickerMonth';
import { FormMonthPickerBaseValue } from '../../../FormItemCustom';
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

  const nowDate = useMemo(() => dayjs(), []);
  const nowValue = useMemo(() => dateToValue(nowDate), [nowDate]);
  const nowYm = useMemo(() => Number(nowDate.format('YYYYMM')), [nowDate]);

  const minAvailableYm = useMemo(() => valueToYm(minAvailableValue), [minAvailableValue]);
  const maxAvailableYm = useMemo(() => valueToYm(maxAvailableValue), [maxAvailableValue]);

  const defaultValue = useMemo(() => {
    if (initDefaultValue) {
      return initDefaultValue;
    } else if (nowYm < minAvailableYm) {
      return minAvailableValue;
    } else if (nowYm > maxAvailableYm) {
      return maxAvailableValue;
    } else {
      return nowValue;
    }
  }, [initDefaultValue, nowYm, minAvailableYm, maxAvailableYm, minAvailableValue, maxAvailableValue, nowValue]);

  const defaultYear = useMemo(() => defaultValue.year, [defaultValue.year]);
  const defaultMonth = useMemo(() => defaultValue.month, [defaultValue.month]);
  const currentYear = useMemo(() => (value ? value.year : defaultYear), [value, defaultYear]);

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
        isDefault: !value && i === defaultMonth,
        active: (!!selectFromValue || !!selectToValue) && !!value && ym === valueToYm(value),
        selected: !!value && ym >= startYm && ym <= endYm,
        selectedStart: !!value && ym === startYm,
        selectedEnd: !!value && ym === endYm,
        disabled:
          ym < minAvailableYm || ym > maxAvailableYm || (disablePast && ym < nowYm) || (disableFuture && ym > nowYm),
      });
    }
    return newMonths;
  }, [
    selectFromValue,
    value,
    selectToValue,
    currentYear,
    defaultMonth,
    minAvailableYm,
    maxAvailableYm,
    disablePast,
    nowYm,
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

const valueToYm = (v: FormMonthPickerBaseValue) => v.year * 100 + v.month;

const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
