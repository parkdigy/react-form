import React, { useCallback } from 'react';
import classNames from 'classnames';
import { PrivateToggleButtonProps as Props, PrivateToggleButtonDefaultProps } from './PrivateToggleButton.types';
import { Button, useTheme, darken } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';
import { CommonSxProps } from '../../@types';

const PrivateToggleButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className: initClassName, selected, activated, outlined, ...props }, ref) => {
    const theme = useTheme();

    const [className] = useAutoUpdateState<Props['className']>(
      useCallback(() => {
        return classNames(initClassName, selected && 'selected', activated && 'activated', outlined && 'outlined');
      }, [initClassName, selected, activated, outlined])
    );

    const [sx] = useAutoUpdateState<CommonSxProps['sx']>(
      useCallback(() => {
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
      }, [selected, activated, outlined])
    );

    return (
      <Button {...props} ref={ref} sx={sx} variant='text' className={classNames(className, selected && 'selected')}>
        {children}
      </Button>
    );
  }
);

PrivateToggleButton.displayName = 'PrivateToggleButton';
PrivateToggleButton.defaultProps = PrivateToggleButtonDefaultProps;

export default PrivateToggleButton;
