import React, { ReactNode, useEffect, useMemo, useRef } from 'react';
import { Paper } from '@mui/material';
import { SearchProps as Props, SearchCommands } from './Search.types';
import { Form, FormCommands } from '../../Form';
import { FormBody } from '../../FormLayout';
import FormContextProvider from '../../FormContextProvider';
import SearchGroupRow from '../SearchGroupRow';

const Search = React.forwardRef<SearchCommands, Props>(
  (
    {
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
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const formRef = useRef<FormCommands>();

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (autoSubmit) {
        formRef.current?.submit();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const renderChildren = useMemo(() => {
      const rowItems: ReactNode[] = [];
      const basicRowItems: ReactNode[] = [];

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type.toString() === SearchGroupRow.toString()) {
            rowItems.push(child);
          } else {
            basicRowItems.push(child);
          }
        }
      });

      if (basicRowItems.length > 0) {
        return [<SearchGroupRow key='$basicRow$'>{basicRowItems}</SearchGroupRow>, ...rowItems];
      } else {
        return rowItems;
      }
    }, [children]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormContextProvider
        value={{
          id: 'search',
          variant: 'outlined',
          size: 'small',
          color,
          spacing,
          focused,
          labelShrink,
          fullWidth: false,
          // eslint-disable-next-line
          onAddValueItem() {},
          // eslint-disable-next-line
          onRemoveValueItem() {},
          // eslint-disable-next-line
          onValueChange() {},
          // eslint-disable-next-line
          onValueChangeByUser() {},
          onRequestSearchSubmit() {
            if (autoSubmit) {
              formRef.current?.submit();
            }
          },
        }}
      >
        <Paper variant='outlined' className={className} sx={{ p: 1.5, ...sx }} style={style}>
          <Form
            ref={(commands) => {
              if (ref) {
                if (typeof ref === 'function') {
                  ref(commands);
                } else {
                  ref.current = commands;
                }
              }

              formRef.current = commands || undefined;
            }}
            className='Search'
            variant='outlined'
            size='small'
            color={color}
            spacing={spacing}
            focused={focused}
            labelShrink={labelShrink}
            fullWidth={false}
            {...otherProps}
          >
            <FormBody>{renderChildren}</FormBody>
          </Form>
        </Paper>
      </FormContextProvider>
    );
  }
);

Search.displayName = 'Search';

export default Search;
