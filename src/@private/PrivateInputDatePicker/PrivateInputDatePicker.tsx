import React, { useId, useMemo } from 'react';
import classNames from 'classnames';
import { PrivateInputDatePickerProps as Props } from './PrivateInputDatePicker.types';
import { InputProps, InputAdornment, InputBaseComponentProps } from '@mui/material';
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import './PrivateInputDatePicker.scss';
import { PIcon } from '@pdg/react-component';
import { useAutoUpdateLayoutRef } from '@pdg/react-hook';

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
      align = 'center',
      enableKeyboardInput,
      onFocus: initOnFocus,
      onBlur: initOnBlur,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const onFocusRef = useAutoUpdateLayoutRef(initOnFocus);
    const onBlurRef = useAutoUpdateLayoutRef(initOnBlur);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const slotProps = useMemo<DesktopDatePickerProps<Dayjs>['slotProps']>(() => {
      const inputLabelProps = labelShrink ? { shrink: true } : undefined;

      const muiInputProps: InputProps = {
        endAdornment: undefined,
      };
      if (startAdornment || icon || muiInputProps.startAdornment) {
        muiInputProps.startAdornment = (
          <>
            {icon && (
              <InputAdornment position='start'>
                <PIcon size='small'>{icon}</PIcon>
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
          label: labelIcon ? (
            <>
              <PIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PIcon>
              <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
            </>
          ) : (
            initLabel
          ),
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
          onFocus: onFocusRef.current,
          onBlur: onBlurRef.current,
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
      initLabel,
      inputRef,
      labelIcon,
      labelShrink,
      onBlurRef,
      onFocusRef,
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
        readOnly={readOnly || !enableKeyboardInput}
        slotProps={slotProps}
      />
    );
  }
);

export default PrivateInputDatePicker;
