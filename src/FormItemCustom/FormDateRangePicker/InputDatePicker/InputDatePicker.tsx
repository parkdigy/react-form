import React, { useId, useMemo } from 'react';
import classNames from 'classnames';
import { InputDatePickerProps as Props, InputDatePickerDefaultProps } from './InputDatePicker.types';
import { InputProps, InputAdornment, InputBaseComponentProps } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { FormIcon } from '../../../FormCommon';
import './InputDatePicker.scss';
import { Dayjs } from 'dayjs';
import { DesktopDatePickerSlotsComponentsProps } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.types';

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

  const slotProps = useMemo<DesktopDatePickerSlotsComponentsProps<Dayjs>>(() => {
    const muiInputProps: InputProps = {
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

    const inputProps: InputBaseComponentProps = {};
    if (readOnly) {
      inputProps.tabIndex = -1;
      inputProps.className = classNames(inputProps.className, 'Mui-disabled');
    }

    return {
      textField: {
        variant,
        size,
        color,
        focused,
        fullWidth,
        required,
        name: id,
        label,
        style,
        error,
        InputProps: muiInputProps,
        inputProps,
        inputRef: (ref) => {
          if (inputRef) {
            inputRef.current = ref;
          }
        },
        InputLabelProps: inputLabelProps,
        onFocus: (e) => {
          if (onFocus) onFocus(e);
        },
        onBlur: (e) => {
          if (onBlur) onBlur(e);
        },
      },
    };
  }, [
    color,
    endAdornment,
    error,
    focused,
    fullWidth,
    icon,
    id,
    inputLabelProps,
    inputRef,
    label,
    onBlur,
    onFocus,
    readOnly,
    required,
    size,
    startAdornment,
    style,
    variant,
  ]);

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <DesktopDatePicker
      {...props}
      className={classNames(className, 'InputDatePicker', `align-${align}`)}
      open={false}
      value={value}
      format={format}
      disabled={disabled}
      readOnly={readOnly || readOnlyInput}
      slotProps={slotProps}
    />
  );
};

InputDatePicker.displayName = 'InputDatePicker';
InputDatePicker.defaultProps = InputDatePickerDefaultProps;

export default InputDatePicker;
