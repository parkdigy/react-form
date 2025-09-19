import React, { useCallback } from 'react';
import classNames from 'classnames';
import { PFormTimePickerProps as Props, PFormTimePickerCommands, PFormTimePickerValue } from './PFormTimePicker.types';
import { PrivateDateTimePicker } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';
import { PFormValueItemCommands } from '../../@types';

const PFormTimePicker = React.forwardRef<PFormTimePickerCommands, Props>(({ className, ...props }, ref) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState<PFormTimePickerValue, false>();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<PFormTimePickerValue, false>) => {
      commands.getType = () => 'PFormTimePicker';
      onAddValueItem(id, commands);
    },
    [onAddValueItem]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormContextProvider<PFormTimePickerValue, false>
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
