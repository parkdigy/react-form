import React, { useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  PrivateStaticDatePickerCommands,
  PrivateStaticDatePickerProps as Props,
} from './PrivateStaticDatePicker.types';
import { PickersDay, PickersDayProps, StaticDatePicker } from '@mui/x-date-pickers';
import { Button, Grid, Icon, IconButton, IconButtonProps } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { PrivateYearSelect } from '../PrivateYearSelect';
import { PrivateMonthSelect } from '../PrivateMonthSelect';
import { PrivateTimeSelectCommands } from '../PrivateTimeSelect';
import { checkDateAvailable, getAvailableDate, isDateAvailable, makeAvailableDate } from '../../@util.private';
import { PrivateTimeSection } from '../PrivateTimeSection';
import './PrivateStaticDatePicker.scss';
import { useChanged, useForwardRef } from '@pdg/react-hook';

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

const PrivateStaticDatePicker = ({
  ref,
  value,
  availableDate: initAvailableDate,
  type,
  time,
  hours = DEFAULT_HOURS,
  minutes = DEFAULT_MINUTES,
  seconds = DEFAULT_SECONDS,
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
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const hourSelectRef = useRef<PrivateTimeSelectCommands>(null);
  const minuteSelectRef = useRef<PrivateTimeSelectCommands>(null);
  const secondSelectRef = useRef<PrivateTimeSelectCommands>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [month, setMonth] = useState<Dayjs>(() => {
    if (value) return value;
    else return dayjs();
  });
  const [activeMonthValue, setActiveMonthValue] = useState<Dayjs | null>(null);
  const [yearSelectOpen, setYearSelectOpen] = useState(false);
  const [monthSelectOpen, setMonthSelectOpen] = useState(false);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const availableDate = useMemo(
    () => (initAvailableDate ? initAvailableDate : makeAvailableDate(minDate, maxDate, !!disablePast, !!disableFuture)),
    [disableFuture, disablePast, initAvailableDate, maxDate, minDate]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useChanged(() => {
    if (!yearSelectOpen) {
      setActiveMonthValue(null);
    }
  }, [yearSelectOpen]);

  /********************************************************************************************************************
   * Arrow
   * ******************************************************************************************************************/

  const leftArrowOnClickRef = useRef<IconButtonProps['onClick']>(undefined);
  const rightArrowOnClickRef = useRef<IconButtonProps['onClick']>(undefined);

  const LeftArrowButton = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return (props: IconButtonProps) => {
      leftArrowOnClickRef.current = props.onClick;
      return <IconButton {...props} />;
    };
  }, []);

  const RightArrowButton = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return (props: IconButtonProps) => {
      rightArrowOnClickRef.current = props.onClick;
      return <IconButton {...props} />;
    };
  }, []);

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

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

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
    (props: Omit<PickersDayProps, 'ref'>) => {
      return <PickersDay {...props} selected={props.day.isSame(value, 'date')} />;
    },
    [value]
  );

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  useForwardRef(
    ref,
    useMemo((): PrivateStaticDatePickerCommands => ({}), [])
  );

  /********************************************************************************************************************
   * Render - Function
   * ******************************************************************************************************************/

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

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Grid container className={classNames('PrivateStaticDatePicker', type)}>
      {type !== 'time' && (
        <Grid>
          <Grid container direction='column'>
            <Grid sx={{ p: 2, width: '100%' }}>
              <Grid container className='month-change-arrow-wrap'>
                <Grid flex={1} className='month-title-container'>
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
                  <Grid style={{ textAlign: 'right' }}>
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
            <Grid style={{ position: 'relative' }}>
              <StaticDatePicker
                {...props}
                value={activeMonthValue}
                referenceDate={month}
                slots={{
                  previousIconButton: LeftArrowButton,
                  nextIconButton: RightArrowButton,
                  day: handleRenderDay,
                  actionBar: () => <></>,
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
            <Grid className='action-buttons'>
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
        <PrivateTimeSection
          time={time}
          cols={type === 'time' ? 3 : 1}
          width={type === 'time' ? 240 : 80}
          availableDate={availableDate}
          hourSelectRef={hourSelectRef}
          minuteSelectRef={minuteSelectRef}
          secondSelectRef={secondSelectRef}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          minuteInterval={minuteInterval}
          secondInterval={secondInterval}
          value={value}
          onChange={onChange}
          onClose={onClose}
        />
      )}
    </Grid>
  );
};

export default PrivateStaticDatePicker;
