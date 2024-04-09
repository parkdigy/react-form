import React, { useMemo } from 'react';
import classNames from 'classnames';
import { SearchButtonProps as Props, SearchButtonDefaultProps } from './SearchButton.types';
import { PdgButton } from '@pdg/react-component';

const SearchButton: React.FC<Props> = ({ children, className, sx: initSx, startIcon, endIcon, icon, ...props }) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const sx = useMemo(() => ({ minWidth: 0, px: `${!children ? 9 : 13}px !important`, ...initSx }), [children, initSx]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PdgButton
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
    </PdgButton>
  );
};

SearchButton.defaultProps = SearchButtonDefaultProps;

export default SearchButton;
