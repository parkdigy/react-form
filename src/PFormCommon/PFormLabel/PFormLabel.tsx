import React, { CSSProperties } from 'react';
import { InputLabel, useTheme } from '@mui/material';
import { PFormLabelProps as Props } from './PFormLabel.types';
import { ChildrenSpan, IconPIcon } from './PFormLabel.style.private';

const PFormLabel = React.forwardRef<HTMLLabelElement, Props>(
  ({ children, icon, size, style, error, warning, ...props }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const newStyle: CSSProperties = {
      height: 20,
      transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined,
      ...style,
    };
    if (!error) {
      newStyle.color = warning ? theme.palette.warning.main : style?.color;
    }

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
        style={newStyle}
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
  }
);

export default React.memo(PFormLabel);
