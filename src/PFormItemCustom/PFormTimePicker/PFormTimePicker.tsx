import React, { useCallback } from 'react';
import classNames from 'classnames';
import { PFormTimePickerProps as Props, PFormTimePickerCommands } from './PFormTimePicker.types';
import { PrivateDateTimePicker, PrivateDateTimePickerCommands } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';

const PFormTimePicker = React.forwardRef<PFormTimePickerCommands, Props>(({ className, ...props }, ref) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PrivateDateTimePickerCommands) => {
      commands.getType = () => 'PFormTimePicker';
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
      <PrivateDateTimePicker className={classNames(className, 'PFormTimePicker')} {...props} ref={ref} type='time' />
    </PFormContextProvider>
  );
});

PFormTimePicker.displayName = 'PFormTimePicker';

export default PFormTimePicker;
