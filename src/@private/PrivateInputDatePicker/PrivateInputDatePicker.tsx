import React, { useCallback, useId, useMemo } from 'react';
import classNames from 'classnames';
import { PrivateInputDatePickerProps as Props } from './PrivateInputDatePicker.types';
import { InputProps, InputAdornment } from '@mui/material';
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import './PrivateInputDatePicker.scss';
import { PIcon } from '@pdg/react-component';
import { useAutoUpdateRef } from '@pdg/react-hook';

const PrivateInputDatePicker = ({
  ref,
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
}: Props) => {
  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onFocusRef = useAutoUpdateRef(initOnFocus);
  const onBlurRef = useAutoUpdateRef(initOnBlur);

  /********************************************************************************************************************
   * slotProps
   * ******************************************************************************************************************/

  /** slotPropsInputRef */
  const slotPropsInputRef = useCallback(
    (ref: any) => {
      if (inputRef) {
        inputRef.current = ref;
      }
    },
    [inputRef]
  );

  const slotPropsLabel = useMemo(
    () =>
      labelIcon ? (
        <>
          <PIcon style={{ verticalAlign: 'middle', marginRight: 4 }}>{labelIcon}</PIcon>
          <span style={{ verticalAlign: 'middle' }}>{initLabel}</span>
        </>
      ) : (
        initLabel
      ),
    [initLabel, labelIcon]
  );

  /** slotPropsMuiInputProps */
  const slotPropsMuiInputProps = useMemo(() => {
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

    return muiInputProps;
  }, [endAdornment, icon, startAdornment]);

  /** slotPropsHandleFocus */
  const slotPropsHandleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onFocusRef.current?.(e);
    },
    [onFocusRef]
  );

  /** slotPropsHandleBlur */
  const slotPropsHandleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onBlurRef.current?.(e);
    },
    [onBlurRef]
  );

  /** slotProps */
  const slotProps = useMemo<DesktopDatePickerProps<Dayjs>['slotProps']>(() => {
    return {
      textField: {
        variant,
        size,
        color,
        focused,
        fullWidth,
        required,
        name: id,
        label: slotPropsLabel,
        style,
        sx,
        error,
        InputProps: slotPropsMuiInputProps,
        inputProps: readOnly
          ? {
              className: 'Mui-disabled',
              tabIndex: -1,
            }
          : undefined,
        inputRef: slotPropsInputRef,
        InputLabelProps: labelShrink ? { shrink: true } : undefined,
        onFocus: slotPropsHandleFocus,
        onBlur: slotPropsHandleBlur,
      },
    };
  }, [
    color,
    error,
    focused,
    fullWidth,
    id,
    labelShrink,
    readOnly,
    required,
    size,
    slotPropsHandleBlur,
    slotPropsHandleFocus,
    slotPropsInputRef,
    slotPropsLabel,
    slotPropsMuiInputProps,
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
};

export default PrivateInputDatePicker;
