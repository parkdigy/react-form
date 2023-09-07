import React, { useMemo } from 'react';
import classNames from 'classnames';
import { NumericFormatProps } from 'react-number-format';
import NumberFormatCustom from './NumberFormatCustom';
import {
  FormNumberProps as Props,
  FormNumberDefaultProps,
  FormNumberCommands,
  FormNumberValue,
} from './FormNumber.types';
import { InputBaseComponentProps } from '@mui/material/InputBase/InputBase';
import FormTextField from '../FormTextField';

const FormNumber = React.forwardRef<FormNumberCommands, Props>(
  (
    {
      className,
      allowLeadingZeros,
      allowNegative,
      thousandSeparator,
      allowDecimal,
      decimalScale,
      prefix,
      suffix,
      readOnly,
      tabIndex,
      InputProps: initMuiInputProps,
      ...props
    },
    ref
  ) => {
    // Memo --------------------------------------------------------------------------------------------------------------

    const muiInputProps = useMemo(() => {
      const inputProps: NumericFormatProps = {
        className: readOnly ? 'Mui-disabled' : undefined,
        allowLeadingZeros: !!allowLeadingZeros,
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
        inputProps: inputProps as any,
      };
    }, [
      allowDecimal,
      allowLeadingZeros,
      allowNegative,
      decimalScale,
      initMuiInputProps,
      prefix,
      readOnly,
      tabIndex,
      suffix,
      thousandSeparator,
    ]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormTextField<FormNumberValue, false>
        ref={ref}
        className={classNames(className, 'FormNumber')}
        disableReturnKey
        InputProps={muiInputProps}
        readOnly={readOnly}
        {...props}
      />
    );
  }
);

FormNumber.displayName = 'FormNumber';
FormNumber.defaultProps = FormNumberDefaultProps;

export default FormNumber;
