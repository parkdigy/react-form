import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { FormButtonProps as Props, FormButtonDefaultProps } from './FormButton.types';
import { useFormState } from '../../FormContext';
import FormIcon from '../FormIcon';

const FormButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      size: initSize,
      color: initColor,
      variant: initVariant,
      fullWidth: initFullWidth,
      children,
      className,
      type,
      icon,
      startIcon,
      endIcon,
      onClick,
      ...props
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const { size: formSize, color: formColor, fullWidth: formFullWidth } = useFormState();

    // Memo - FormState ------------------------------------------------------------------------------------------------

    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    // Memo ------------------------------------------------------------------------------------------------------------

    const variant = useMemo(() => {
      if (initVariant) {
        return initVariant;
      } else {
        switch (type) {
          case 'submit':
            return 'contained';
          default:
            return 'outlined';
        }
      }
    }, [initVariant, type]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Button
        ref={ref}
        className={classNames(className, 'FormButton')}
        type={type}
        variant={variant}
        size={size}
        color={color}
        fullWidth={fullWidth}
        onClick={onClick}
        startIcon={startIcon ? <FormIcon sx={{ mr: -0.5 }}>{startIcon}</FormIcon> : undefined}
        endIcon={endIcon ? <FormIcon sx={{ ml: -0.5 }}>{endIcon}</FormIcon> : undefined}
        {...props}
      >
        {icon && (
          <FormIcon fontSize={size} color='inherit' sx={{ mr: children ? 0.5 : undefined }}>
            {icon}
          </FormIcon>
        )}
        {children}
      </Button>
    );
  }
);

FormButton.displayName = 'FormButton';
FormButton.defaultProps = FormButtonDefaultProps;

export default FormButton;
