import React, { useEffect, useRef } from 'react';
import { Paper, Grid } from '@mui/material';
import { SearchProps as Props, SearchCommands, SearchDefaultProps } from './Search.types';
import { Form, FormCommands } from '../../Form';
import { FormCol, FormRow } from '../../FormLayout';
import FormContextProvider from '../../FormContextProvider';

const Search = React.forwardRef<SearchCommands, Props>(
  (
    {
      children,
      className,
      style,
      sx,
      //----------------------------------------------------------------------------------------------------------------
      color,
      spacing,
      focused,
      labelShrink,
      autoSubmit,
      ...otherProps
    },
    ref
  ) => {
    // Ref -------------------------------------------------------------------------------------------------------------

    const formRef = useRef<FormCommands>();

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (autoSubmit) {
        formRef.current?.submit();
      }
    }, []);

    // Render ----------------------------------------------------------------------------------------------------------

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
            <FormRow>
              <FormCol>
                <Grid container spacing={1} alignItems='center'>
                  {children}
                </Grid>
              </FormCol>
            </FormRow>
          </Form>
        </Paper>
      </FormContextProvider>
    );
  }
);

Search.displayName = 'Search';
Search.defaultProps = SearchDefaultProps;

export default Search;
