import React from 'react';
import { PrivateMonthSelectProps as Props } from './PrivateMonthSelect.types';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import PrivateToggleButton from '../PrivateToggleButton';
import './PrivateMonthSelect.scss';

const MONTHS = new Array(12).fill(0);
for (let i = 0; i < 12; i += 1) {
  MONTHS[i] = i;
}

const PrivateMonthSelect: React.FC<Props> = ({
  year,
  selectYear,
  selectMonth,
  activeMonth,
  availableDate,
  onSelect,
}) => {
  const today = dayjs().startOf('date');

  return (
    <div className='PrivateMonthSelect'>
      <Grid container style={{ padding: '5px 10px' }} spacing={1}>
        {MONTHS.map((m) => {
          const isToday = today.year() === year && m === today.month();
          const isActive = m === activeMonth;
          const isSelected = selectYear === year && m === selectMonth;
          const ym = year * 100 + (m + 1);
          const disabled =
            (!!availableDate[0] && ym < availableDate[0].month) || (!!availableDate[1] && ym > availableDate[1].month);

          return (
            <Grid key={m} size={{ xs: 4 }}>
              <PrivateToggleButton
                fullWidth
                selected={isSelected}
                activated={isActive}
                outlined={isToday}
                disabled={disabled}
                onClick={() => onSelect(m)}
              >
                {m + 1}월
              </PrivateToggleButton>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PrivateMonthSelect;
