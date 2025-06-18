import { Dayjs } from 'dayjs';

export type PFormAvailableDateType = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';

export interface PFormAvailableDateItem {
  date: Dayjs;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export type PFormAvailableDate = [PFormAvailableDateItem | null, PFormAvailableDateItem | null];
