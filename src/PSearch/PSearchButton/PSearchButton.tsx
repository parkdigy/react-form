import React from 'react';
import classNames from 'classnames';
import { PSearchButtonProps as Props } from './PSearchButton.types';
import { PButton } from '@pdg/react-component';
import { ifUndefined } from '@pdg/compare';

const PSearchButton = ({ children, className, size, sx: initSx, ...props }: Props) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PButton
      className={classNames(className, 'PSearchButton')}
      size={ifUndefined(size, 'medium')}
      sx={{ minWidth: 0, px: `${!children ? 9 : 13}px !important`, ...initSx }}
      fullWidth={false}
      {...props}
    >
      {children}
    </PButton>
  );
};

export default PSearchButton;
