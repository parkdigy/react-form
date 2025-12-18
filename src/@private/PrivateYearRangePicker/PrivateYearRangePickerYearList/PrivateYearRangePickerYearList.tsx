import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PrivateYearRangePickerYearListProps as Props } from './PrivateYearRangePickerYearList.types';
import PrivateYearRangePickerYear from '../PrivateYearRangePickerYear';
import { StyledContainer } from './PrivateYearRangePickerYearList.style.private';

let _lastCloseTime = 0;

const PrivateYearRangePickerYearList = ({
  value,
  displayValue,
  selectType,
  minYear,
  maxYear,
  disablePast,
  disableFuture,
  onChange,
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const yearsContainerRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useRef<HTMLDivElement | null>(null);
  const endButtonRef = useRef<HTMLDivElement | null>(null);
  const mouseOverTimer = useRef<NodeJS.Timeout>(undefined);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [mouseOverYear, setMouseOverYear] = useState<number>();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    return () => {
      if (mouseOverTimer.current) {
        clearTimeout(mouseOverTimer.current);
        mouseOverTimer.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (!displayValue[0]) {
      startButtonRef.current = null;
    }
    if (!value[1]) {
      endButtonRef.current = null;
    }
  }, [displayValue, value]);

  useEffect(() => {
    const container = yearsContainerRef.current;
    const startButton = startButtonRef.current;
    const endButton = endButtonRef.current;

    if (container) {
      const containerScrollTop = container.scrollTop;
      const containerScrollBottom = container.scrollTop + container.offsetHeight;
      const containerTop = container.offsetTop;
      const containerHalf = container.offsetHeight / 2;
      const containerHeight = container.offsetHeight;

      if (startButton && endButton) {
        if (new Date().getTime() - _lastCloseTime > 100) {
          const startButtonTop = startButton.offsetTop - containerTop;
          const endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop;
          const center = startButtonTop + (endButtonBottom - startButtonTop) / 2;
          let scrollY = center - containerHalf;
          if (selectType === 'start' && scrollY > startButtonTop - 4) {
            scrollY = startButtonTop - 4;
          } else if (selectType === 'end' && scrollY + containerHeight < endButtonBottom + 4) {
            scrollY = endButtonBottom + 4 - containerHeight;
          }

          container.scrollTo(0, scrollY);
        }
      } else if (startButton) {
        const startButtonTop = startButton.offsetTop - containerTop - 4;
        const startButtonBottom = startButtonTop + startButton.offsetHeight + 8;

        if (startButtonTop < containerScrollTop || startButtonBottom > containerScrollBottom) {
          container.scrollTo(0, startButtonTop);
        }
      } else if (endButton) {
        const endButtonBottom = endButton.offsetTop + endButton.offsetHeight - containerTop + 4;
        container.scrollTo(0, endButtonBottom - containerHeight);
      }
    }

    return () => {
      _lastCloseTime = new Date().getTime();
    };
  }, [selectType]);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const nowYear = useMemo(() => new Date().getFullYear(), []);

  const years = useMemo(() => {
    const newYears: {
      year: number;
      isDefault?: boolean;
      selected?: boolean;
      selectedStart?: boolean;
      selectedEnd?: boolean;
      selectedTemp?: boolean;
      disabled?: boolean;
    }[] = [];
    for (let i = minYear; i <= maxYear; i += 1) {
      newYears.push({
        year: i,
        isDefault: !value[0] && !value[1] && i === displayValue[0],
        selected: !!value[0] && !!value[1] && i >= value[0] && i <= value[1],
        selectedStart: i === value[0],
        selectedEnd: i === value[1],
        selectedTemp:
          (selectType === 'start' && !!value[1] && !!mouseOverYear && i < value[1] && i >= mouseOverYear) ||
          (selectType === 'end' && !!value[0] && !!mouseOverYear && i > value[0] && i <= mouseOverYear),
        disabled: (disablePast && i < nowYear) || (disableFuture && i > nowYear),
      });
    }
    return newYears;
  }, [minYear, maxYear, value, displayValue, selectType, mouseOverYear, disablePast, nowYear, disableFuture]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const mouseOver = useCallback((year: number | undefined) => {
    if (mouseOverTimer.current) {
      clearTimeout(mouseOverTimer.current);
      mouseOverTimer.current = undefined;
    }
    if (year) {
      setMouseOverYear(year);
    } else {
      mouseOverTimer.current = setTimeout(() => {
        mouseOverTimer.current = undefined;
        setMouseOverYear(undefined);
      }, 100);
    }
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledContainer className='PrivateYearRangePickerYearList' container ref={yearsContainerRef}>
      {years.map((info) => (
        <PrivateYearRangePickerYear
          key={info.year}
          ref={(ref) => {
            if (info.selectedStart) {
              startButtonRef.current = ref;
              if (info.selectedEnd) {
                endButtonRef.current = ref;
              }
            } else if (info.selectedEnd) {
              endButtonRef.current = ref;
            }
          }}
          year={info.year}
          isDefault={info.isDefault}
          selected={info.selected}
          selectedStart={info.selectedStart}
          selectedEnd={info.selectedEnd}
          selectedTemp={info.selectedTemp}
          disabled={info.disabled}
          onClick={() => onChange(info.year)}
          onMouseEnter={() => mouseOver(info.year)}
          onMouseLeave={() => mouseOver(undefined)}
        />
      ))}
    </StyledContainer>
  );
};

export default PrivateYearRangePickerYearList;
