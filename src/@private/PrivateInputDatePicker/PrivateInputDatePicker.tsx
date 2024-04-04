import React, { useId, useMemo } from 'react';
import classNames from 'classnames';
import {
  PrivateInputDatePickerProps as Props,
  PrivateInputDatePickerDefaultProps,
} from './PrivateInputDatePicker.types';
import { InputProps, InputAdornment, InputBaseComponentProps } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { DesktopDatePickerSlotsComponentsProps } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.types';
import './PrivateInputDatePicker.scss';
import { PdgIcon } from '@pdg/react-component';

const PrivateInputDatePicker = React.forwardRef<HTMLDivElement, Props>(
  (
    {
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
      sx,
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
    },
    ref
  ) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const label = useMemo(
      () =>
        labelIcon ? (
          <>
            <PdgIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PdgIcon>
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
                <PdgIcon size='small'>{icon}</PdgIcon>
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
          sx,
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
      sx,
      variant,
    ]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <DesktopDatePicker
        {...props}
        ref={ref}
        className={classNames(className, 'PrivateInputDatePicker', `align-${align}`)}
        open={false}
        value={value}
        format={format}
        disabled={disabled}
        readOnly={readOnly || readOnlyInput}
        slotProps={slotProps}
      />
    );
  }
);

PrivateInputDatePicker.displayName = 'PrivateInputDatePicker';
PrivateInputDatePicker.defaultProps = PrivateInputDatePickerDefaultProps;

export default PrivateInputDatePicker;
