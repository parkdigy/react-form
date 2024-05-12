import React, { CSSProperties } from 'react';
import { InputLabel, useTheme } from '@mui/material';
import { FormLabelProps as Props } from './FormLabel.types';
import { ChildrenSpan, IconPdgIcon } from './FormLabel.style.private';

const FormLabel = React.forwardRef<HTMLLabelElement, Props>(
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
        className='FormItemBase-InputLabel'
        size={size === 'medium' ? 'normal' : size}
        error={error}
        style={newStyle}
        {...props}
      >
        {icon ? (
          <>
            <IconPdgIcon>{icon}</IconPdgIcon>
            <ChildrenSpan>{children}</ChildrenSpan>
          </>
        ) : (
          children
        )}
      </InputLabel>
    );
  }
);

export default React.memo(FormLabel);
