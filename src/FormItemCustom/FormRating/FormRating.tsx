import React, { useCallback, useEffect, useId, useLayoutEffect, useRef } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { Rating } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, nextTick } from '../../@util';
import { FormRatingProps as Props, FormRatingDefaultProps, FormRatingCommands } from './FormRating.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import { FormIcon } from '../../FormCommon';

const FormRating = React.forwardRef<FormRatingCommands, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      focused: initFocused,
      //----------------------------------------------------------------------------------------------------------------
      precision,
      highlightSelectedOnly,
      icon,
      emptyIcon,
      max,
      //----------------------------------------------------------------------------------------------------------------
      name,
      labelIcon,
      label,
      readOnly,
      required,
      disabled: initDisabled,
      error: initError,
      helperText: initHelperText,
      value: initValue,
      exceptValue,
      onChange,
      onValidate,
      onValue,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      onAddValueItem,
      onRemoveValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
    } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [focused, setFocused] = useAutoUpdateState<Props['focused']>(initFocused || formFocused);

    // Ref -------------------------------------------------------------------------------------------------------------

    const inputRef = useRef<HTMLInputElement>();

    // State -----------------------------------------------------------------------------------------------------------

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [helperText, setHelperText] = useAutoUpdateState<Props['helperText']>(initHelperText);
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(initDisabled);

    // State - width, height -------------------------------------------------------------------------------------------

    const { width, height, ref: resizeDetectorRef } = useResizeDetector();

    // Function - getFinalValue ----------------------------------------------------------------------------------------

    const getFinalValue = useCallback(
      (value: number): number => {
        return onValue ? onValue(value) : value;
      },
      [onValue]
    );

    // State - value ---------------------------------------------------------------------------------------------------

    const [value, setValue] = useAutoUpdateState<number>(initValue || 0, getFinalValue);

    useFirstSkipEffect(() => {
      if (error) validate(value);
      if (onChange) onChange(value);
      onValueChange(name, value);
    }, [value]);

    // State - style ---------------------------------------------------------------------------------------------------

    const [style] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        return { width: width || 100, ...initStyle };
      }, [initStyle, width])
    );

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (value !== initValue) {
        if (onChange) onChange(value);
        onValueChange(name, value);
      }

      if (resizeDetectorRef.current) {
        inputRef.current = resizeDetectorRef.current.querySelector('input');
      }
    }, []);

    // Function --------------------------------------------------------------------------------------------------------

    const focus = useCallback(function () {
      inputRef.current?.focus();
      setTimeout(() => {
        inputRef.current?.blur();
      });
    }, []);

    const validate = useCallback(
      function (value: Props['value']) {
        if (required && (empty(value) || value === 0)) {
          setErrorHelperText(true, '?????? ?????? ???????????????.');
          return false;
        }

        if (onValidate) {
          const onValidateResult = onValidate(value);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorHelperText(false, initHelperText);

        return true;
      },
      [required, onValidate, initHelperText]
    );

    const setErrorHelperText = useCallback(function (error: Props['error'], helperText: Props['helperText']) {
      setError(error);
      setHelperText(helperText);
    }, []);

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      let lastValue = value;
      let lastDisabled = !!disabled;

      const commands: FormRatingCommands = {
        getType: () => 'FormRating',
        getName: () => name,
        getReset: () => getFinalValue(initValue || 0),
        reset: () => {
          lastValue = getFinalValue(initValue || 0);
          setValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value: number) => {
          lastValue = getFinalValue(value);
          setValue(lastValue);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(value),
        setError: (error: Props['error'], helperText: Props['helperText']) =>
          setErrorHelperText(error, error ? helperText : initHelperText),
      };

      onAddValueItem(id, commands);

      if (ref) {
        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }

      return () => {
        onRemoveValueItem(id);

        if (ref) {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        }
      };
    }, [
      name,
      initValue,
      value,
      getFinalValue,
      exceptValue,
      disabled,
      focus,
      validate,
      initHelperText,
      ref,
      onAddValueItem,
      onRemoveValueItem,
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback(
      (e: React.SyntheticEvent, value: number | null) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          const finalValue = getFinalValue(value || 0);
          setValue(finalValue);
          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [readOnly, name, getFinalValue, onValueChangeByUser, onRequestSearchSubmit]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormItemBase
        variant={variant}
        size={size}
        color={color}
        focused={focused}
        className={classNames(className, 'FormValueItem', 'FormRating')}
        labelIcon={labelIcon}
        label={label}
        error={error}
        fullWidth={false}
        helperText={helperText}
        helperTextProps={{ style: { marginLeft: 5 } }}
        style={style}
        sx={sx}
        controlHeight={height || (size === 'small' ? 21 : 26)}
        controlVerticalCenter
        control={
          <Rating
            ref={resizeDetectorRef}
            size={size === 'medium' ? 'large' : 'medium'}
            name={name}
            precision={precision}
            highlightSelectedOnly={highlightSelectedOnly}
            value={value}
            disabled={disabled || readOnly}
            max={max}
            icon={
              <FormIcon color={color} fontSize='inherit'>
                {icon ? icon : 'Star'}
              </FormIcon>
            }
            emptyIcon={<FormIcon fontSize='inherit'>{emptyIcon ? emptyIcon : 'StarBorder'}</FormIcon>}
            onChange={handleChange}
            onFocus={() => setFocused(initFocused || true)}
            onBlur={() => setFocused(initFocused || false)}
          />
        }
      />
    );
  }
);

FormRating.displayName = 'FormRating';
FormRating.defaultProps = FormRatingDefaultProps;

export default FormRating;
