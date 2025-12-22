import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { NumericFormatProps } from 'react-number-format';
import NumberFormatCustom from './NumberFormatCustom.private';
import { PFormNumberProps as Props, PFormNumberCommands } from './PFormNumber.types';
import PFormTextField, { PFormTextFieldCommands } from '../PFormTextField';
import { empty } from '@pdg/compare';
import { InputBaseProps } from '@mui/material/InputBase';
import { useAutoUpdateRef } from '@pdg/react-hook';

const PFormNumber = ({
  ref,
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
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  type Commands = PFormNumberCommands;

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const initValueRef = useAutoUpdateRef(initValue);
  const onChangeRef = useAutoUpdateRef(onChange);
  const onValueRef = useAutoUpdateRef(onValue);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [strValue, _setStrValue] = useState<string | undefined>(initValue !== undefined ? `${initValue}` : '');
  const strValueRef = useAutoUpdateRef(strValue);
  const setStrValue = useCallback(
    (value: React.SetStateAction<typeof strValue>) => {
      _setStrValue((prev) => {
        const newValue = typeof value === 'function' ? value(prev) : value;
        strValueRef.current = newValue;
        return newValue;
      });
    },
    [strValueRef]
  );

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
  }, [allowDecimal, allowNegative, decimalScale, initSlotProps, prefix, readOnly, suffix, tabIndex, thousandSeparator]);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const getFinalValue = useCallback((value: string | undefined) => {
    return empty(value) || value === '-' || value === '.' ? undefined : Number(value);
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleChange */
  const handleChange = useCallback(
    (value: string | undefined) => {
      if (Number(value) > Number.MAX_SAFE_INTEGER) {
        const newValue = Number.MAX_SAFE_INTEGER;
        const newStrValue = `${newValue}`;
        if (strValueRef.current === newStrValue) {
          setStrValue(`${newValue} `);
        } else {
          setStrValue(`${newValue}`);
        }
        onChangeRef.current?.(newValue);
      } else if (Number(value) < Number.MIN_SAFE_INTEGER) {
        const newValue = Number.MIN_SAFE_INTEGER;
        const newStrValue = `${newValue}`;
        if (strValueRef.current === newStrValue) {
          setStrValue(`${newValue} `);
        } else {
          setStrValue(`${newValue}`);
        }
        onChangeRef.current?.(newValue);
      } else {
        const newValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        onChangeRef.current?.(newValue);
        setStrValue(value);
      }
    },
    [onChangeRef, setStrValue, strValueRef]
  );

  /** handleValue */
  const handleValue = useCallback(
    (value: string | undefined) => {
      let finalValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
      if (onValueRef.current) {
        finalValue = onValueRef.current(finalValue);
      }
      return finalValue !== undefined ? finalValue.toString() : '';
    },
    [onValueRef]
  );

  /** handleValidate */
  const handleValidate = useCallback(
    (value: string | undefined) => {
      if (onValidateRef.current) {
        const finalValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        return onValidateRef.current(finalValue);
      } else {
        return true;
      }
    },
    [onValidateRef]
  );

  /** handleRef */
  const handleRef = useCallback(
    (commands: PFormTextFieldCommands<string> | null) => {
      if (ref) {
        const finalCommands: Commands | null = commands
          ? {
              ...commands,
              getReset: () => initValueRef.current,
              getValue: () => getFinalValue(strValueRef.current),
              setValue: (value: number | undefined) => {
                const newStrValue = value !== undefined ? `${value}` : '';
                if (strValueRef.current === newStrValue) {
                  setStrValue(`${newStrValue} `);
                } else {
                  setStrValue(newStrValue);
                }
                onChangeRef.current?.(value);
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
    [getFinalValue, initValueRef, onChangeRef, ref, setStrValue, strValueRef]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormTextField<string>
      ref={handleRef}
      className={classNames(className, 'PFormNumber')}
      disableReturnKey
      labelShrink={strValue === '' || strValue === undefined ? labelShrink : true}
      slotProps={slotProps}
      readOnly={readOnly}
      clear={clear}
      value={strValue}
      onChange={handleChange}
      onValue={handleValue}
      onValidate={handleValidate}
      {...props}
    />
  );
};

export default PFormNumber;
