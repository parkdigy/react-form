import { Dayjs } from 'dayjs';
export type FormAvailableDateType = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export interface FormAvailableDateItem {
    date: Dayjs;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}
export type FormAvailableDate = [FormAvailableDateItem | null, FormAvailableDateItem | null];
