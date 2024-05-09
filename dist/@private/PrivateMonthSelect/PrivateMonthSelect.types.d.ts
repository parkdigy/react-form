import { FormAvailableDate } from '../@types';
export interface PrivateMonthSelectProps {
    year: number;
    selectYear: number | null;
    selectMonth: number | null;
    activeMonth: number;
    availableDate: FormAvailableDate;
    onSelect(month: number): void;
}
