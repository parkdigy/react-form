import React, { useMemo } from 'react';
import classNames from 'classnames';
import { PrivateToggleButtonProps as Props } from './PrivateToggleButton.types';
import { Button, useTheme, darken } from '@mui/material';
import { PCommonSxProps } from '../../@types';

const PrivateToggleButton = ({ ref, children, className, selected, activated, outlined, ...props }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const sx = useMemo(() => {
    const newSx: PCommonSxProps['sx'] = {
      color: 'inherit',
      ':hover': {
        backgroundColor: darken('#fff', 0.1),
      },
    };

    if (selected) {
      newSx.backgroundColor = theme.palette.primary.main;
      newSx.color = theme.palette.primary.contrastText;
      newSx[':hover'] = { backgroundColor: darken(theme.palette.primary.main, 0.2) };
    } else {
      if (activated) {
        newSx.backgroundColor = '#f5f5f5';
      }
      if (outlined) {
        newSx.border = '1px solid rgba(0, 0, 0, 0.1)';
      }
    }
    return newSx;
  }, [activated, outlined, selected, theme]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Button
      {...props}
      ref={ref}
      sx={sx}
      variant='text'
      className={classNames(
        className,
        selected && 'selected',
        activated && 'activated',
        outlined && 'outlined',
        selected && 'selected'
      )}
    >
      {children}
    </Button>
  );
};

export default PrivateToggleButton;
