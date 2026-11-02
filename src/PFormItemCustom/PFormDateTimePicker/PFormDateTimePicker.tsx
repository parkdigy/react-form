import { PrivateDateTimePickerInternal } from '../../@private/PrivateDateTimePicker/PrivateDateTimePicker';
import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { type PFormDateTimePickerProps as Props, type PFormDateTimePickerValue } from './PFormDateTimePicker.types';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';
import { type PFormValueItemCommands } from '../../@types';
import dayjs, { Dayjs } from 'dayjs';

export const PFormDateTimePickerInternal = ({
  embedded = false,
  ref,
  className,
  time,
  minDate: initMinDate,
  maxDate: initMaxDate,
  disablePast,
  disableFuture,
  ...props
}: Props & { embedded?: boolean }) => {
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
      commands.getType = () => (embedded ? 'PFormEmbedDateTimePicker' : 'PFormDateTimePicker');
      onAddValueItem(id, commands);
    },
    [embedded, onAddValueItem]
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
      <PrivateDateTimePickerInternal
        embedded={embedded}
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

const PFormDateTimePicker = (props: Props) => <PFormDateTimePickerInternal {...props} />;

export default PFormDateTimePicker;
