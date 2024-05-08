import React, { useEffect, useRef } from 'react';
import { PrivateYearSelectProps as Props } from './PrivateYearSelect.types';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import './PrivateYearSelect.scss';
import PrivateToggleButton from '../PrivateToggleButton';
import SimpleBar from 'simplebar-react';

const YEARS = new Array(200).fill(0);
for (let i = 0; i < 200; i += 1) {
  YEARS[i] = 1900 + i;
}

const PrivateYearSelect: React.FC<Props> = ({ selectYear, activeYear, availableDate, onSelect }) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const containerRef = useRef<HTMLDivElement>(null);
  const simpleBarRef = useRef<HTMLDivElement>(null);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const activeEls = containerRef.current?.getElementsByClassName(`private-year-select-value-${activeYear}`);
    if (activeEls && activeEls.length > 0) {
      const activeEl = activeEls[0];

      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      const simpleBarRect = simpleBarRef.current?.getBoundingClientRect();

      if (containerRect && simpleBarRect && activeRect) {
        const scrollTop = simpleBarRef.current?.scrollTop || 0;

        simpleBarRef.current?.scrollTo({
          left: 0,
          top: activeRect.top - containerRect.top - containerRect.height / 2 + activeRect.height / 2 + scrollTop,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const today = dayjs().startOf('date');

  return (
    <div ref={containerRef} className='PrivateYearSelect'>
      <SimpleBar scrollableNodeProps={{ ref: simpleBarRef }} style={{ height: '100%' }}>
        <Grid container style={{ padding: '5px 10px' }} spacing={1}>
          {YEARS.map((y) => {
            const isToday = y === today.year();
            const isActive = y === activeYear;
            const isSelected = y === selectYear;
            const disabled =
              (!!availableDate[0] && y < availableDate[0].year) || (!!availableDate[1] && y > availableDate[1].year);

            return (
              <Grid key={y} item xs={3}>
                <PrivateToggleButton
                  className={`private-year-select-value-${y}`}
                  fullWidth
                  selected={isSelected}
                  activated={isActive}
                  outlined={isToday}
                  disabled={disabled}
                  onClick={() => onSelect(y)}
                >
                  {y}
                </PrivateToggleButton>
              </Grid>
            );
          })}
        </Grid>
      </SimpleBar>
    </div>
  );
};

PrivateYearSelect.displayName = 'PrivateYearSelect';

export default PrivateYearSelect;
