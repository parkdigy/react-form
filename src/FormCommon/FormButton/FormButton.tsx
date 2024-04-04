import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Box, Button } from '@mui/material';
import { FormButtonProps as Props, FormButtonDefaultProps } from './FormButton.types';
import { useFormState } from '../../FormContext';
import { PdgIcon } from '@pdg/react-component';

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
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const { size: formSize, color: formColor, fullWidth: formFullWidth } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

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
        {...props}
      >
        <Box display='inline-flex' flexDirection='row' alignItems='center'>
          {(icon || startIcon) && (
            <PdgIcon
              className='FormButton-StartIcon'
              size={size}
              color='inherit'
              sx={{ mr: children ? 0.5 : undefined }}
            >
              {icon || startIcon}
            </PdgIcon>
          )}
          {children}
          {endIcon && (
            <PdgIcon className='FormButton-EndIcon' size={size} color='inherit' sx={{ ml: children ? 0.5 : undefined }}>
              {endIcon}
            </PdgIcon>
          )}
        </Box>
      </Button>
    );
  }
);

FormButton.displayName = 'FormButton';
FormButton.defaultProps = FormButtonDefaultProps;

export default FormButton;
