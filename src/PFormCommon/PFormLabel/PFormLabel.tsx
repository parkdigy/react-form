import React, { type CSSProperties, useMemo } from 'react';
import { InputLabel, useTheme } from '@mui/material';
import { type PFormLabelProps as Props } from './PFormLabel.types';
import { ChildrenSpan, IconPIcon } from './PFormLabel.style.private';

const PFormLabel = ({ ref, children, icon, size, style: initStyle, error, warning, ...props }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo((): CSSProperties => {
    const newStyle: CSSProperties = {
      height: 20,
      transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined,
      ...initStyle,
    };
    if (!error) {
      newStyle.color = warning ? theme.palette.warning.main : initStyle?.color;
    }
    return newStyle;
  }, [error, initStyle, size, theme, warning]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <InputLabel
      ref={ref}
      shrink={true}
      className='PFormItemBase-InputLabel'
      size={size}
      error={error}
      style={style}
      {...props}
    >
      {icon ? (
        <>
          <IconPIcon>{icon}</IconPIcon>
          <ChildrenSpan>{children}</ChildrenSpan>
        </>
      ) : (
        children
      )}
    </InputLabel>
  );
};

export default PFormLabel;
