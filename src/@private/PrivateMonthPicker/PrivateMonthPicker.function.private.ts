import { type PrivateMonthPickerBaseValue } from './PrivateMonthPicker.types';
import dayjs, { Dayjs } from 'dayjs';
import { type PFormMonthPickerBaseValue } from '../../PFormItemCustom';

export const valueToDate = (v: PrivateMonthPickerBaseValue) => dayjs(`${v.year}-${v.month}-01`);

export const valueToYm = (v: PFormMonthPickerBaseValue) => v.year * 100 + v.month;

export const dateToValue = (v: Dayjs) => ({ year: v.year(), month: v.month() + 1 });
