import React, { useId, useMemo } from 'react';
import classNames from 'classnames';
import { InputDatePickerProps as Props, InputDatePickerDefaultProps } from './InputDatePicker.types';
import { TextField, InputProps, InputAdornment } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { FormIcon } from '../../../FormCommon';
import './InputDatePicker.scss';

const InputDatePicker: React.FC<Props> = ({
  variant,
  size,
  color,
  focused,
  fullWidth,
  disabled,
  readOnly,
  required,
  labelShrink,
  //--------------------------------------------------------------------------------------------------------------------
  className,
  style,
  value,
  label: initLabel,
  labelIcon,
  inputRef,
  format,
  error,
  icon,
  startAdornment,
  endAdornment,
  align,
  readOnlyInput,
  onFocus,
  onBlur,
  ...props
}) => {
  // ID --------------------------------------------------------------------------------------------------------------

  const id = useId();

  // Memo --------------------------------------------------------------------------------------------------------------

  const label = useMemo(
    () =>
      labelIcon ? (
        <>
          <FormIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</FormIcon>
          <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
        </>
      ) : (
        initLabel
      ),
    [initLabel, labelIcon]
  );

  const inputLabelProps = useMemo(() => {
    if (labelShrink) {
      return {
        shrink: true,
      };
    }
  }, [labelShrink]);

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <DesktopDatePicker
      {...props}
      className={classNames(className, 'InputDatePicker', `align-${align}`)}
      open={false}
      value={value}
      inputFormat={format}
      disabled={disabled}
      readOnly={readOnly || readOnlyInput}
      renderInput={({
        style: inputStyle,
        inputRef: inputInputRef,
        InputProps: inputInputProps,
        inputProps: initInputProps,
        error: inputError,
        onFocus: inputOnFocus,
        onBlur: inputOnBlur,
        ...params
      }) => {
        const muiInputProps: InputProps = {
          ...inputInputProps,
          endAdornment: undefined,
        };
        if (startAdornment || icon || muiInputProps.startAdornment) {
          muiInputProps.startAdornment = (
            <>
              {icon && (
                <InputAdornment position='start'>
                  <FormIcon fontSize='small'>{icon}</FormIcon>
                </InputAdornment>
              )}
              {startAdornment && <InputAdornment position='start'>{startAdornment}</InputAdornment>}
              {muiInputProps.startAdornment}
            </>
          );
        }
        if (endAdornment) {
          muiInputProps.endAdornment = (
            <>{endAdornment && <InputAdornment position='end'>{endAdornment}</InputAdornment>}</>
          );
        }

        const inputProps = { ...initInputProps };
        if (readOnly) {
          inputProps.tabIndex = -1;
        }

        return (
          <TextField
            {...params}
            style={{ ...inputStyle, ...style }}
            variant={variant}
            size={size}
            color={color}
            focused={focused}
            fullWidth={fullWidth}
            required={required}
            name={id}
            label={label}
            error={error || inputError}
            inputRef={(ref) => {
              if (inputInputRef) {
                if (typeof inputInputRef === 'function') {
                  inputInputRef(ref);
                }
              }
              if (inputRef) {
                inputRef.current = ref;
              }
            }}
            InputProps={muiInputProps}
            InputLabelProps={inputLabelProps}
            inputProps={inputProps}
            onFocus={(e) => {
              if (inputOnFocus) inputOnFocus(e);
              if (onFocus) onFocus(e);
            }}
            onBlur={(e) => {
              if (inputOnBlur) inputOnBlur(e);
              if (onBlur) onBlur(e);
            }}
          />
        );
      }}
    />
  );
};

InputDatePicker.displayName = 'InputDatePicker';
InputDatePicker.defaultProps = InputDatePickerDefaultProps;

export default InputDatePicker;
