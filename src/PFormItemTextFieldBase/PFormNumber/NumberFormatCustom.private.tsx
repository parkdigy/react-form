import { NumericFormat, NumericFormatProps } from 'react-number-format';
import React from 'react';

interface NumberFormatCustomProps extends Omit<NumericFormatProps, 'onChange'> {
  onChange: (value: any) => void;
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

export default NumberFormatCustom;
