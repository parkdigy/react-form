import { type PFormAvailableDate } from '../@types';
export interface PrivateMonthSelectProps {
    year: number;
    selectYear: number | null;
    selectMonth: number | null;
    activeMonth: number;
    availableDate: PFormAvailableDate;
    onSelect: (month: number) => void;
}
