import { DateTimeValidationError, DateValidationError } from '@mui/x-date-pickers';
import { FormDateType, FormTimeType } from '../@types';
import { FormAvailableDate, FormAvailableDateType } from '../@private/@types';
import { Dayjs } from 'dayjs';
export declare function getDateValidationErrorText(error: DateValidationError | DateTimeValidationError): "형식이 일치하지 않습니다." | "선택할 수 없는 날짜입니다." | undefined;
export declare function getDateTimeFormat(type: FormDateType, time?: FormTimeType): string;
export declare function getDateTimeFormValueFormat(type: FormDateType, time?: FormTimeType): string;
/********************************************************************************************************************
 * getAvailableDateValFormat
 * ******************************************************************************************************************/
export declare function getAvailableDateValFormat(type: FormAvailableDateType): string;
export declare function getAvailableDateValFormat(type: FormDateType, time?: FormTimeType): string;
/********************************************************************************************************************
 * getDateValFormat
 * ******************************************************************************************************************/
export declare function getDateValFormat(type: FormDateType, time?: FormTimeType): string;
/********************************************************************************************************************
 * getAvailableDateType
 * ******************************************************************************************************************/
export declare function getAvailableDateType(type: FormDateType, time?: FormTimeType): FormAvailableDateType;
/********************************************************************************************************************
 * makeAvailableDate
 * ******************************************************************************************************************/
export declare function makeAvailableDate(minDate: Dayjs | undefined, maxDate: Dayjs | undefined, disablePast: boolean, disableFuture: boolean): FormAvailableDate;
/********************************************************************************************************************
 * getAvailableDate
 * ******************************************************************************************************************/
export declare function getAvailableDate(availableDate: FormAvailableDate, type: FormAvailableDateType): [Dayjs | null, Dayjs | null];
export declare function getAvailableDate(availableDate: FormAvailableDate, type: FormDateType, time?: FormTimeType): [Dayjs | null, Dayjs | null];
/********************************************************************************************************************
 * getAvailableDateVal
 * ******************************************************************************************************************/
export declare function getAvailableDateVal(availableDate: FormAvailableDate, type: FormAvailableDateType): [number | null, number | null];
export declare function getAvailableDateVal(availableDate: FormAvailableDate, type: FormDateType, time?: FormTimeType): [number | null, number | null];
/********************************************************************************************************************
 * getDateVal
 * ******************************************************************************************************************/
export declare function getDateValForAvailableDate(date: Dayjs, type: FormDateType, time?: FormTimeType): number;
/********************************************************************************************************************
 * isDateAvailable
 * ******************************************************************************************************************/
export declare function isDateAvailable(date: Dayjs, availableDate: FormAvailableDate, type: FormAvailableDateType): boolean;
export declare function isDateAvailable(date: Dayjs, availableDate: FormAvailableDate, type: FormDateType, time?: FormTimeType): boolean;
/********************************************************************************************************************
 * checkDateAvailable
 * ******************************************************************************************************************/
export type checkDateAvailableResult = 'available' | 'min' | 'max';
export declare function checkDateAvailable(date: Dayjs, availableDate: FormAvailableDate, type: FormAvailableDateType): checkDateAvailableResult;
export declare function checkDateAvailable(date: Dayjs, availableDate: FormAvailableDate, type: FormDateType, time?: FormTimeType): checkDateAvailableResult;
