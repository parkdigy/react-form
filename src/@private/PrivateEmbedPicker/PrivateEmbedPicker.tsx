import React, { type ReactNode } from 'react';
import { Box, FormHelperText } from '@mui/material';
import { type PCommonSxProps } from '../../@types';

interface Props extends PCommonSxProps {
  name: string;
  label?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: ReactNode;
  pickerRef: React.Ref<HTMLFieldSetElement>;
}

const PrivateEmbedPicker = ({
  name,
  label,
  required,
  disabled,
  readOnly,
  hidden,
  fullWidth,
  error,
  helperText,
  pickerRef,
  className,
  style,
  sx,
  children,
}: Props) => (
  <Box
    className={className}
    style={{ ...style, display: hidden ? 'none' : (style?.display ?? (fullWidth ? 'block' : 'inline-block')) }}
    sx={sx}
  >
    <fieldset
      ref={pickerRef}
      tabIndex={-1}
      disabled={disabled || readOnly}
      aria-label={typeof label === 'string' ? label : name}
      aria-invalid={!!error}
      style={{ border: 0, margin: 0, padding: 0, minWidth: 0 }}
    >
      {label && (
        <legend>
          {label}
          {required && ' *'}
        </legend>
      )}
      {children}
    </fieldset>
    {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
  </Box>
);

export default PrivateEmbedPicker;
