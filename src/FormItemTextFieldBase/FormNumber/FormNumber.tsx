import React, { useCallback, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { NumericFormatProps } from 'react-number-format';
import NumberFormatCustom from './NumberFormatCustom.private';
import { FormNumberProps as Props, FormNumberCommands } from './FormNumber.types';
import FormTextField from '../FormTextField';
import { empty } from '@pdg/util';
import { InputBaseProps } from '@mui/material/InputBase';
import { useForceUpdate } from '@pdg/react-hook';

const FormNumber = React.forwardRef<FormNumberCommands, Props>(
  (
    {
      className,
      allowNegative,
      thousandSeparator,
      allowDecimal,
      decimalScale,
      prefix,
      suffix,
      readOnly,
      tabIndex,
      labelShrink,
      clear = true,
      slotProps: initSlotProps,
      value: initValue,
      onChange,
      onValue,
      onValidate,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const forceUpdate = useForceUpdate(1);

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const strValueRef = React.useRef<string | undefined>(undefined);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      strValueRef.current = empty(initValue) ? '' : `${initValue}`;
      forceUpdate();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initValue]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const slotProps = useMemo(() => {
      const newSlotProps: Props['slotProps'] = {
        ...initSlotProps,
      };

      const inputProps: NumericFormatProps = {
        className: readOnly ? 'Mui-disabled' : undefined,
        allowNegative: !!allowNegative,
        thousandSeparator,
        prefix,
        suffix,
        readOnly: !!readOnly,
        tabIndex: readOnly ? -1 : tabIndex,
      };
      if (allowDecimal) {
        if (decimalScale) {
          inputProps.decimalScale = decimalScale;
        }
      } else {
        inputProps.decimalScale = 0;
      }

      newSlotProps.input = {
        ...newSlotProps.input,
        inputComponent: NumberFormatCustom as any,
        inputProps: { ...(newSlotProps.input as InputBaseProps)?.inputProps, ...inputProps } as any,
      };
      return newSlotProps;
    }, [
      allowDecimal,
      allowNegative,
      decimalScale,
      initSlotProps,
      prefix,
      readOnly,
      suffix,
      tabIndex,
      thousandSeparator,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (value: string | undefined) => {
        if (Number(value) > Number.MAX_SAFE_INTEGER) {
          const newValue = Number.MAX_SAFE_INTEGER;
          const newStrValue = `${newValue}`;
          if (strValueRef.current === newStrValue) {
            strValueRef.current = `${newValue} `;
          } else {
            strValueRef.current = `${newValue}`;
          }
          onChange && onChange(newValue);
          forceUpdate();
        } else if (Number(value) < Number.MIN_SAFE_INTEGER) {
          const newValue = Number.MIN_SAFE_INTEGER;
          const newStrValue = `${newValue}`;
          if (strValueRef.current === newStrValue) {
            strValueRef.current = `${newValue} `;
          } else {
            strValueRef.current = `${newValue}`;
          }
          onChange && onChange(newValue);
          forceUpdate();
        } else {
          const newValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
          onChange && onChange(newValue);
          strValueRef.current = value;
          forceUpdate();
        }
      },
      [forceUpdate, onChange]
    );

    const handleValue = useCallback(
      (value: string | undefined) => {
        let finalValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        if (onValue) {
          finalValue = onValue(finalValue);
        }
        return finalValue !== undefined ? finalValue.toString() : undefined;
      },
      [onValue]
    );

    const handleValidate = useCallback(
      (value: string | undefined) => {
        if (onValidate) {
          const finalValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
          return onValidate(finalValue);
        } else {
          return true;
        }
      },
      [onValidate]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormTextField<string | number>
        ref={ref}
        className={classNames(className, 'FormNumber')}
        disableReturnKey
        labelShrink={strValueRef.current === '' || strValueRef.current === undefined ? labelShrink : true}
        slotProps={slotProps}
        readOnly={readOnly}
        clear={clear}
        value={strValueRef.current}
        onChange={handleChange}
        onValue={handleValue}
        onValidate={handleValidate}
        {...props}
      />
    );
  }
);

FormNumber.displayName = 'FormNumber';

export default FormNumber;
