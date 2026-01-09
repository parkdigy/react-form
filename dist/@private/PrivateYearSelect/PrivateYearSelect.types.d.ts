import { type PFormAvailableDate } from '../@types';
export interface PrivateYearSelectProps {
    selectYear: number | null;
    activeYear: number;
    availableDate: PFormAvailableDate;
    onSelect: (year: number) => void;
}
