import React, { useCallback } from 'react';
import classNames from 'classnames';
import { PFormDateTimePickerProps as Props, PFormDateTimePickerCommands } from './PFormDateTimePicker.types';
import { PrivateDateTimePickerCommands, PrivateDateTimePicker } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';

const PFormDateTimePicker = React.forwardRef<PFormDateTimePickerCommands, Props>(({ className, ...props }, ref) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDateTimePickerCommands) => {
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
