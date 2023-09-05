import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  PrivateStaticDateTimePickerProps as Props,
  PrivateStaticDateTimePickerDefaultProps,
  PrivateStaticDateTimePickerCommands,
  TimeSelectScrollToDateUnit,
} from './PrivateStaticDateTimePicker.types';
import { PickersDay, PickersDayProps, StaticDateTimePicker } from '@mui/x-date-pickers';
import { Button, Grid, Icon, IconButton, IconButtonProps } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { PrivateYearSelect } from '../PrivateYearSelect';
import { PrivateMonthSelect } from '../PrivateMonthSelect';
import { PrivateTimeSelect, PrivateTimeSelectCommands } from '../PrivateTimeSelect';
import { checkDateAvailable, getAvailableDate, isDateAvailable, makeAvailableDate } from '../../@util';
import './PrivateStaticDateTimePicker.scss';

const DEFAULT_HOURS: number[] = new Array(24).fill(0);
for (let i = 0; i < DEFAULT_HOURS.length; i += 1) {
  DEFAULT_HOURS[i] = i;
}

const DEFAULT_MINUTES = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_MINUTES.length; i += 1) {
  DEFAULT_MINUTES[i] = i;
}

const DEFAULT_SECONDS = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_SECONDS.length; i += 1) {
  DEFAULT_SECONDS[i] = i;
}

