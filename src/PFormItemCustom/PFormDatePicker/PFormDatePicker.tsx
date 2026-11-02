import { PrivateDatePickerInternal } from '../../@private/PrivateDatePicker/PrivateDatePicker';
import React, { useCallback } from 'react';
import classNames from 'classnames';
import { type PFormDatePickerProps as Props, type PFormDatePickerValue } from './PFormDatePicker.types';
import { type PrivateDatePickerValue } from '../../@private';
import PFormContextProvider from '../../PFormContextProvider';
import { useFormState } from '../../PFormContext';
import { type PFormValueItemCommands } from '../../@types';

export const PFormDatePickerInternal = ({
  embedded = false,
  ref,
  className,
  ...props
}: Props & { embedded?: boolean }) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { onAddValueItem, ...otherFormState } = useFormState<PFormDatePickerValue, false>();

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleAddValueItem = useCallback(
    (id: string, commands: PFormValueItemCommands<PrivateDatePickerValue, false>) => {
      commands.getType = () => (embedded ? 'PFormEmbedDatePicker' : 'PFormDatePicker');
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
      <PrivateDatePickerInternal
        embedded={embedded}
        className={classNames(className, 'PFormDatePicker')}
        {...props}
        ref={ref}
        type='date'
      />
    </PFormContextProvider>
  );
};

const PFormDatePicker = (props: Props) => <PFormDatePickerInternal {...props} />;

export default PFormDatePicker;
