import React, { useCallback } from 'react';
import classNames from 'classnames';
import { SearchButtonProps as Props, SearchButtonDefaultProps } from './SearchButton.types';
import { FormButton } from '../../FormCommon';
import { useAutoUpdateState } from '@pdg/react-hook';

const SearchButton: React.FC<Props> = ({ children, className, sx: initSx, startIcon, endIcon, icon, ...props }) => {
  // State -----------------------------------------------------------------------------------------------------------

  const [sx] = useAutoUpdateState<Props['sx']>(
    useCallback(() => {
      return { minWidth: 0, px: !startIcon && !endIcon && !icon ? 1.2 : 1.7, ...initSx };
    }, [initSx, startIcon, endIcon, icon])
  );

  // Render ----------------------------------------------------------------------------------------------------------

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
