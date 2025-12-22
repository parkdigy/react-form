import React, { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  PFormDateRangePickerTooltipPickerProps as Props,
  PFormDateRangePickerTooltipPickerCommands,
  PFormDateRangePickerTooltipPickerValue,
  PFormDateRangePickerTooltipPickerDateValue,
} from './PFormDateRangePickerTooltipPicker.types';
import { PickersDay, PickersDayProps, StaticDatePicker } from '@mui/x-date-pickers';
import { IconButton, IconButtonProps } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import './PFormDateRangePickerTooltipPicker.scss';
import { useForwardRef } from '@pdg/react-hook';

interface ClassNameMap {
  [key: number]: string;
}

const PFormDateRangePickerTooltipPicker = ({
  ref,
  selectType,
  value: initValue,
  focusedDate,
  month,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  onValueChange,
  onMouseEnterPickersDay,
  onMonthChange,
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const leftArrowOnClickRef = useRef<IconButtonProps['onClick']>(undefined);
  const rightArrowOnClickRef = useRef<IconButtonProps['onClick']>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [activeMonthValue, setActiveMonthValue] = useState<PFormDateRangePickerTooltipPickerDateValue>(null);
  const [LeftArrowButton] = useState(() => {
    const ArrowButton = (props: IconButtonProps) => {
      leftArrowOnClickRef.current = props.onClick;
      return <IconButton {...props} />;
    };
    return ArrowButton;
  });

  const [RightArrowButton] = useState(() => {
    const ArrowButton = (props: IconButtonProps) => {
      rightArrowOnClickRef.current = props.onClick;
      return <IconButton {...props} />;
    };
    return ArrowButton;
  });

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => setActiveMonthValue(null));
    useEffect(() => effectEvent(), [selectType]);
  }

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getDateVal = useCallback((date: Dayjs): number => {
    return Number(date.format('YYYYMMDD'));
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  /** value */
  const value = useMemo<PFormDateRangePickerTooltipPickerValue>(
    () => (initValue ? initValue : [null, null]),
    [initValue]
  );

  /** baseClassNames */
  const baseClassNames = useMemo(() => {
    const newValue: ClassNameMap = {};

    const lastDayOfMonth = month.endOf('month').date();

    let now = dayjs(month);
    for (let i = 1; i <= lastDayOfMonth; i += 1) {
      let className = '';

      now = now.set('date', i);
      const nowVal = getDateVal(now);

      const dayOfWeek = now.day();

      if (i === 1 || dayOfWeek === 0) className += 'ui-start ';
      if (i === lastDayOfMonth || dayOfWeek === 6) className += 'ui-end ';

      newValue[nowVal] = className;
    }

    return newValue;
  }, [getDateVal, month]);

  /** selectedClassNames */
  const selectedClassNames = useMemo(() => {
    const newValue: ClassNameMap = {};

    const startDateVal = value[0] ? getDateVal(value[0]) : null;
    const endDateVal = value[1] ? getDateVal(value[1]) : null;

    const lastDayOfMonth = month.endOf('month').date();

    let now = dayjs(month);
    for (let i = 1; i <= lastDayOfMonth; i += 1) {
      let className = '';

      now = now.set('date', i);
      const nowVal = getDateVal(now);

      if (startDateVal && endDateVal) {
        if (nowVal >= startDateVal && nowVal <= endDateVal) {
          className += 'sel ';

          if (nowVal === startDateVal) {
            className += 's-start ';
          }
          if (nowVal === endDateVal) {
            className += 's-end ';
          }
        }
      }

      newValue[nowVal] = className;
    }

    return newValue;
  }, [getDateVal, month, value]);

  /** focusedClassNames */
  const focusedClassNames = useMemo(() => {
    const newValue: ClassNameMap = {};

    const startDateVal = value[0] ? getDateVal(value[0]) : null;
    const endDateVal = value[1] ? getDateVal(value[1]) : null;
    const focusedDateVal = focusedDate ? getDateVal(focusedDate) : null;

    const lastDayOfMonth = month.endOf('month').date();

    if (focusedDateVal && ((selectType === 'start' && endDateVal) || (selectType === 'end' && startDateVal))) {
      let now = dayjs(month);
      for (let i = 1; i <= lastDayOfMonth; i += 1) {
        let className = '';

        now = now.set('date', i);
        const nowVal = getDateVal(now);

        switch (selectType) {
          case 'start':
            if (endDateVal) {
              if (nowVal >= focusedDateVal && nowVal <= endDateVal) {
                className += 'focused ';
                if (nowVal === focusedDateVal) {
                  className += 'f-start';
                }
                if (nowVal === endDateVal) {
                  className += 'f-end ';
                }
              }
            }
            break;
          case 'end':
            if (startDateVal) {
              if (nowVal >= startDateVal && nowVal <= focusedDateVal) {
                className += 'focused ';
                if (nowVal === startDateVal) {
                  className += 'f-start ';
                }
                if (nowVal === focusedDateVal) {
                  className += 'f-end';
                }
              }
            }
            break;
        }

        newValue[nowVal] = className;
      }
    }

    return newValue;
  }, [value, getDateVal, focusedDate, month, selectType]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const previousMonth = useCallback(() => {
    if (leftArrowOnClickRef.current) {
      leftArrowOnClickRef.current({} as any);
    }
  }, []);

  const nextMonth = useCallback(() => {
    if (rightArrowOnClickRef.current) {
      rightArrowOnClickRef.current({} as any);
    }
  }, []);

  const activeMonth = useCallback((month: Dayjs) => {
    setActiveMonthValue(month);
  }, []);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<PFormDateRangePickerTooltipPickerCommands>(
    () => ({
      previousMonth,
      nextMonth,
      activeMonth,
    }),
    [activeMonth, nextMonth, previousMonth]
  );

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleRenderDay = useCallback(
    (props: Omit<PickersDayProps, 'ref'>) => {
      const startDate = value[0];
      const endDate = value[1];

      const dateVal = getDateVal(props.day);

      const baseClassName = baseClassNames[dateVal];
      const selectedClassName = selectedClassNames[dateVal];
      const focusedClassName = focusedClassNames[dateVal];

      return (
        <div key={props.key} style={{ position: 'relative' }}>
          <div className={classNames('focused-bg', baseClassName, focusedClassName)} />
          <div className={classNames('selected-bg', baseClassName, selectedClassName)} />
          <PickersDay
            {...props}
            disableMargin
            selected={props.day.isSame(startDate, 'date') || props.day.isSame(endDate, 'date')}
            onMouseEnter={
              value[0] || value[1] ? () => onMouseEnterPickersDay && onMouseEnterPickersDay(props.day) : undefined
            }
          />
        </div>
      );
    },
    [value, getDateVal, baseClassNames, selectedClassNames, focusedClassNames, onMouseEnterPickersDay]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StaticDatePicker
      className='PFormDateRangePickerTooltipPicker'
      displayStaticWrapperAs='desktop'
      slots={{
        previousIconButton: LeftArrowButton,
        nextIconButton: RightArrowButton,
        day: handleRenderDay,
        actionBar: () => <></>,
      }}
      value={activeMonthValue}
      referenceDate={month}
      disableFuture={disableFuture}
      disablePast={disablePast}
      minDate={minDate}
      maxDate={maxDate}
      onChange={(newValue) => onValueChange && onValueChange(selectType, newValue)}
      // renderDay={handleRenderDay}
      // renderInput={(params) => <TextField {...params} />}
      // format='YYYY-MM-DD HH:mm:ss'
      onMonthChange={(month) => {
        if (onMonthChange) onMonthChange(month);
        setActiveMonthValue(null);
      }}
    />
  );
};

export default PFormDateRangePickerTooltipPicker;