const PrivateStaticDateTimePicker = React.forwardRef<PrivateStaticDateTimePickerCommands, Props>(
  (
    {
      value,
      availableDate: initAvailableDate,
      defaultCalendarMonth,
      type,
      time,
      hours: initHours,
      minutes: initMinutes,
      seconds: initSeconds,
      minuteInterval,
      secondInterval,
      minDate,
      maxDate,
      disablePast,
      disableFuture,
      onChange,
      onMonthChange,
      onClose,
      ...props
    },
    ref
  ) => {
    // Ref -------------------------------------------------------------------------------------------------------------

    const hourSelectRef = useRef<PrivateTimeSelectCommands>(null);
    const minuteSelectRef = useRef<PrivateTimeSelectCommands>(null);
    const secondSelectRef = useRef<PrivateTimeSelectCommands>(null);

    // State -----------------------------------------------------------------------------------------------------------

    const [month, setMonth] = useState<Dayjs>(() => {
      if (value) return value;
      else if (defaultCalendarMonth) return defaultCalendarMonth;
      else return dayjs();
    });
    const [activeMonthValue, setActiveMonthValue] = useState<Dayjs | null>(null);
    const [yearSelectOpen, setYearSelectOpen] = useState(false);
    const [monthSelectOpen, setMonthSelectOpen] = useState(false);

    // Memo --------------------------------------------------------------------------------------------------------------

    const hours = useMemo(() => initHours || DEFAULT_HOURS, [initHours]);
    const minutes = useMemo(() => initMinutes || DEFAULT_MINUTES, [initMinutes]);
    const seconds = useMemo(() => initSeconds || DEFAULT_SECONDS, [initSeconds]);
    const availableDate = useMemo(
      () =>
        initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture),
      [initAvailableDate, minDate, maxDate, disablePast, disableFuture]
    );

    const disableHours = useMemo(() => {
      const newDisableHours: number[] = [];
      if (time && value && (availableDate[0] || availableDate[1])) {
        hours.forEach((h) => {
          if (!isDateAvailable(value.set('hour', h), availableDate, 'hour')) {
            newDisableHours.push(h);
          }
        });
      }
      return newDisableHours;
    }, [time, value, availableDate, hours]);

    const disableMinutes = useMemo(() => {
      const newDisableMinutes: number[] = [];

      if (time === 'minute' || time === 'second') {
        if (value && (availableDate[0] || availableDate[1])) {
          minutes.forEach((m) => {
            if (!isDateAvailable(value.set('minute', m), availableDate, 'minute')) {
              newDisableMinutes.push(m);
            }
          });
        }
      }

      return newDisableMinutes;
    }, [time, value, availableDate, minutes]);

    const disableSeconds = useMemo(() => {
      const newDisableSeconds: number[] = [];

      if (time === 'second') {
        if (value && (availableDate[0] || availableDate[1])) {
          seconds.forEach((s) => {
            if (!isDateAvailable(value.set('second', s), availableDate, 'second')) {
              newDisableSeconds.push(s);
            }
          });
        }
      }

      return newDisableSeconds;
    }, [time, value, availableDate, seconds]);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (!yearSelectOpen) {
        setActiveMonthValue(null);
      }
    }, [yearSelectOpen]);

    //--------------------------------------------------------------------------------------------------------------------

    const leftArrowOnClickRef = useRef<IconButtonProps['onClick']>();
    const rightArrowOnClickRef = useRef<IconButtonProps['onClick']>();

    const [LeftArrowButton] = useState(() => {
      const ArrowButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
        leftArrowOnClickRef.current = props.onClick;
        return <IconButton {...props} />;
      };
      return ArrowButton;
    });

    const [RightArrowButton] = useState(() => {
      const ArrowButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
        rightArrowOnClickRef.current = props.onClick;
        return <IconButton {...props} />;
      };
      return ArrowButton;
    });

    // Function --------------------------------------------------------------------------------------------------------

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

    const timeSelectScrollToDate = useCallback((date: Dayjs, times?: TimeSelectScrollToDateUnit[]) => {
      if (!times || times?.includes('hour')) hourSelectRef.current?.scrollToValue(date.hour());
      if (!times || times?.includes('minute')) minuteSelectRef.current?.scrollToValue(date.minute());
      if (!times || times?.includes('second')) secondSelectRef.current?.scrollToValue(date.second());
    }, []);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleYearSelect = useCallback(
      (year: number) => {
        setMonth(month.set('year', year));
        setActiveMonthValue(month.set('year', year));
        setYearSelectOpen(false);
        setMonthSelectOpen(true);
      },
      [month]
    );

    const handleMonthSelect = useCallback(
      (m: number) => {
        setMonth(month.set('month', m));
        setActiveMonthValue(month.set('month', m));
        setMonthSelectOpen(false);
      },
      [month]
    );

    const handleRenderDay = useCallback(
      (props: PickersDayProps<Dayjs>) => {
        return <PickersDay {...props} selected={props.day.isSame(value, 'date')} />;
      },
      [value]
    );

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        const commands: PrivateStaticDateTimePickerCommands = {
          timeSelectScrollToDate,
        };

        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }

        return () => {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        };
      }
    }, [ref, timeSelectScrollToDate]);

    // Render - Function -----------------------------------------------------------------------------------------------

    const getActionButton = useCallback(
      (date: Dayjs, label: string) => {
        const disabled = !isDateAvailable(date, availableDate, 'day');
        return (
          <Button
            variant='text'
            className={disabled ? 'disabled' : undefined}
            disabled={disabled}
            onClick={() => {
              let finalDate = date;
              const checkResult = checkDateAvailable(finalDate, availableDate, type, time);
              if (checkResult !== 'available') {
                const availableDateDate = getAvailableDate(availableDate, type, time);
                if (checkResult === 'min') {
                  if (availableDateDate[0]) finalDate = availableDateDate[0];
                } else if (checkResult === 'max') {
                  if (availableDateDate[1]) finalDate = availableDateDate[1];
                }
              }

              onChange('action_date', finalDate);
            }}
          >
            {label}
          </Button>
        );
      },
      [type, time, onChange, availableDate]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Grid container className={classNames('PrivateStaticDateTimePicker', type)}>
        {type !== 'time' && (
          <Grid item>
            <Grid container direction='column'>
              <Grid item sx={{ p: 2, width: '100%' }}>
                <Grid container className='month-change-arrow-wrap'>
                  <Grid item flex={1} className='month-title-container'>
                    <div className='month-title-wrap'>
                      <div className='month-title'>
                        <Button
                          variant='text'
                          className={yearSelectOpen ? 'active' : undefined}
                          onClick={() => {
                            if (yearSelectOpen) {
                              setYearSelectOpen(false);
                            } else {
                              setYearSelectOpen(true);
                              setMonthSelectOpen(false);
                            }
                          }}
                        >
                          {month.format('YYYY년')}
                          <Icon>{yearSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'}</Icon>
                        </Button>
                      </div>
                      <div className='month-title'>
                        <Button
                          variant='text'
                          className={monthSelectOpen ? 'active' : undefined}
                          onClick={() => {
                            if (monthSelectOpen) {
                              setMonthSelectOpen(false);
                            } else {
                              setMonthSelectOpen(true);
                              setYearSelectOpen(false);
                            }
                          }}
                        >
                          {month.format('M월')}
                          <Icon>{monthSelectOpen ? 'arrow_drop_up' : 'arrow_drop_down'}</Icon>
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  {!yearSelectOpen && !monthSelectOpen && (
                    <Grid item style={{ textAlign: 'right' }}>
                      <IconButton onClick={previousMonth} sx={{ mr: 1 }}>
                        <Icon>keyboard_arrow_left</Icon>
                      </IconButton>
                      <IconButton onClick={nextMonth}>
                        <Icon>keyboard_arrow_right</Icon>
                      </IconButton>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              <Grid item style={{ position: 'relative' }}>
                <StaticDateTimePicker
                  {...props}
                  value={activeMonthValue}
                  defaultCalendarMonth={month}
                  slots={{
                    previousIconButton: LeftArrowButton,
                    nextIconButton: RightArrowButton,
                    day: handleRenderDay,
                  }}
                  minDate={minDate}
                  maxDate={maxDate}
                  disablePast={disablePast}
                  disableFuture={disableFuture}
                  displayStaticWrapperAs='desktop'
                  onChange={(newValue) => {
                    const finalValue = newValue
                      ? value
                        ? newValue.set('hour', value.hour()).set('minute', value.minute()).set('second', value.second())
                        : newValue
                      : newValue;

                    onChange('date', finalValue);
                  }}
                  onMonthChange={(month: Dayjs) => {
                    setMonth(month);
                    if (onMonthChange) onMonthChange(month);
                  }}
                />
                {yearSelectOpen && (
                  <PrivateYearSelect
                    selectYear={value == null ? null : value.year()}
                    activeYear={month.year()}
                    availableDate={availableDate}
                    onSelect={handleYearSelect}
                  />
                )}
                {monthSelectOpen && (
                  <PrivateMonthSelect
                    year={month.year()}
                    selectYear={value == null ? null : value.year()}
                    selectMonth={value == null ? null : value.month()}
                    activeMonth={month.month()}
                    availableDate={availableDate}
                    onSelect={handleMonthSelect}
                  />
                )}
              </Grid>
              <Grid item className='action-buttons'>
                {getActionButton(
                  dayjs()
                    .startOf('d')
                    .subtract(1, 'month')
                    .set('hour', value ? value.hour() : 0)
                    .set('minute', value ? value.minute() : 0)
                    .set('second', value ? value.second() : 0),
                  '지난달'
                )}
                {getActionButton(
                  dayjs()
                    .startOf('d')
                    .subtract(7, 'd')
                    .set('hour', value ? value.hour() : 0)
                    .set('minute', value ? value.minute() : 0)
                    .set('second', value ? value.second() : 0),
                  '지난주'
                )}
                {getActionButton(
                  dayjs()
                    .startOf('d')
                    .subtract(1, 'd')
                    .set('hour', value ? value.hour() : 0)
                    .set('minute', value ? value.minute() : 0)
                    .set('second', value ? value.second() : 0),
                  '어제'
                )}
                {getActionButton(
                  dayjs()
                    .startOf('d')
                    .set('hour', value ? value.hour() : 0)
                    .set('minute', value ? value.minute() : 0)
                    .set('second', value ? value.second() : 0),
                  '오늘'
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
        {time && (
          <Grid item className='time'>
            <Grid container direction='column' className='time-container'>
              <Grid item className='time-title'>
                {time === 'hour' && (value ? value.format('HH시') : '00시')}
                {time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분')}
                {time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')}
              </Grid>
              <Grid item className='time-select-wrap'>
                <Grid container style={{ height: '100%' }}>
                  <Grid item style={{ position: 'relative', width: type === 'time' ? 240 : 80 }}>
                    <PrivateTimeSelect
                      ref={hourSelectRef}
                      value={value && value.hour()}
                      unit='시'
                      list={hours}
                      disableList={disableHours}
                      cols={type === 'time' ? 3 : 1}
                      onSelect={(newValue: number) => {
                        onChange(
                          'hour',
                          value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue)
                        );
                      }}
                    />
                  </Grid>
                  {(time === 'minute' || time === 'second') && (
                    <Grid item style={{ position: 'relative', width: type === 'time' ? 240 : 80 }}>
                      <PrivateTimeSelect
                        ref={minuteSelectRef}
                        value={value && value.minute()}
                        unit='분'
                        list={minutes}
                        disableList={disableMinutes}
                        cols={type === 'time' ? 3 : 1}
                        listInterval={minuteInterval}
                        onSelect={(newValue: number) => {
                          onChange(
                            'minute',
                            value ? value.set('minute', newValue) : dayjs().startOf('date').set('minute', newValue)
                          );
                        }}
                      />
                    </Grid>
                  )}
                  {time === 'second' && (
                    <Grid item style={{ position: 'relative', width: type === 'time' ? 240 : 80 }}>
                      <PrivateTimeSelect
                        ref={secondSelectRef}
                        value={value && value.second()}
                        unit='초'
                        list={seconds}
                        disableList={disableSeconds}
                        cols={type === 'time' ? 3 : 1}
                        listInterval={secondInterval}
                        onSelect={(newValue: number) => {
                          onChange(
                            'second',
                            value ? value.set('second', newValue) : dayjs().startOf('date').set('second', newValue)
                          );
                        }}
                      />
                    </Grid>
                  )}
                </Grid>
              </Grid>
              {onClose && (
                <Grid item className='action-buttons'>
                  <Button variant='text' onClick={onClose}>
                    닫기
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
);

PrivateStaticDateTimePicker.displayName = 'PrivateStaticDateTimePicker';
PrivateStaticDateTimePicker.defaultProps = PrivateStaticDateTimePickerDefaultProps;

export default PrivateStaticDateTimePicker;
