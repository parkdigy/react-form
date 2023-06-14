import React, { useMemo } from 'react';
import { InputLabel, InputLabelProps } from '@mui/material';
import { FormLabelProps as Props, FormLabelDefaultProps } from './FormLabel.types';
import { ChildrenSpan, IconFormIcon } from './FormLabel.style';

const FormLabel = React.forwardRef<HTMLLabelElement, Props>(({ children, icon, size, style, ...props }, ref) => {
  // Memo --------------------------------------------------------------------------------------------------------------

  const finalProps = useMemo(
    (): InputLabelProps => ({
      shrink: true,
      className: 'FormItemBase-InputLabel',
      size: size === 'medium' ? 'normal' : size,
      ...props,
      style: { height: 20, transform: size === 'small' ? 'translate(0, -1.5px) scale(0.7)' : undefined, ...style },
    }),
    [props, size, style]
  );

  // Render ------------------------------------------------------------------------------------------------------------

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
});

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabelDefaultProps;

export default FormLabel;
