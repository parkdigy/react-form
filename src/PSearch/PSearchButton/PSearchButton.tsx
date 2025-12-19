import React from 'react';
import classNames from 'classnames';
import { PSearchButtonProps as Props } from './PSearchButton.types';
import { PButton } from '@pdg/react-component';

const PSearchButton = ({ children, className, size = 'medium', sx: initSx, ...props }: Props) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PButton
      className={classNames(className, 'PSearchButton')}
      size={size}
      sx={{ minWidth: 0, px: `${!children ? 9 : 13}px !important`, ...initSx }}
      fullWidth={false}
      {...props}
    >
      {children}
    </PButton>
  );
};

export default PSearchButton;
