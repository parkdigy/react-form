import React, { useCallback, useId, useMemo, useState } from 'react';
import classNames from 'classnames';
import { SearchMenuButtonProps as Props, SearchMenuButtonDefaultProps } from './SearchMenuButton.types';
import { FormButton } from '../../FormCommon';
import { Menu, PopoverOrigin } from '@mui/material';

const SearchMenuButton: React.FC<Props> = ({
  children,
  className,
  sx: initSx,
  menuList,
  startIcon,
  icon,
  placement,
  ...props
}) => {
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

  const open = useMemo(() => !!anchorEl, [anchorEl]);

  const sx = useMemo(
    () => ({ minWidth: 0, px: `${!startIcon && !endIcon && !icon ? 9 : 13}px !important`, ...initSx }),
    [endIcon, icon, initSx, startIcon]
  );

  const anchorOrigin = useMemo((): PopoverOrigin => {
    switch (placement || 'bottom') {
      case 'bottom':
        return { vertical: 'bottom', horizontal: 'center' };
      case 'bottom-left':
        return { vertical: 'bottom', horizontal: 'left' };
      case 'bottom-right':
        return { vertical: 'bottom', horizontal: 'right' };
      case 'top':
        return { vertical: 'top', horizontal: 'center' };
      case 'top-left':
        return { vertical: 'top', horizontal: 'left' };
      case 'top-right':
        return { vertical: 'top', horizontal: 'right' };
      case 'left':
        return { vertical: 'center', horizontal: 'left' };
      case 'left-top':
        return { vertical: 'top', horizontal: 'left' };
      case 'left-bottom':
        return { vertical: 'bottom', horizontal: 'left' };
      case 'right':
        return { vertical: 'center', horizontal: 'right' };
      case 'right-top':
        return { vertical: 'top', horizontal: 'right' };
      case 'right-bottom':
        return { vertical: 'bottom', horizontal: 'right' };
    }
  }, [placement]);

  const transformOrigin = useMemo((): PopoverOrigin => {
    switch (placement || 'bottom') {
      case 'bottom':
        return { vertical: 'top', horizontal: 'center' };
      case 'bottom-left':
        return { vertical: 'top', horizontal: 'left' };
      case 'bottom-right':
        return { vertical: 'top', horizontal: 'right' };
      case 'top':
        return { vertical: 'bottom', horizontal: 'center' };
      case 'top-left':
        return { vertical: 'bottom', horizontal: 'left' };
      case 'top-right':
        return { vertical: 'bottom', horizontal: 'right' };
      case 'left':
        return { vertical: 'center', horizontal: 'right' };
      case 'left-top':
        return { vertical: 'top', horizontal: 'right' };
      case 'left-bottom':
        return { vertical: 'bottom', horizontal: 'right' };
      case 'right':
        return { vertical: 'center', horizontal: 'left' };
      case 'right-top':
        return { vertical: 'top', horizontal: 'left' };
      case 'right-bottom':
        return { vertical: 'bottom', horizontal: 'left' };
    }
  }, [placement]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <FormButton
        className={classNames(className, 'SearchMenuButton')}
        size='medium'
        sx={sx}
        fullWidth={false}
        startIcon={startIcon}
        icon={icon}
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
      </FormButton>
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

SearchMenuButton.defaultProps = SearchMenuButtonDefaultProps;

export default SearchMenuButton;
