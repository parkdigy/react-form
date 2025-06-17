import React from 'react';
import classNames from 'classnames';
import { SearchButtonProps as Props } from './SearchButton.types';
import { PdgButton } from '@pdg/react-component';
import { ifUndefined } from '@pdg/compare';

const SearchButton: React.FC<Props> = ({ children, className, size, sx: initSx, ...props }) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PdgButton
      className={classNames(className, 'SearchButton')}
      size={ifUndefined(size, 'medium')}
      sx={{ minWidth: 0, px: `${!children ? 9 : 13}px !important`, ...initSx }}
      fullWidth={false}
      {...props}
    >
      {children}
    </PdgButton>
  );
};

export default React.memo(SearchButton);
