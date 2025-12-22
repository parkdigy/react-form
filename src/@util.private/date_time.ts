import { DateTimeValidationError, DateValidationError } from '@mui/x-date-pickers';
import { PFormDateType, PFormTimeType } from '../@types';
import { PFormAvailableDate, PFormAvailableDateItem, PFormAvailableDateType } from '../@private/@types';
import dayjs, { Dayjs } from 'dayjs';

/********************************************************************************************************************
 * getDateValidationErrorText
 * ******************************************************************************************************************/

export function getDateValidationErrorText(error: DateValidationError | DateTimeValidationError) {
  switch (error) {
    case 'invalidDate':
      return '형식이 일치하지 않습니다.';
    case 'shouldDisableDate':
    case 'shouldDisableMonth':
    case 'shouldDisableYear':
    case 'disableFuture':
    case 'disablePast':
    case 'minDate':
    case 'maxDate':
      return '선택할 수 없는 날짜입니다.';
  }
}

/********************************************************************************************************************
 * Const
 * ******************************************************************************************************************/

const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
const DEFAULT_DATE_FORM_VALUE_FORMAT = 'YYYY-MM-DD';
const DEFAULT_DATE_TIME_HOUR_FORMAT = 'YYYY-MM-DD HH시';
const DEFAULT_DATE_TIME_HOUR_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:00:00';
const DEFAULT_DATE_TIME_MINUTE_FORMAT = 'YYYY-MM-DD HH:mm';
const DEFAULT_DATE_TIME_MINUTE_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:mm:00';
const DEFAULT_DATE_TIME_SECOND_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DEFAULT_DATE_TIME_SECOND_FORM_VALUE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DEFAULT_TIME_HOUR_FORMAT = 'HH시';
const DEFAULT_TIME_HOUR_FORM_VALUE_FORMAT = 'HH:00:00';
const DEFAULT_TIME_MINUTE_FORMAT = 'HH:mm';
const DEFAULT_TIME_MINUTE_FORM_VALUE_FORMAT = 'HH:mm:00';
const DEFAULT_TIME_SECOND_FORMAT = 'HH:mm:ss';
const DEFAULT_TIME_SECOND_FORM_VALUE_FORMAT = 'HH:mm:ss';

/********************************************************************************************************************
 * getDateTimeFormat
 * ******************************************************************************************************************/

