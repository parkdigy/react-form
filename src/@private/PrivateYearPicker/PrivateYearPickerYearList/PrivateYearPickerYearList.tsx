import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PrivateYearPickerYearListProps as Props } from './PrivateYearPickerYearList.types';
import PrivateYearPickerYear from '../PrivateYearPickerYear';
import { StyledContainer } from './PrivateYearPickerYearList.style.private';

let _lastCloseTime = 0;

const PrivateYearPickerYearList: React.FC<Props> = ({
  value,
  minYear,
  maxYear,
  disablePast,
  disableFuture,
  selectFromYear,
  selectToYear,
  onChange,
}) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const yearsContainerRef = useRef<HTMLDivElement>(null);
  const defaultButtonRef = useRef<HTMLDivElement | null>(null);
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
    const container = yearsContainerRef.current;
    const startButton = startButtonRef.current;
    const endButton = endButtonRef.current;
    const defaultButton = defaultButtonRef.current;

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
          if (selectFromYear && scrollY > startButtonTop - 4) {
            scrollY = startButtonTop - 4;
          } else if (selectToYear && scrollY + containerHeight < endButtonBottom + 4) {
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
      } else if (defaultButton) {
        const defaultButtonTop = defaultButton.offsetTop - containerTop - 4;
        const defaultButtonBottom = defaultButtonTop + defaultButton.offsetHeight + 8;
        const center = defaultButtonTop + (defaultButtonBottom - defaultButtonTop) / 2;
        container.scrollTo(0, center - containerHalf);
      }
    }

    return () => {
      _lastCloseTime = new Date().getTime();
    };
  }, [selectFromYear, selectToYear]);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const nowYear = useMemo(() => new Date().getFullYear(), []);

  const defaultYear = useMemo(() => {
    const newDefaultYear = nowYear;
    if (newDefaultYear < minYear) {
      return minYear;
    } else if (newDefaultYear > maxYear) {
      return maxYear;
    } else {
      return newDefaultYear;
    }
  }, [nowYear, minYear, maxYear]);

  const years = useMemo(() => {
    const newYears: {
      year: number;
      range?: boolean;
      isDefault?: boolean;
      active?: boolean;
      selected?: boolean;
      selectedStart?: boolean;
      selectedEnd?: boolean;
      selectedTemp?: boolean;
      disabled?: boolean;
    }[] = [];
    const startYear = selectFromYear ? selectFromYear : value ? value : 0;
    const endYear = selectToYear ? selectToYear : value ? value : 0;
    const range = !!selectFromYear || !!selectToYear;

    for (let i = minYear; i <= maxYear; i += 1) {
      newYears.push({
        year: i,
        range,
        isDefault: !value && !selectFromYear && !selectToYear && i === defaultYear,
        active: (!!selectFromYear || !!selectToYear) && i === value,
        selected: i >= startYear && i <= endYear,
        selectedStart: i === startYear,
        selectedEnd: i === endYear,
        selectedTemp:
          (!!selectToYear && !!mouseOverYear && i < endYear && i >= mouseOverYear) ||
          (!!selectFromYear && !!mouseOverYear && i > startYear && i <= mouseOverYear),
        disabled: (disablePast && i < nowYear) || (disableFuture && i > nowYear),
      });
    }
    return newYears;
  }, [
    selectFromYear,
    value,
    selectToYear,
    minYear,
    maxYear,
    defaultYear,
    mouseOverYear,
    disablePast,
    nowYear,
    disableFuture,
  ]);

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
    <StyledContainer className='PrivateYearPickerYearList' container ref={yearsContainerRef}>
      {years.map((info) => (
        <PrivateYearPickerYear
          key={info.year}
          ref={(ref) => {
            if (info.selectedStart) {
              startButtonRef.current = ref;
              if (info.selectedEnd) {
                endButtonRef.current = ref;
              }
            } else if (info.selectedEnd) {
              endButtonRef.current = ref;
            } else if (info.isDefault) {
              defaultButtonRef.current = ref;
            }
          }}
          year={info.year}
          range={info.range}
          isDefault={info.isDefault}
          active={info.active}
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

export default PrivateYearPickerYearList;
