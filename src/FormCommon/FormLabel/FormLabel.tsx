import React, { CSSProperties, useMemo } from 'react';
import { InputLabel, InputLabelProps, useTheme } from '@mui/material';
import { FormLabelProps as Props, FormLabelDefaultProps } from './FormLabel.types';
import { ChildrenSpan, IconFormIcon } from './FormLabel.style';

const FormLabel = React.forwardRef<HTMLLabelElement, Props>(
  ({ children, icon, size, style, error, warning, ...props }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const finalProps = useMemo((): InputLabelProps => {
      const newStyle: CSSProperties = {
        height: 20,
        transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined,
        ...style,
      };
      if (!error) {
        newStyle.color = warning ? theme.palette.warning.main : style?.color;
      }
      return {
        shrink: true,
        className: 'FormItemBase-InputLabel',
        size: size === 'medium' ? 'normal' : size,
        error,
        style: newStyle,
        ...props,
      };
    }, [size, style, warning, error, props, theme.palette.warning.main]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <InputLabel ref={ref} {...finalProps}>
        {icon ? (
          <>
            <IconFormIcon>{icon}</IconFormIcon>
            <ChildrenSpan>{children}</ChildrenSpan>
          </>
        ) : (
          children
        )}
      </InputLabel>
    );
  }
);

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabelDefaultProps;

export default FormLabel;
