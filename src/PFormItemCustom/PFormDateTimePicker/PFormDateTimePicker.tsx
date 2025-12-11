import React, { useCallback } from 'react';
import classNames from 'classnames';
import {
  PFormDateTimePickerProps as Props,
  PFormDateTimePickerCommands,
  PFormDateTimePickerValue,
} from './PFormDateTimePicker.types';
import { PrivateDateTimePicker } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';
import { PFormValueItemCommands } from '../../@types';

const PFormDateTimePicker = React.forwardRef<PFormDateTimePickerCommands, Props>(({ className, ...props }, ref) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState<PFormDateTimePickerValue, false>();

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
        className={classNames(className, 'PFormDateTimePicker')}
        {...props}
        ref={ref}
        type='date_time'
      />
    </PFormContextProvider>
  );
});

PFormDateTimePicker.displayName = 'PFormDateTimePicker';

export default PFormDateTimePicker;
