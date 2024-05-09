import React, { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { NumericFormatProps } from 'react-number-format';
import NumberFormatCustom from './NumberFormatCustom.private';
import { FormNumberProps as Props, FormNumberCommands } from './FormNumber.types';
import { InputBaseComponentProps } from '@mui/material/InputBase/InputBase';
import FormTextField from '../FormTextField';
import { empty } from '@pdg/util';

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
      InputProps: initMuiInputProps,
      inputProps: initInputProps,
      value: initValue,
      onChange,
      onValue,
      onValidate,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [strValue, setStrValue] = useState<string | undefined>(() => (empty(initValue) ? '' : `${initValue}`));

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      setStrValue(empty(initValue) ? '' : `${initValue}`);
    }, [initValue]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const muiInputProps = useMemo(() => {
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

      return {
        ...initMuiInputProps,
        inputComponent: NumberFormatCustom as React.ElementType<InputBaseComponentProps>,
        inputProps: { ...initInputProps, ...inputProps } as any,
      };
    }, [
      readOnly,
      allowNegative,
      thousandSeparator,
      prefix,
      suffix,
      tabIndex,
      allowDecimal,
      initMuiInputProps,
      initInputProps,
      decimalScale,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (value: string | undefined) => {
        const newValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        onChange && onChange(newValue);

        setStrValue(value);
      },
      [onChange]
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
        labelShrink={strValue === '' || strValue === undefined ? labelShrink : true}
        InputProps={muiInputProps}
        readOnly={readOnly}
        clear={clear}
        value={strValue}
        onChange={handleChange}
        onValue={handleValue}
        onValidate={handleValidate}
        {...props}
      />
    );
  }
);

export default FormNumber;
