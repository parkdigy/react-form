import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { NumericFormatProps } from 'react-number-format';
import NumberFormatCustom from './NumberFormatCustom.private';
import { PFormNumberProps as Props, PFormNumberCommands } from './PFormNumber.types';
import PFormTextField, { PFormTextFieldCommands } from '../PFormTextField';
import { empty } from '@pdg/compare';
import { InputBaseProps } from '@mui/material/InputBase';
import { useAutoUpdateRef, useForceUpdate } from '@pdg/react-hook';

const PFormNumber = React.forwardRef<PFormNumberCommands, Props>(
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
    type Commands = PFormNumberCommands;

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const strValueRef = useAutoUpdateRef<string | undefined>(initValue !== undefined ? `${initValue}` : '');

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
     * Function
     * ******************************************************************************************************************/

    const getFinalValue = useCallback((value: string | undefined) => {
      return empty(value) || value === '-' || value === '.' ? undefined : Number(value);
    }, []);

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
      [forceUpdate, onChange, strValueRef]
    );

    const handleValue = useCallback(
      (value: string | undefined) => {
        let finalValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        if (onValue) {
          finalValue = onValue(finalValue);
        }
        return finalValue !== undefined ? finalValue.toString() : '';
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

    const handleRef = useCallback(
      (commands: PFormTextFieldCommands<string> | null) => {
        if (ref) {
          const finalCommands: Commands | null = commands
            ? {
                ...commands,
                getReset: () => initValue,
                getValue: () => getFinalValue(strValueRef.current),
                setValue: (value: number | undefined) => {
                  const strValue = value !== undefined ? `${value}` : '';
                  if (strValueRef.current === strValue) {
                    strValueRef.current = `${strValue} `;
                  } else {
                    strValueRef.current = strValue;
                  }
                  onChange && onChange(value);
                  forceUpdate();
                },
              }
            : null;

          if (typeof ref === 'function') {
            return ref(finalCommands);
          } else {
            ref.current = finalCommands;
          }
        }
      },
      [forceUpdate, getFinalValue, initValue, onChange, ref, strValueRef]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <PFormTextField<string>
        ref={handleRef}
        className={classNames(className, 'PFormNumber')}
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

PFormNumber.displayName = 'PFormNumber';

export default PFormNumber;
