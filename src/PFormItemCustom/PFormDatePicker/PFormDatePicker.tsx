import React, { useCallback } from 'react';
import classNames from 'classnames';
import { PFormDatePickerProps as Props, PFormDatePickerValue } from './PFormDatePicker.types';
import { PrivateDatePicker, PrivateDatePickerValue } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';
import { PFormValueItemCommands } from '../../@types';

const PFormDatePicker = ({ ref, className, ...props }: Props) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState<PFormDatePickerValue, false>();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<PrivateDatePickerValue, false>) => {
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
};

export default PFormDatePicker;
