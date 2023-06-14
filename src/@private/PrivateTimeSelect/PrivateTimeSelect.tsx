import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import {
  PrivateTimeSelectProps as Props,
  PrivateTimeSelectDefaultProps,
  PrivateTimeSelectCommands,
} from './PrivateTimeSelect.types';
import SimpleBar from 'simplebar-react';
import PrivateToggleButton from '../PrivateToggleButton';
import './PrivateTimeSelect.scss';
import { Grid } from '@mui/material';

const DEFAULT_MINUTES = new Array(60).fill(0);
for (let i = 0; i < DEFAULT_MINUTES.length; i += 1) {
  DEFAULT_MINUTES[i] = i;
}

const PrivateTimeSelect = React.forwardRef<PrivateTimeSelectCommands, Props>(
  ({ list, listInterval, unit, value, cols, disableList, onSelect }, ref) => {
    // Ref -------------------------------------------------------------------------------------------------------------

    const containerRef = useRef<HTMLDivElement>(null);
    const simpleBarRef = useRef<HTMLDivElement>(null);
    const scrollTimerRef = useRef<NodeJS.Timer>();

    // Function - scrollToValue ----------------------------------------------------------------------------------------

    const scrollToValue = useCallback((value: number) => {
      const valueEls = containerRef.current?.getElementsByClassName(`private-time-select-value-${value}`);
      if (valueEls && valueEls.length > 0) {
        let lastSelectedTop = -1;
        let counter = 0;

        if (scrollTimerRef.current) {
          clearInterval(scrollTimerRef.current);
          scrollTimerRef.current = undefined;
        }

        const valueEl = valueEls[0];
        scrollTimerRef.current = setInterval(() => {
          const valueRect = valueEl.getBoundingClientRect();
          if (valueRect.top !== lastSelectedTop) {
            lastSelectedTop = valueRect.top;
          } else {
            counter += 1;
            if (counter === 5) {
              clearInterval(scrollTimerRef.current);
              scrollTimerRef.current = undefined;

              const containerRect = containerRef.current?.getBoundingClientRect();
              const simpleBarRect = simpleBarRef.current?.getBoundingClientRect();

              if (containerRect && simpleBarRect && valueRect) {
                const scrollTop = simpleBarRef.current?.scrollTop || 0;
                const valueTop = valueRect.top - containerRect.top + scrollTop;
                const valueBottom = valueTop + valueRect.height;
                const simpleBarVisibleTop = scrollTop;
                const simpleBarVisibleBottom = simpleBarVisibleTop + simpleBarRect.height;

                if (valueTop < simpleBarVisibleTop || valueBottom > simpleBarVisibleBottom) {
                  simpleBarRef.current?.scrollTo({
                    left: 0,
                    top:
                      valueRect.top - containerRect.top - containerRect.height / 2 + valueRect.height / 2 + scrollTop,
                  });
                }
              }
            }
          }
        }, 10);
      }
    }, []);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      return () => {
        if (scrollTimerRef.current) {
          clearInterval(scrollTimerRef.current);
          scrollTimerRef.current = undefined;
        }
      };
    }, []);

    useEffect(() => {
      if (value != null) {
        scrollToValue(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // LayoutEffect ----------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        const commands: PrivateTimeSelectCommands = {
          scrollToValue,
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
    }, [ref, scrollToValue]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <>
        <div ref={containerRef} className='PrivateTimeSelect'>
          <SimpleBar scrollableNodeProps={{ ref: simpleBarRef }} style={{ height: '100%' }}>
            <Grid container>
              {list
                .filter((v) => (listInterval ? v % listInterval === 0 : true))
                .map((v) => {
                  const isSelected = v === value;
                  const disabled = !!disableList && disableList.includes(v);

                  return (
                    <Grid item key={v} xs={12 / (cols || 1)}>
                      <PrivateToggleButton
                        className={`private-time-select-value-${v}`}
                        fullWidth
                        disabled={disabled}
                        selected={isSelected}
                        onClick={() => onSelect && onSelect(v)}
                      >
                        {v}
                        {unit}
                      </PrivateToggleButton>
                    </Grid>
                  );
                })}
            </Grid>
          </SimpleBar>
        </div>
      </>
    );
  }
);

PrivateTimeSelect.displayName = 'PrivateTimeSelect';
PrivateTimeSelect.defaultProps = PrivateTimeSelectDefaultProps;

export default PrivateTimeSelect;
