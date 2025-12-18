import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  PFormDateRangePickerTooltipPickerContainerProps as Props,
  PFormDateRangePickerTooltipPickerContainerCommands,
} from './PFormDateRangePickerTooltipPickerContainer.types';
import {
  PFormDateRangePickerTooltipPicker,
  PFormDateRangePickerTooltipPickerCommands,
  PFormDateRangePickerTooltipPickerDateValue,
} from './PFormDateRangePickerTooltipPicker';
import { Button, darken, Grid, Icon, IconButton, useTheme } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import {
  getAvailableDate,
  getAvailableDateVal,
  getDateValForAvailableDate,
  isDateAvailable,
  makeAvailableDate,
} from '../../../@util.private';
import './PFormDateRangePickerTooltipPickerContainer.scss';
import { useForwardRef } from '@pdg/react-hook';

const YEARS = new Array(200).fill(0);
for (let i = 0; i < 200; i += 1) {
  YEARS[i] = 1900 + i;
}
const MONTHS = new Array(12).fill(0);
for (let i = 0; i < 12; i += 1) {
  MONTHS[i] = i;
}

const PFormDateRangePickerTooltipPickerContainer = ({
  ref,
  selectType,
  value,
  calendarCount = 2,
  months,
  disablePast,
  disableFuture,
  maxDate,
  minDate,
  onGetActionButtons,
  onChange,
  onValueChange,
  onMonthsChange,
}: Props) => {
  const theme = useTheme();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const datePicker1Ref = useRef<PFormDateRangePickerTooltipPickerCommands>(null);
  const datePicker2Ref = useRef<PFormDateRangePickerTooltipPickerCommands>(null);
  const datePicker3Ref = useRef<PFormDateRangePickerTooltipPickerCommands>(null);
  const yearSelectRef = useRef<HTMLDivElement>(null);
  const activeYearBtnRef = useRef<HTMLButtonElement>(null);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const [focusedDate, setFocusedDate] = useState<PFormDateRangePickerTooltipPickerDateValue>();
  const [yearMonthSelectIndex, setYearMonthSelectIndex] = useState<number>(0);
  const [yearSelectOpen, setYearSelectOpen] = useState(false);
  const [monthSelectOpen, setMonthSelectOpen] = useState(false);

  const customDatePickerProps = useMemo(
    () => ({ selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange }),
    [selectType, value, minDate, maxDate, disableFuture, disablePast, onValueChange]
  );

  const availableDate = useMemo(
    () => makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture),
    [minDate, maxDate, disablePast, disableFuture]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (yearSelectOpen) {
      setTimeout(() => {
        const wrapRect = yearSelectRef.current?.getBoundingClientRect();
        const activeRect = activeYearBtnRef.current?.getBoundingClientRect();
        if (wrapRect && activeRect) {
          yearSelectRef.current?.scrollTo({
            left: 0,
            top: activeRect.y - wrapRect.y - Math.round(wrapRect.height / 2) + 23,
          });
        }
      });
    }
  }, [yearSelectOpen]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const previousMonth = useCallback(() => {
    datePicker1Ref.current?.previousMonth();
    datePicker2Ref.current?.previousMonth();
    datePicker3Ref.current?.previousMonth();
  }, []);

  const nextMonth = useCallback(() => {
    datePicker1Ref.current?.nextMonth();
    datePicker2Ref.current?.nextMonth();
    datePicker3Ref.current?.nextMonth();
  }, []);

  const activeMonth = useCallback((month: Dayjs) => {
    datePicker1Ref.current?.activeMonth(month);
    datePicker2Ref.current?.activeMonth(month.add(1, 'month'));
    datePicker3Ref.current?.activeMonth(month.add(2, 'month'));
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleFirstDatePickerMonthChange = useCallback(
    (date: Dayjs) => {
      if (onMonthsChange) {
        onMonthsChange([date, date.add(1, 'month'), date.add(2, 'month')]);
      }
    },
    [onMonthsChange]
  );

  const handleYearSelectClick = useCallback(
    (index: number) => {
      if (yearSelectOpen) {
        setYearSelectOpen(false);
        if (index !== yearMonthSelectIndex) {
          setTimeout(() => {
            setYearMonthSelectIndex(index);
            setYearSelectOpen(true);
            setMonthSelectOpen(false);
          });
        }
      } else {
        setYearMonthSelectIndex(index);
        setYearSelectOpen(true);
        setMonthSelectOpen(false);
      }
    },
    [yearSelectOpen, yearMonthSelectIndex]
  );

  const handleMonthSelectClick = useCallback(
    (index: number) => {
      if (monthSelectOpen) {
        setMonthSelectOpen(false);
        if (index !== yearMonthSelectIndex) {
          setYearMonthSelectIndex(index);
          setMonthSelectOpen(true);
          setYearSelectOpen(false);
        }
      } else {
        setYearMonthSelectIndex(index);
        setMonthSelectOpen(true);
        setYearSelectOpen(false);
      }
    },
    [monthSelectOpen, yearMonthSelectIndex]
  );

  const handleYearSelect = useCallback(
    (year: number) => {
      activeMonth(months[yearMonthSelectIndex].set('year', year).subtract(yearMonthSelectIndex, 'month'));
      setYearSelectOpen(false);
      setMonthSelectOpen(true);
    },
    [activeMonth, months, yearMonthSelectIndex]
  );

  const handleMonthSelect = useCallback(
    (m: number) => {
      activeMonth(months[yearMonthSelectIndex].set('month', m).subtract(yearMonthSelectIndex, 'month'));
      setMonthSelectOpen(false);
    },
    [activeMonth, months, yearMonthSelectIndex]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  useForwardRef(
    ref,
    useMemo<PFormDateRangePickerTooltipPickerContainerCommands>(
      () => ({ previousMonth, nextMonth, activeMonth }),
      [activeMonth, nextMonth, previousMonth]
    )
  );

  /********************************************************************************************************************
   * Render Function
   * ******************************************************************************************************************/

  const getMonthTitle = useCallback(
    (index: number): ReactNode => {
      return (
        <div className='month-title'>
          <Button
            variant='text'
            className={yearSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined}
            onClick={() => handleYearSelectClick(index)}
          >
            {months[index].format('YYYY년')}
            <Icon>{yearSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down'}</Icon>
          </Button>
          <Button
            variant='text'
            className={monthSelectOpen && yearMonthSelectIndex === index ? 'active' : undefined}
            onClick={() => handleMonthSelectClick(index)}
          >
            {months[index].format('M월')}
            <Icon>{monthSelectOpen && yearMonthSelectIndex === index ? 'arrow_drop_up' : 'arrow_drop_down'}</Icon>
          </Button>
        </div>
      );
    },
    [yearSelectOpen, yearMonthSelectIndex, months, monthSelectOpen, handleYearSelectClick, handleMonthSelectClick]
  );

  /********************************************************************************************************************
   * Render - Function
   * ******************************************************************************************************************/

  const getActionButton = useCallback(
    (startDate: Dayjs, endDate: Dayjs, label: string) => {
      const availableDateDate = getAvailableDate(availableDate, 'date');
      const availableDateVal = getAvailableDateVal(availableDate, 'date');
      const startDateVal = getDateValForAvailableDate(startDate, 'date');
      const endDateVal = getDateValForAvailableDate(endDate, 'date');
      const disabled =
        (!!availableDateVal[0] && endDateVal < availableDateVal[0]) ||
        (!!availableDateVal[1] && startDateVal > availableDateVal[1]);

      let finalStartDate: Dayjs = startDate,
        finalEndDate: Dayjs = endDate;
      if (!disabled) {
        if (availableDateVal[0] && availableDateDate[0]) {
          if (startDateVal < availableDateVal[0]) {
            finalStartDate = availableDateDate[0];
          }
        }
        if (availableDateVal[1] && availableDateDate[1]) {
          if (endDateVal > availableDateVal[1]) {
            finalEndDate = availableDateDate[1];
          }
        }
      }
      return (
        <Button
          className={disabled ? 'disabled' : undefined}
          variant='text'
          disabled={disabled}
          onClick={() => {
            onChange([finalStartDate, finalEndDate]);
          }}
        >
          {label}
        </Button>
      );
    },
    [onChange, availableDate]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const actionButtons = useMemo(() => {
    if (onGetActionButtons) {
      return onGetActionButtons().map((info, idx) => (
        <React.Fragment key={idx}>{getActionButton(info.start, info.end, info.label)}</React.Fragment>
      ));
    } else {
      const now = dayjs().startOf('d');
      const lastWeek = now.subtract(1, 'week');
      const dayOfWeek = now.day();
      let lastWeekDate: [Dayjs, Dayjs];
      let thisWeekDate: [Dayjs, Dayjs];
      if (dayOfWeek === 0) {
        lastWeekDate = [lastWeek.subtract(6, 'd'), lastWeek];
        thisWeekDate = [now.subtract(6, 'd'), now];
      } else {
        lastWeekDate = [lastWeek.subtract(dayOfWeek - 1, 'd'), lastWeek.add(7 - dayOfWeek, 'd')];
        thisWeekDate = [now.subtract(dayOfWeek - 1, 'd'), now.add(7 - dayOfWeek, 'd')];
      }

      return (
        <>
          {getActionButton(
            now.subtract(1, 'month').startOf('month'),
            now.subtract(1, 'month').endOf('month'),
            '지난달'
          )}
          {getActionButton(now.startOf('month'), now.endOf('month'), '이번달')}
          {getActionButton(now.subtract(29, 'd'), now, '최근 30일')}
          {getActionButton(now.subtract(6, 'd'), now, '최근 7일')}
          {getActionButton(lastWeekDate[0], lastWeekDate[1], '지난주')}
          {getActionButton(thisWeekDate[0], thisWeekDate[1], '이번주')}
          {getActionButton(now.subtract(1, 'd'), now.subtract(1, 'd'), '어제')}
          {getActionButton(now, now, '오늘')}
        </>
      );
    }
  }, [onGetActionButtons, getActionButton]);

  return (
    <div className='PFormDateRangePickerTooltipPickerContainer'>
      <Grid container direction='column'>
        {!yearSelectOpen && !monthSelectOpen && (
          <Grid>
            <Grid container className='month-change-arrow-wrap'>
              <Grid size={{ xs: 6 }}>
                <IconButton onClick={previousMonth}>
                  <Icon>keyboard_arrow_left</Icon>
                </IconButton>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <IconButton onClick={nextMonth}>
                  <Icon>keyboard_arrow_right</Icon>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid onMouseLeave={() => setFocusedDate(undefined)}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>{getMonthTitle(0)}</div>
            <div style={{ flex: 1, borderLeft: '1px solid #efefef' }}>{getMonthTitle(1)}</div>
            {Number(calendarCount) >= 3 && (
              <div style={{ flex: 1, borderLeft: '1px solid #efefef' }}>{getMonthTitle(2)}</div>
            )}
          </div>
          <div className='date-picker-wrap'>
            <Grid container flexWrap='nowrap'>
              <Grid>
                <PFormDateRangePickerTooltipPicker
                  {...customDatePickerProps}
                  ref={datePicker1Ref}
                  focusedDate={focusedDate}
                  month={months[0]}
                  onMouseEnterPickersDay={setFocusedDate}
                  onMonthChange={handleFirstDatePickerMonthChange}
                />
              </Grid>
              <Grid style={{ borderLeft: '1px solid #efefef' }}>
                <PFormDateRangePickerTooltipPicker
                  {...customDatePickerProps}
                  ref={datePicker2Ref}
                  focusedDate={focusedDate}
                  month={months[1]}
                  onMouseEnterPickersDay={setFocusedDate}
                />
              </Grid>
              {Number(calendarCount) >= 3 && (
                <Grid style={{ borderLeft: '1px solid #efefef' }}>
                  <PFormDateRangePickerTooltipPicker
                    {...customDatePickerProps}
                    ref={datePicker3Ref}
                    focusedDate={focusedDate}
                    month={months[2]}
                    onMouseEnterPickersDay={setFocusedDate}
                  />
                </Grid>
              )}
            </Grid>
            {yearSelectOpen && (
              <div ref={yearSelectRef} className='year-select'>
                <Grid container style={{ padding: '5px 10px' }} spacing={1}>
                  {YEARS.map((y) => {
                    const today = dayjs();
                    const isToday = y === today.year();
                    const isActive = y === months[yearMonthSelectIndex].year();
                    const isSelected = y === value[yearMonthSelectIndex]?.year();
                    const disabled = !isDateAvailable(dayjs(y.toString(), 'YYYY'), availableDate, 'year');

                    return (
                      <Grid key={y} size={{ xs: 2 }}>
                        <Button
                          variant='text'
                          fullWidth
                          disabled={disabled}
                          className={classNames(isSelected && 'selected', isActive && 'active', isToday && 'today')}
                          ref={isActive ? activeYearBtnRef : undefined}
                          sx={{
                            backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                            color: isSelected ? 'white' : 'unset',
                            ':hover': {
                              backgroundColor: isSelected
                                ? darken(theme.palette.primary.main, 0.2)
                                : darken('#fff', 0.1),
                            },
                          }}
                          onClick={() => handleYearSelect(y)}
                        >
                          {y}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            )}
            {monthSelectOpen && (
              <div className='month-select'>
                <Grid container style={{ padding: '5px 10px' }} spacing={1}>
                  {MONTHS.map((m) => {
                    const today = dayjs();
                    const isToday = today.year() === months[yearMonthSelectIndex].year() && m === today.month();
                    const isActive = m === months[yearMonthSelectIndex].month();
                    const isSelected =
                      value[yearMonthSelectIndex]?.year() === months[yearMonthSelectIndex].year() &&
                      m === value[yearMonthSelectIndex]?.month();
                    const ym = months[yearMonthSelectIndex].year() * 100 + (m + 1);
                    const disabled = !isDateAvailable(dayjs(ym.toString(), 'YYYYMM'), availableDate, 'month');

                    return (
                      <Grid key={m} size={{ xs: 4 }}>
                        <Button
                          variant='text'
                          fullWidth
                          disabled={disabled}
                          className={classNames(isSelected && 'selected', isActive && 'active', isToday && 'today')}
                          ref={isActive ? activeYearBtnRef : undefined}
                          sx={{
                            backgroundColor: isSelected ? theme.palette.primary.main : undefined,
                            color: isSelected ? 'white' : 'unset',
                            ':hover': {
                              backgroundColor: isSelected
                                ? darken(theme.palette.primary.main, 0.2)
                                : darken('#fff', 0.1),
                            },
                          }}
                          onClick={() => handleMonthSelect(m)}
                        >
                          {m + 1}월
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            )}
          </div>
        </Grid>
        <Grid className='action-buttons' style={{ borderTop: '1px solid #efefef', padding: 10, textAlign: 'right' }}>
          {actionButtons}
        </Grid>
      </Grid>
    </div>
  );
};

export default PFormDateRangePickerTooltipPickerContainer;
