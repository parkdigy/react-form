import React, { useCallback } from 'react';
import classNames from 'classnames';
import { SearchGroupDefaultProps as Props, SearchGroupProps } from './SearchGroup.types';
import { Grid, GridProps } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';

const SearchGroup: React.FC<SearchGroupProps> = ({
  children,
  className,
  style,
  sx,
  //--------------------------------------------------------------------------------------------------------------------
  max,
  align,
  hidden,
  spacing,
}) => {
  // State -----------------------------------------------------------------------------------------------------------

  const [justifyContent] = useAutoUpdateState<GridProps['justifyContent']>(
    useCallback(() => {
      switch (align) {
        case undefined:
        case 'left':
          return 'start';
        case 'center':
          return 'center';
        case 'right':
          return 'end';
      }
    }, [align])
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <Grid
      item
      className={classNames(className, 'SearchGroup')}
      style={{ flex: max ? 1 : undefined, display: hidden ? 'none' : undefined }}
    >
      <Grid
        container
        wrap='wrap'
        spacing={spacing}
        justifyContent={justifyContent}
        alignItems='start'
        style={style}
        sx={sx}
      >
        {React.Children.map(children, (child, idx) => (
          <Grid key={idx} item>
            {child}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

SearchGroup.defaultProps = Props;

export default SearchGroup;