export function getDateTimeFormat(type: PFormDateType, time?: PFormTimeType): string {
  switch (type) {
    case 'date':
      return DEFAULT_DATE_FORMAT;
    case 'date_time':
      if (time) {
        switch (time) {
          case 'hour':
            return DEFAULT_DATE_TIME_HOUR_FORMAT;
          case 'minute':
            return DEFAULT_DATE_TIME_MINUTE_FORMAT;
          case 'second':
            return DEFAULT_DATE_TIME_SECOND_FORMAT;
        }
      } else {
        throw new Error(`util::date_time::getDateTimeFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
      }
      break;
    case 'time':
      if (time) {
        switch (time) {
          case 'hour':
            return DEFAULT_TIME_HOUR_FORMAT;
          case 'minute':
            return DEFAULT_TIME_MINUTE_FORMAT;
          case 'second':
            return DEFAULT_TIME_SECOND_FORMAT;
        }
      } else {
        throw new Error(`util::date_time::getDateTimeFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
      }
      break;
  }
}

/********************************************************************************************************************
 * getDateTimeFormValueFormat
 * ******************************************************************************************************************/

export function getDateTimeFormValueFormat(type: PFormDateType, time?: PFormTimeType): string {
  switch (type) {
    case 'date':
      return DEFAULT_DATE_FORM_VALUE_FORMAT;
    case 'date_time':
      if (time) {
        switch (time) {
          case 'hour':
            return DEFAULT_DATE_TIME_HOUR_FORM_VALUE_FORMAT;
          case 'minute':
            return DEFAULT_DATE_TIME_MINUTE_FORM_VALUE_FORMAT;
          case 'second':
            return DEFAULT_DATE_TIME_SECOND_FORM_VALUE_FORMAT;
        }
      } else {
        throw new Error(
          `util::date_time::getDateTimeFormValueFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`
        );
      }
      break;
    case 'time':
      if (time) {
        switch (time) {
          case 'hour':
            return DEFAULT_TIME_HOUR_FORM_VALUE_FORMAT;
          case 'minute':
            return DEFAULT_TIME_MINUTE_FORM_VALUE_FORMAT;
          case 'second':
            return DEFAULT_TIME_SECOND_FORM_VALUE_FORMAT;
        }
      } else {
        throw new Error(
          `util::date_time::getDateTimeFormValueFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`
        );
      }
      break;
  }
}

/********************************************************************************************************************
 * getAvailableDateValFormat
 * ******************************************************************************************************************/

export function getAvailableDateValFormat(type: PFormAvailableDateType): string;
export function getAvailableDateValFormat(type: PFormDateType, time?: PFormTimeType): string;
export function getAvailableDateValFormat(type: PFormAvailableDateType | PFormDateType, time?: PFormTimeType): string {
  let availableDateType: PFormAvailableDateType;

  if (time) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else {
    availableDateType = type as PFormAvailableDateType;
  }

  switch (availableDateType) {
    case 'year':
      return 'YYYY';
    case 'month':
      return 'YYYYMM';
    case 'day':
      return 'YYYYMMDD';
    case 'hour':
      return 'YYYYMMDDHH';
    case 'minute':
      return 'YYYYMMDDHHmm';
    case 'second':
      return 'YYYYMMDDHHmmss';
  }
}

/********************************************************************************************************************
 * getDateValFormat
 * ******************************************************************************************************************/

export function getDateValFormat(type: PFormDateType, time?: PFormTimeType): string {
  switch (type) {
    case 'date':
      return 'YYYYMMDD';
    case 'date_time':
      if (time) {
        switch (time) {
          case 'hour':
            return 'YYYYMMDDHH';
          case 'minute':
            return 'YYYYMMDDHHmm';
          case 'second':
            return 'YYYYMMDDHHmmss';
        }
      } else {
        throw new Error(`util::date_time::getDateValFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
      }
      break;
    case 'time':
      if (time) {
        switch (time) {
          case 'hour':
            return 'HH';
          case 'minute':
            return 'HHmm';
          case 'second':
            return 'HHmmss';
        }
      } else {
        throw new Error(`util::date_time::getDateValFormat - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
      }
      break;
  }
}

/********************************************************************************************************************
 * getAvailableDateType
 * ******************************************************************************************************************/

export function getAvailableDateType(type: PFormDateType, time?: PFormTimeType): PFormAvailableDateType {
  switch (type) {
    case 'date':
      return 'day';
    case 'date_time':
      if (time) {
        switch (time) {
          case 'hour':
            return 'hour';
          case 'minute':
            return 'minute';
          case 'second':
            return 'second';
        }
      } else {
        throw new Error(`util::date_time::getAvailableDateType - type 이 '${type}' 일 경우 time 값을 지정해야 합니다.`);
      }
      break;
    case 'time':
      throw new Error(`util::date_time::getAvailableDateType - '${type}' type 을 사용할 수 없습니다.`);
  }
}

/********************************************************************************************************************
 * makeAvailableDate
 * ******************************************************************************************************************/

export function makeAvailableDate(
  minDate: Dayjs | undefined,
  maxDate: Dayjs | undefined,
  disablePast: boolean,
  disableFuture: boolean
): PFormAvailableDate {
  const now = dayjs();

  let min: Dayjs | null = null;
  let max: Dayjs | null = null;

  if (disablePast) {
    min = now;
  }
  if (minDate) {
    if (min) {
      if (minDate.isAfter(min, 'date')) {
        min = minDate;
      }
    } else {
      min = minDate;
    }
  }
  if (disableFuture) {
    max = now;
  }
  if (maxDate) {
    if (max) {
      if (maxDate.isBefore(max, 'date')) {
        max = maxDate;
      }
    } else {
      max = maxDate;
    }
  }

  const minItem: PFormAvailableDateItem | null = min
    ? {
        date: min,
        year: Number(min.format(getAvailableDateValFormat('year'))),
        month: Number(min.format(getAvailableDateValFormat('month'))),
        day: Number(min.format(getAvailableDateValFormat('day'))),
        hour: Number(min.format(getAvailableDateValFormat('hour'))),
        minute: Number(min.format(getAvailableDateValFormat('minute'))),
        second: Number(min.format(getAvailableDateValFormat('second'))),
      }
    : null;
  const maxItem: PFormAvailableDateItem | null = max
    ? {
        date: max,
        year: Number(max.format(getAvailableDateValFormat('year'))),
        month: Number(max.format(getAvailableDateValFormat('month'))),
        day: Number(max.format(getAvailableDateValFormat('day'))),
        hour: Number(max.format(getAvailableDateValFormat('hour'))),
        minute: Number(max.format(getAvailableDateValFormat('minute'))),
        second: Number(max.format(getAvailableDateValFormat('second'))),
      }
    : null;

  return [minItem, maxItem];
}

/********************************************************************************************************************
 * getAvailableDate
 * ******************************************************************************************************************/

export function getAvailableDate(
  availableDate: PFormAvailableDate,
  type: PFormAvailableDateType
): [Dayjs | null, Dayjs | null];
export function getAvailableDate(
  availableDate: PFormAvailableDate,
  type: PFormDateType,
  time?: PFormTimeType
): [Dayjs | null, Dayjs | null];
export function getAvailableDate(
  availableDate: PFormAvailableDate,
  type: PFormAvailableDateType | PFormDateType,
  time?: PFormTimeType
): [Dayjs | null, Dayjs | null] {
  let availableDateType: PFormAvailableDateType;

  if (time) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else {
    availableDateType = type as PFormAvailableDateType;
  }

  const availableDateVal = getAvailableDateVal(availableDate, availableDateType);
  const availableDateValFormat = getAvailableDateValFormat(availableDateType);

  return [
    availableDateVal[0] ? dayjs(availableDateVal[0].toString(), availableDateValFormat) : null,
    availableDateVal[1] ? dayjs(availableDateVal[1].toString(), availableDateValFormat) : null,
  ];
}

/********************************************************************************************************************
 * getAvailableDateVal
 * ******************************************************************************************************************/

export function getAvailableDateVal(
  availableDate: PFormAvailableDate,
  type: PFormAvailableDateType
): [number | null, number | null];
export function getAvailableDateVal(
  availableDate: PFormAvailableDate,
  type: PFormDateType,
  time?: PFormTimeType
): [number | null, number | null];
export function getAvailableDateVal(
  availableDate: PFormAvailableDate,
  type: PFormAvailableDateType | PFormDateType,
  time?: PFormTimeType
): [number | null, number | null] {
  let availableDateType: PFormAvailableDateType;

  if (time) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else {
    availableDateType = type as PFormAvailableDateType;
  }

  return [
    availableDate[0] ? availableDate[0][availableDateType] : null,
    availableDate[1] ? availableDate[1][availableDateType] : null,
  ];
}

/********************************************************************************************************************
 * getDateVal
 * ******************************************************************************************************************/

export function getDateValForAvailableDate(date: Dayjs, type: PFormDateType, time?: PFormTimeType): number {
  const format = getAvailableDateValFormat(type, time);
  return Number(date.format(format));
}

/********************************************************************************************************************
 * isDateAvailable
 * ******************************************************************************************************************/

export function isDateAvailable(date: Dayjs, availableDate: PFormAvailableDate, type: PFormAvailableDateType): boolean;
export function isDateAvailable(
  date: Dayjs,
  availableDate: PFormAvailableDate,
  type: PFormDateType,
  time?: PFormTimeType
): boolean;
export function isDateAvailable(
  date: Dayjs,
  availableDate: PFormAvailableDate,
  type: PFormAvailableDateType | PFormDateType,
  time?: PFormTimeType
): boolean {
  let availableDateType: PFormAvailableDateType;

  if (time) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else {
    availableDateType = type as PFormAvailableDateType;
  }

  const dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
  const availableDateVal = getAvailableDateVal(availableDate, availableDateType);
  return !(
    (availableDateVal[0] && dateVal < availableDateVal[0]) ||
    (availableDateVal[1] && dateVal > availableDateVal[1])
  );
}

/********************************************************************************************************************
 * checkDateAvailable
 * ******************************************************************************************************************/

export type checkDateAvailableResult = 'available' | 'min' | 'max';

export function checkDateAvailable(
  date: Dayjs,
  availableDate: PFormAvailableDate,
  type: PFormAvailableDateType
): checkDateAvailableResult;
export function checkDateAvailable(
  date: Dayjs,
  availableDate: PFormAvailableDate,
  type: PFormDateType,
  time?: PFormTimeType
): checkDateAvailableResult;
export function checkDateAvailable(
  date: Dayjs,
  availableDate: PFormAvailableDate,
  type: PFormAvailableDateType | PFormDateType,
  time?: PFormTimeType
): checkDateAvailableResult {
  let availableDateType: PFormAvailableDateType;

  if (time) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else if (['date', 'date_time', 'time'].includes(type)) {
    availableDateType = getAvailableDateType(type as PFormDateType, time);
  } else {
    availableDateType = type as PFormAvailableDateType;
  }

  const dateVal = Number(date.format(getAvailableDateValFormat(availableDateType)));
  const availableDateVal = getAvailableDateVal(availableDate, availableDateType);

  if (availableDateVal[0] && dateVal < availableDateVal[0]) return 'min';
  if (availableDateVal[1] && dateVal > availableDateVal[1]) return 'max';

  return 'available';
}
