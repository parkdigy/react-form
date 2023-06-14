import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { SearchGroupDefaultProps as Props, SearchGroupProps } from './SearchGroup.types';
import { Grid } from '@mui/material';
import { FormHidden } from '../../FormItemTextFieldBase';

const isReactFragment = (child: ReactElement) => {
  try {
    return child.type.toString() === React.Fragment.toString();
  } catch (e) {
    return false;
  }
};

const removeReactFragment = (el: ReactElement): any => {
  if (isReactFragment(el)) {
    const children: ReactElement | ReactElement[] = el.props.children;
    if (children) {
      if (Array.isArray(children)) {
        return children.map((child) => {
          if (React.isValidElement(child)) {
            return removeReactFragment(child);
          } else {
            return (
              <Grid item style={{ display: child === FormHidden ? 'none' : undefined }}>
                {child}
              </Grid>
            );
          }
        });
      } else {
        return (
          <Grid item style={{ display: el.type === FormHidden ? 'none' : undefined }}>
            {el}
          </Grid>
        );
      }
    } else {
      return (
        <Grid item style={{ display: el.type === FormHidden ? 'none' : undefined }}>
          {el}
        </Grid>
      );
    }
  } else {
    return (
      <Grid item style={{ display: el.type === FormHidden ? 'none' : undefined }}>
        {el}
      </Grid>
    );
  }
};

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

  const justifyContent = useMemo(() => {
    switch (align) {
      case undefined:
      case 'left':
        return 'start';
      case 'center':
        return 'center';
      case 'right':
        return 'end';
    }
  }, [align]);

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
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return removeReactFragment(child);
          } else {
            return child;
          }
        })}
      </Grid>
    </Grid>
  );
};

SearchGroup.defaultProps = Props;

export default SearchGroup;
