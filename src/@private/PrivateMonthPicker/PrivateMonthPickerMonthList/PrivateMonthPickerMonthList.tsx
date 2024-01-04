import React, { useCallback, useMemo } from 'react';
import {
  PrivateMonthPickerMonthListProps as Props,
  PrivateMonthPickerMonthListDefaultProps,
} from './PrivateMonthPickerMonthList.types';
import PrivateMonthPickerMonth from '../PrivateMonthPickerMonth';
import { FormMonthPickerBaseValue } from '../../../FormItemCustom';
import dayjs, { Dayjs } from 'dayjs';
import { StyledContainer } from './PrivateMonthPickerMonthList.style';

const PrivateMonthPickerMonthList: React.FC<Props> = ({
  value,
  minAvailableValue,
  maxAvailableValue,
  disablePast,
  disableFuture,
  selectFromValue,
  selectToValue,
  onChange,
}) => {
  // Function ----------------------------------------------------------------------------------------------------------

  const valueToYm = useCallback((v: FormMonthPickerBaseValue) => v.year * 100 + v.month, []);
  const dateToValue = useCallback((v: Dayjs) => ({ year: v.year(), month: v.month() + 1 }), []);

  // Memo --------------------------------------------------------------------------------------------------------------

  const nowDate = useMemo(() => dayjs(), []);
  const nowValue = useMemo(() => dateToValue(nowDate), [dateToValue, nowDate]);
  const nowYm = useMemo(() => Number(nowDate.format('YYYYMM')), [nowDate]);

  const minAvailableYm = useMemo(() => valueToYm(minAvailableValue), [minAvailableValue, valueToYm]);
  const maxAvailableYm = useMemo(() => valueToYm(maxAvailableValue), [maxAvailableValue, valueToYm]);

  const defaultValue = useMemo(() => {
    if (nowYm < minAvailableYm) {
      return minAvailableValue;
    } else if (nowYm > maxAvailableYm) {
      return maxAvailableValue;
    } else {
      return nowValue;
    }
  }, [nowYm, minAvailableYm, maxAvailableYm, minAvailableValue, maxAvailableValue, nowValue]);

  const defaultYear = useMemo(() => defaultValue.year, [defaultValue]);
  const defaultMonth = useMemo(() => defaultValue.month, [defaultValue]);

  const currentYear = useMemo(() => (value ? value.year : defaultYear), [value, defaultYear]);

  const months = useMemo(() => {
    const newMonths: {
      month: number;
      isDefault?: boolean;
      active?: boolean;
      selected?: boolean;
      selectedStart?: boolean;
      selectedEnd?: boolean;
      selectedTemp?: boolean;
      disabled?: boolean;
    }[] = [];
    const startYm = selectFromValue ? valueToYm(selectFromValue) : value ? valueToYm(value) : 0;
    const endYm = selectToValue ? valueToYm(selectToValue) : value ? valueToYm(value) : 0;

    for (let i = 1; i <= 12; i += 1) {
      const ym = currentYear * 100 + i;

      newMonths.push({
        month: i,
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
    valueToYm,
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

  const handleMonthChange = useCallback(
    (month: number) => {
      onChange({ year: currentYear, month });
    },
    [currentYear, onChange]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <StyledContainer className='PrivateMonthPickerMonthList' container>
      {months.map((info) => (
        <PrivateMonthPickerMonth
          key={info.month}
          month={info.month}
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

PrivateMonthPickerMonthList.displayName = 'PrivateMonthPickerMonthList';
PrivateMonthPickerMonthList.defaultProps = PrivateMonthPickerMonthListDefaultProps;

export default PrivateMonthPickerMonthList;
