import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { PFormDateTimePickerProps as Props, PFormDateTimePickerValue } from './PFormDateTimePicker.types';
import { PrivateDateTimePicker } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';
import { PFormValueItemCommands } from '../../@types';
import dayjs, { Dayjs } from 'dayjs';

const PFormDateTimePicker = ({
  ref,
  className,
  time,
  minDate: initMinDate,
  maxDate: initMaxDate,
  disablePast,
  disableFuture,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState<PFormDateTimePickerValue, false>();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const minDate = useMemo(() => {
    if (initMinDate && !disablePast) {
      let newMinDate: Dayjs;
      switch (time) {
        case 'hour':
          newMinDate = dayjs(initMinDate).set('minute', 0).set('second', 0);
          break;
        case 'minute':
          newMinDate = dayjs(initMinDate).set('second', 0);
          break;
        case 'second':
          newMinDate = initMinDate;
          break;
      }
      return newMinDate;
    } else {
      return initMinDate;
    }
  }, [disablePast, initMinDate, time]);

  const maxDate = useMemo(() => {
    if (initMaxDate && !disableFuture) {
      let newMaxDate: Dayjs;
      switch (time) {
        case 'hour':
          newMaxDate = dayjs(initMaxDate).set('minute', 59).set('second', 59);
          break;
        case 'minute':
          newMaxDate = dayjs(initMaxDate).set('second', 59);
          break;
        case 'second':
          newMaxDate = initMaxDate;
          break;
      }
      return newMaxDate;
    } else {
      return initMaxDate;
    }
  }, [disableFuture, initMaxDate, time]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<PFormDateTimePickerValue, false>) => {
      commands.getType = () => 'PFormDateTimePicker';
      onAddValueItem(id, commands);
    },
    [onAddValueItem]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormContextProvider
      value={{
        ...otherFormState,
        onAddValueItem: handleAddValueItem,
      }}
    >
      <PrivateDateTimePicker
        ref={ref}
        className={classNames(className, 'PFormDateTimePicker')}
        type='date_time'
        time={time}
        minDate={minDate}
        maxDate={maxDate}
        disablePast={disablePast}
        disableFuture={disableFuture}
        {...props}
      />
    </PFormContextProvider>
  );
};

export default PFormDateTimePicker;
