import React, { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import { Paper } from '@mui/material';
import { PSearchProps as Props } from './PSearch.types';
import { PForm, PFormCommands } from '../../PForm';
import { PFormBody } from '../../PFormLayout';
import PFormContextProvider from '../../PFormContextProvider';
import { PFormContextValue } from '../../PFormContext';
import PSearchGroupRow from '../PSearchGroupRow';
import { useAutoUpdateRef } from '@pdg/react-hook';

const PSearch = ({
  ref,
  children,
  className,
  style,
  sx,
  //----------------------------------------------------------------------------------------------------------------
  color = 'primary',
  spacing,
  focused,
  labelShrink,
  autoSubmit,
  ...otherProps
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const formRef = useRef<PFormCommands>(undefined);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  const autoSubmitRef = useAutoUpdateRef(autoSubmit);
  useEffect(() => {
    if (autoSubmitRef.current) {
      formRef.current?.submit();
    }
  }, [autoSubmitRef]);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const renderChildren = useMemo(() => {
    const rowItems: ReactNode[] = [];
    const basicRowItems: ReactNode[] = [];

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type.toString() === PSearchGroupRow.toString()) {
          rowItems.push(child);
        } else {
          basicRowItems.push(child);
        }
      }
    });

    if (basicRowItems.length > 0) {
      return [<PSearchGroupRow key='$basicRow$'>{basicRowItems}</PSearchGroupRow>, ...rowItems];
    } else {
      return rowItems;
    }
  }, [children]);

  /********************************************************************************************************************
   * FormContextValue
   * ******************************************************************************************************************/

  const emptyHandler = useCallback(() => {
    //
  }, []);

  const handleRequestSubmit = useCallback(() => {
    formRef.current?.submit();
  }, []);

  const handleRequestSearchSubmit = useCallback(() => {
    if (autoSubmit) {
      formRef.current?.submit();
    }
  }, [autoSubmit]);

  const formContextValue = useMemo(
    () =>
      ({
        id: 'search',
        variant: 'outlined',
        size: 'small',
        color,
        spacing,
        focused,
        labelShrink,
        fullWidth: false,
        onAddValueItem: emptyHandler,
        onRemoveValueItem: emptyHandler,
        onValueChange: emptyHandler,
        onValueChangeByUser: emptyHandler,
        onRequestSubmit: handleRequestSubmit,
        onRequestSearchSubmit: handleRequestSearchSubmit,
      }) as PFormContextValue,
    [color, emptyHandler, focused, handleRequestSearchSubmit, handleRequestSubmit, labelShrink, spacing]
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleRef = useCallback(
    (commands: PFormCommands | null) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }

      formRef.current = commands || undefined;
    },
    [ref]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormContextProvider value={formContextValue}>
      <Paper variant='outlined' className={className} sx={{ p: 1.5, ...sx }} style={style}>
        <PForm
          ref={handleRef}
          className='PSearch'
          variant='outlined'
          size='small'
          color={color}
          spacing={spacing}
          focused={focused}
          labelShrink={labelShrink}
          fullWidth={false}
          {...otherProps}
        >
          <PFormBody>{renderChildren}</PFormBody>
        </PForm>
      </Paper>
    </PFormContextProvider>
  );
};

export default PSearch;
