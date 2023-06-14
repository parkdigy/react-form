import React, { useMemo } from 'react';
import classNames from 'classnames';
import { NumberFormatProps } from 'react-number-format';
import NumberFormatCustom from './NumberFormatCustom';
import FormText from '../FormText';
import { FormNumberProps as Props, FormNumberDefaultProps } from './FormNumber.types';
import { FormValueItemBaseCommands } from '../../@types';
import { InputBaseComponentProps } from '@mui/material/InputBase/InputBase';

const FormNumber = React.forwardRef<FormValueItemBaseCommands, Props>(
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
      InputProps: initMuiInputProps,
      ...props
    },
    ref
  ) => {
    // Memo --------------------------------------------------------------------------------------------------------------

    const muiInputProps = useMemo(() => {
      const inputProps: NumberFormatProps = {
        allowLeadingZeros,
        allowNegative,
        thousandSeparator,
        prefix,
        suffix,
        readOnly,
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
        inputProps,
      };
    }, [
      allowDecimal,
      allowLeadingZeros,
      allowNegative,
      decimalScale,
      initMuiInputProps,
      prefix,
      readOnly,
      suffix,
      thousandSeparator,
    ]);

    // Render ----------------------------------------------------------------------------------------------------------

    return <FormText ref={ref} className={classNames(className, 'FormNumber')} InputProps={muiInputProps} {...props} />;
  }
);

FormNumber.displayName = 'FormNumber';
FormNumber.defaultProps = FormNumberDefaultProps;

export default FormNumber;
