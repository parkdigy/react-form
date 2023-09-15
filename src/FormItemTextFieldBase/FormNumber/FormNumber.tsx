import React, { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { NumericFormatProps } from 'react-number-format';
import NumberFormatCustom from './NumberFormatCustom';
import { FormNumberProps as Props, FormNumberDefaultProps, FormNumberCommands } from './FormNumber.types';
import { InputBaseComponentProps } from '@mui/material/InputBase/InputBase';
import FormTextField from '../FormTextField';
import { empty } from '../../@util';

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
      InputProps: initMuiInputProps,
      inputProps: initInputProps,
      value: initValue,
      onChange,
      ...props
    },
    ref
  ) => {
    // State -------------------------------------------------------------------------------------------------------------

    const [strValue, setStrValue] = useState<string | undefined>(() => (empty(initValue) ? '' : `${initValue}`));

    // Effect ------------------------------------------------------------------------------------------------------------

    useEffect(() => {
      setStrValue(empty(initValue) ? '' : `${initValue}`);
    }, [initValue]);

    // Memo --------------------------------------------------------------------------------------------------------------

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

    // Event Handler -----------------------------------------------------------------------------------------------------

    const handleChange = useCallback(
      (value: string | undefined) => {
        const newValue = empty(value) || value === '-' || value === '.' ? undefined : Number(value);
        onChange && onChange(newValue);

        setStrValue(value);
      },
      [onChange]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormTextField<string | number>
        ref={ref}
        className={classNames(className, 'FormNumber')}
        disableReturnKey
        InputProps={muiInputProps}
        readOnly={readOnly}
        value={strValue}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

FormNumber.displayName = 'FormNumber';
FormNumber.defaultProps = FormNumberDefaultProps;

export default FormNumber;
