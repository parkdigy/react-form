import React, { useCallback, useRef } from 'react';
import { type PrivateYearSelectProps as Props } from './PrivateYearSelect.types';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import './PrivateYearSelect.scss';
import PrivateToggleButton from '../PrivateToggleButton';
import SimpleBar from 'simplebar-react';
import { useAutoUpdateRef, useEventEffect } from '@pdg/react-hook';

const YEARS = new Array(200).fill(0);
for (let i = 0; i < 200; i += 1) {
  YEARS[i] = 1900 + i;
}

const PrivateYearSelect = ({ selectYear, activeYear, availableDate, onSelect: initOnSelect }: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const containerRef = useRef<HTMLDivElement>(null);
  const simpleBarRef = useRef<HTMLDivElement>(null);
  const onSelectRef = useAutoUpdateRef(initOnSelect);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
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
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onSelectRef.current?.(Number((e.target as HTMLButtonElement).getAttribute('data-id')));
    },
    [onSelectRef]
  );

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
              <Grid key={y} size={{ xs: 3 }}>
                <PrivateToggleButton
                  data-id={y}
                  className={`private-year-select-value-${y}`}
                  fullWidth
                  selected={isSelected}
                  activated={isActive}
                  outlined={isToday}
                  disabled={disabled}
                  onClick={handleClick}
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

export default PrivateYearSelect;
