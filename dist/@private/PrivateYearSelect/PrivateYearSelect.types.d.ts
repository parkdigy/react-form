import { FormAvailableDate } from '../@types';
export interface PrivateYearSelectProps {
    selectYear: number | null;
    activeYear: number;
    availableDate: FormAvailableDate;
    onSelect(year: number): void;
}
export declare const PrivateYearSelectDefaultProps: {};
