import React, { useCallback, useId, useMemo, useState } from 'react';
import classNames from 'classnames';
import { PSearchMenuButtonProps as Props } from './PSearchMenuButton.types';
import { PFormButton } from '../../PFormCommon';
import { Menu, PopoverOrigin } from '@mui/material';

const PSearchMenuButton = ({ children, className, sx: initSx, menuList, placement, ...props }: Props) => {
  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const buttonId = useId();
  const menuId = useId();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [endIcon, setEndIcon] = useState('ArrowDropDown');

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setEndIcon('ArrowDropUp');
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setEndIcon('ArrowDropDown');
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const { open, anchorOrigin, transformOrigin } = useMemo(() => {
    const _open = !!anchorEl;

    const _anchorOrigin: PopoverOrigin =
      placement || 'bottom' === 'bottom'
        ? { vertical: 'bottom', horizontal: 'center' }
        : placement === 'bottom-left'
          ? { vertical: 'bottom', horizontal: 'left' }
          : placement === 'bottom-right'
            ? { vertical: 'bottom', horizontal: 'right' }
            : placement === 'top'
              ? { vertical: 'top', horizontal: 'center' }
              : placement === 'top-left'
                ? { vertical: 'top', horizontal: 'left' }
                : placement === 'top-right'
                  ? { vertical: 'top', horizontal: 'right' }
                  : placement === 'left'
                    ? { vertical: 'center', horizontal: 'left' }
                    : placement === 'left-top'
                      ? { vertical: 'top', horizontal: 'left' }
                      : placement === 'left-bottom'
                        ? { vertical: 'bottom', horizontal: 'left' }
                        : placement === 'right'
                          ? { vertical: 'center', horizontal: 'right' }
                          : placement === 'right-top'
                            ? { vertical: 'top', horizontal: 'right' }
                            : placement === 'right-bottom'
                              ? { vertical: 'bottom', horizontal: 'right' }
                              : { vertical: 'bottom', horizontal: 'center' };

    const _transformOrigin: PopoverOrigin =
      placement || 'bottom' === 'bottom'
        ? { vertical: 'top', horizontal: 'center' }
        : placement === 'bottom-left'
          ? { vertical: 'top', horizontal: 'left' }
          : placement === 'bottom-right'
            ? { vertical: 'top', horizontal: 'right' }
            : placement === 'top'
              ? { vertical: 'bottom', horizontal: 'center' }
              : placement === 'top-left'
                ? { vertical: 'bottom', horizontal: 'left' }
                : placement === 'top-right'
                  ? { vertical: 'bottom', horizontal: 'right' }
                  : placement === 'left'
                    ? { vertical: 'center', horizontal: 'right' }
                    : placement === 'left-top'
                      ? { vertical: 'top', horizontal: 'right' }
                      : placement === 'left-bottom'
                        ? { vertical: 'bottom', horizontal: 'right' }
                        : placement === 'right'
                          ? { vertical: 'center', horizontal: 'left' }
                          : placement === 'right-top'
                            ? { vertical: 'top', horizontal: 'left' }
                            : placement === 'right-bottom'
                              ? { vertical: 'bottom', horizontal: 'left' }
                              : { vertical: 'top', horizontal: 'center' };

    return { open: _open, anchorOrigin: _anchorOrigin, transformOrigin: _transformOrigin };
  }, [anchorEl, placement]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <PFormButton
        className={classNames(className, 'PSearchMenuButton')}
        size='medium'
        sx={{ minWidth: 0, px: `${!children ? 9 : 13}px !important`, ...initSx }}
        fullWidth={false}
        {...props}
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        endIcon={endIcon}
        endIconProps={{ style: { marginRight: -5 } }}
        onClick={handleClick}
      >
        {children}
      </PFormButton>
      <Menu
        id={menuId}
        aria-labelledby={buttonId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {menuList}
      </Menu>
    </>
  );
};

export default PSearchMenuButton;
