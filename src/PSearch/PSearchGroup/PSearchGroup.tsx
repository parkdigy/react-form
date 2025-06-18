import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { PSearchGroupProps } from './PSearchGroup.types';
import { Grid } from '@mui/material';
import { PFormHidden } from '../../PFormItemTextFieldBase';
import { StyledItem } from './PSearchGroup.style.private';

const isReactFragment = (child: ReactElement) => {
  try {
    return child.type.toString() === React.Fragment.toString();
  } catch {
    return false;
  }
};

const removeReactFragment = (el: ReactElement): any => {
  if (isReactFragment(el)) {
    const children: ReactElement | ReactElement[] = (el.props as any).children;
    if (children) {
      if (Array.isArray(children)) {
        return children.map((child) => {
          if (React.isValidElement(child)) {
            return removeReactFragment(child);
          } else {
            return <Grid>{child}</Grid>;
          }
        });
      } else {
        return <StyledItem style={{ display: el.type === PFormHidden ? 'none' : undefined }}>{el}</StyledItem>;
      }
    } else {
      return <StyledItem style={{ display: el.type === PFormHidden ? 'none' : undefined }}>{el}</StyledItem>;
    }
  } else {
    return <StyledItem style={{ display: el.type === PFormHidden ? 'none' : undefined }}>{el}</StyledItem>;
  }
};

const PSearchGroup: React.FC<PSearchGroupProps> = ({
  children,
  className,
  style,
  sx,
  //--------------------------------------------------------------------------------------------------------------------
  max,
  align,
  hidden,
  spacing = 1,
}) => {
  return (
    <Grid
      className={classNames(className, 'PSearchGroup')}
      style={{ flex: max ? 1 : undefined, display: hidden ? 'none' : undefined }}
    >
      <Grid
        container
        wrap='wrap'
        spacing={spacing}
        justifyContent={align === undefined || align === 'left' ? 'start' : align === 'center' ? 'center' : 'end'}
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

export default PSearchGroup;
