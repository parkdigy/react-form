import { PrivateMonthPickerBaseValue } from './PrivateMonthPicker.types';
import dayjs, { Dayjs } from 'dayjs';
import { FormMonthPickerBaseValue } from '../../FormItemCustom';

export const valueToDate = (v: PrivateMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`);

export const valueToYm = (v: FormMonthPickerBaseValue) => v.year * 100 + v.month;

export const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
