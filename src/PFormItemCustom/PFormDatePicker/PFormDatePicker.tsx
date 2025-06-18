import React, { useCallback } from 'react';
import classNames from 'classnames';
import { PFormDatePickerProps as Props, PFormDatePickerCommands } from './PFormDatePicker.types';
import { PrivateDatePicker, PrivateDatePickerCommands } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';

const PFormDatePicker = React.forwardRef<PFormDatePickerCommands, Props>(({ className, ...props }, ref) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDatePickerCommands) => {
      commands.getType = () => 'PFormDatePicker';
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
      <PrivateDatePicker className={classNames(className, 'PFormDatePicker')} {...props} ref={ref} type='date' />
    </PFormContextProvider>
  );
});

PFormDatePicker.displayName = 'PFormDatePicker';

export default PFormDatePicker;
