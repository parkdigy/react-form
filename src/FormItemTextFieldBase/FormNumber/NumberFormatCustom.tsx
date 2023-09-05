import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { FormNumberProps } from './FormNumber.types';
import React from 'react';

interface NumberFormatCustomProps extends Omit<NumericFormatProps, 'onChange'> {
  onChange: FormNumberProps['onChange'];
}
const NumberFormatCustom = React.forwardRef<HTMLInputElement, NumberFormatCustomProps>(
  ({ onChange, ...props }, ref) => {
    return (
      <NumericFormat
        {...props}
        getInputRef={ref}
        onValueChange={(values) => {
          if (onChange) onChange({ target: { value: values.value } });
        }}
      />
    );
  }
);

NumberFormatCustom.displayName = 'NumberFormatCustom';

export default NumberFormatCustom;
