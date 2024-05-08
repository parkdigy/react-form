import React, { useMemo } from 'react';
import classNames from 'classnames';
import { SearchButtonProps as Props } from './SearchButton.types';
import { PdgButton } from '@pdg/react-component';
import { ifUndefined } from '@pdg/util';

const SearchButton: React.FC<Props> = ({ children, className, size, sx: initSx, ...props }) => {
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
      size={ifUndefined(size, 'medium')}
      sx={sx}
      fullWidth={false}
      {...props}
    >
      {children}
    </PdgButton>
  );
};

export default SearchButton;
