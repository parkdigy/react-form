import React, { useMemo } from 'react';
import classNames from 'classnames';
import { SearchButtonProps as Props, SearchButtonDefaultProps } from './SearchButton.types';
import { FormButton } from '../../FormCommon';

const SearchButton: React.FC<Props> = ({ children, className, sx: initSx, startIcon, endIcon, icon, ...props }) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const sx = useMemo(
    () => ({ minWidth: 0, px: !startIcon && !endIcon && !icon ? 1.2 : 1.7, ...initSx }),
    [endIcon, icon, initSx, startIcon]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormButton
      className={classNames(className, 'SearchButton')}
      size='medium'
      sx={sx}
      fullWidth={false}
      startIcon={startIcon}
      endIcon={endIcon}
      icon={icon}
      {...props}
    >
      {children}
    </FormButton>
  );
};

SearchButton.defaultProps = SearchButtonDefaultProps;

export default SearchButton;
