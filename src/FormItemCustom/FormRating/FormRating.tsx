import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector';
import { Rating } from '@mui/material';
import { useAutoUpdateState, useFirstSkipEffect } from '@pdg/react-hook';
import { empty, equal, nextTick } from '@pdg/util';
import {
  FormRatingProps as Props,
  FormRatingDefaultProps,
  FormRatingCommands,
  FormRatingValue,
} from './FormRating.types';
import FormItemBase from '../FormItemBase';
import { useFormState } from '../../FormContext';
import { PdgIcon } from '@pdg/react-component';

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
      hidden: initHidden,
      //----------------------------------------------------------------------------------------------------------------
      name,
      labelIcon,
      label,
      readOnly,
      required,
      disabled: initDisabled,
      error: initError,
      helperText,
      value: initValue,
      data: initData,
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
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();

    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      focused: formFocused,
      disabled: formDisabled,
      onAddValueItem,
      onRemoveValueItem,
      onValueChange,
      onValueChangeByUser,
      onRequestSearchSubmit,
    } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);

    /********************************************************************************************************************
     * State - FormState
     * ******************************************************************************************************************/

    const [focused, setFocused] = useAutoUpdateState<Props['focused']>(initFocused == null ? formFocused : initFocused);

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const ratingRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState<Props['error']>(initError);
    const [errorHelperText, setErrorHelperText] = useState<Props['helperText']>();
    const [disabled, setDisabled] = useAutoUpdateState<Props['disabled']>(
      initDisabled == null ? formDisabled : initDisabled
    );
    const [hidden, setHidden] = useAutoUpdateState<Props['hidden']>(initHidden);
    const [data, setData] = useAutoUpdateState<Props['data']>(initData);

    /********************************************************************************************************************
     * State - width, height
     * ******************************************************************************************************************/

    const { width, height } = useResizeDetector({
      targetRef: ratingRef,
      handleWidth: true,
      handleHeight: true,
    });

    /********************************************************************************************************************
     * Function - getFinalValue
     * ******************************************************************************************************************/

    const getFinalValue = useCallback(
      (value: number): number => {
        return onValue ? onValue(value) : value;
      },
      [onValue]
    );

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const setErrorErrorHelperText = useCallback(
      function (error: Props['error'], errorHelperText: Props['helperText']) {
        setError(error);
        setErrorHelperText(errorHelperText);
      },
      [setError]
    );

    const validate = useCallback(
      function (value: FormRatingValue) {
        if (required && (empty(value) || value === 0)) {
          setErrorErrorHelperText(true, '필수 선택 항목입니다.');
          return false;
        }

        if (onValidate) {
          const onValidateResult = onValidate(value);
          if (onValidateResult != null && onValidateResult !== true) {
            setErrorErrorHelperText(true, onValidateResult);
            return false;
          }
        }

        setErrorErrorHelperText(false, undefined);

        return true;
      },
      [required, onValidate, setErrorErrorHelperText]
    );

    /********************************************************************************************************************
     * State - value
     * ******************************************************************************************************************/

    const [value, setValue] = useState<number>(() => getFinalValue(initValue || 0));

    const changeValue = useCallback(
      (newValue: number) => {
        if (!equal(value, newValue)) {
          setValue(newValue);
          nextTick(() => {
            if (error) validate(newValue);
            if (onChange) onChange(newValue);
            onValueChange(name, newValue);
          });
        }
      },
      [error, name, onChange, onValueChange, validate, value]
    );

    useFirstSkipEffect(() => {
      changeValue(getFinalValue(initValue || 0));
    }, [initValue]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const style = useMemo(() => ({ width: width || 100, ...initStyle }), [initStyle, width]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      if (ratingRef.current) {
        inputRef.current = ratingRef.current.querySelector('input') || undefined;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const focus = useCallback(function () {
      inputRef.current?.focus();
      setTimeout(() => {
        inputRef.current?.blur();
      });
    }, []);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      let lastValue = value;
      let lastData = data;
      let lastDisabled = !!disabled;
      let lastHidden = !!hidden;

      const commands: FormRatingCommands = {
        getType: () => 'FormRating',
        getName: () => name,
        getReset: () => getFinalValue(initValue || 0),
        reset: () => {
          lastValue = getFinalValue(initValue || 0);
          changeValue(lastValue);
        },
        getValue: () => lastValue,
        setValue: (value: number) => {
          lastValue = getFinalValue(value);
          changeValue(lastValue);
        },
        getData: () => lastData,
        setData: (data) => {
          lastData = data;
          setData(data);
        },
        isExceptValue: () => !!exceptValue,
        isDisabled: () => lastDisabled,
        setDisabled: (disabled) => {
          lastDisabled = disabled;
          setDisabled(disabled);
        },
        isHidden: () => lastHidden,
        setHidden: (hidden) => {
          lastHidden = hidden;
          setHidden(hidden);
        },
        focus,
        focusValidate: focus,
        validate: () => validate(value),
        setError: (error: Props['error'], errorHelperText: Props['helperText']) =>
          setErrorErrorHelperText(error, error ? errorHelperText : undefined),
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
      ref,
      onAddValueItem,
      onRemoveValueItem,
      id,
      setDisabled,
      setErrorErrorHelperText,
      data,
      setData,
      hidden,
      setHidden,
      changeValue,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (e: React.SyntheticEvent, value: number | null) => {
        if (readOnly) {
          e.preventDefault();
        } else {
          const finalValue = getFinalValue(value || 0);
          changeValue(finalValue);
          nextTick(() => {
            onValueChangeByUser(name, finalValue);
            onRequestSearchSubmit(name, finalValue);
          });
        }
      },
      [readOnly, getFinalValue, changeValue, onValueChangeByUser, name, onRequestSearchSubmit]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

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
        required={required}
        helperText={error ? errorHelperText : helperText}
        helperTextProps={{ style: { marginLeft: 5 } }}
        style={style}
        sx={sx}
        hidden={hidden}
        autoSize
        controlHeight={height || (size === 'small' ? 21 : 26)}
        controlVerticalCenter
        control={
          <Rating
            ref={ratingRef}
            size={size === 'medium' ? 'large' : 'medium'}
            name={name}
            precision={precision}
            highlightSelectedOnly={highlightSelectedOnly}
            value={value}
            disabled={disabled || readOnly}
            max={max}
            icon={
              <PdgIcon color={color} fontSize='inherit'>
                {icon ? icon : 'Star'}
              </PdgIcon>
            }
            emptyIcon={<PdgIcon fontSize='inherit'>{emptyIcon ? emptyIcon : 'StarBorder'}</PdgIcon>}
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
