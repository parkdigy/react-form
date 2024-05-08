import React, { useMemo } from 'react';
import classNames from 'classnames';
import { PrivateToggleButtonProps as Props } from './PrivateToggleButton.types';
import { Button, useTheme, darken } from '@mui/material';
import { CommonSxProps } from '../../@types';

const PrivateToggleButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className: initClassName, selected, activated, outlined, ...props }, ref) => {
    const theme = useTheme();

    const className = useMemo(
      () => classNames(initClassName, selected && 'selected', activated && 'activated', outlined && 'outlined'),
      [activated, initClassName, outlined, selected]
    );

    const sx = useMemo(() => {
      const newSx: CommonSxProps['sx'] = {
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

    return (
      <Button {...props} ref={ref} sx={sx} variant='text' className={classNames(className, selected && 'selected')}>
        {children}
      </Button>
    );
  }
);

PrivateToggleButton.displayName = 'PrivateToggleButton';

export default PrivateToggleButton;
