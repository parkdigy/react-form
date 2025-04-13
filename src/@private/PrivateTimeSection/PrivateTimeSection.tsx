import React, { useMemo } from 'react';
import { PrivateTimeSectionProps as Props } from './PrivateTimeSection.types';
import { Button, Grid } from '@mui/material';
import dayjs from 'dayjs';
import PrivateTimeSelect from '../PrivateTimeSelect';
import { isDateAvailable } from '../../@util.private';

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

export const PrivateTimeSection = ({
  time,
  width,
  cols,
  hours = DEFAULT_HOURS,
  minutes = DEFAULT_MINUTES,
  seconds = DEFAULT_SECONDS,
  availableDate,
  minuteInterval,
  secondInterval,
  value,
  hourSelectRef,
  minuteSelectRef,
  secondSelectRef,
  onClose,
  onChange,
}: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

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

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Grid className='time'>
      <Grid container direction='column' className='time-container'>
        <Grid className='time-title'>
          {time === 'hour' && (value ? value.format('HH시') : '00시')}
          {time === 'minute' && (value ? value.format('HH시 mm분') : '00시 00분')}
          {time === 'second' && (value ? value.format('HH시 mm분 ss초') : '00시 00분 00초')}
        </Grid>
        <Grid className='time-select-wrap'>
          <Grid container style={{ height: '100%' }}>
            <Grid style={{ position: 'relative', width }}>
              <PrivateTimeSelect
                ref={hourSelectRef}
                value={value && value.hour()}
                unit='시'
                list={hours}
                disableList={disableHours}
                cols={cols}
                onSelect={(newValue: number) => {
                  onChange('hour', value ? value.set('hour', newValue) : dayjs().startOf('date').set('hour', newValue));
                }}
              />
            </Grid>
            {(time === 'minute' || time === 'second') && (
              <Grid style={{ position: 'relative', width }}>
                <PrivateTimeSelect
                  ref={minuteSelectRef}
                  value={value && value.minute()}
                  unit='분'
                  list={minutes}
                  disableList={disableMinutes}
                  cols={cols}
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
              <Grid style={{ position: 'relative', width }}>
                <PrivateTimeSelect
                  ref={secondSelectRef}
                  value={value && value.second()}
                  unit='초'
                  list={seconds}
                  disableList={disableSeconds}
                  cols={cols}
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
          <Grid className='action-buttons'>
            <Button variant='text' onClick={onClose}>
              닫기
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default PrivateTimeSection;
