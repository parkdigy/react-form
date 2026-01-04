import { NumericFormat, NumericFormatProps } from 'react-number-format';
import React from 'react';

interface Props extends Omit<NumericFormatProps, 'onChange'> {
  ref?: React.Ref<HTMLInputElement>;
  onChange: (value: any) => void;
}

const NumberFormatCustom = ({ ref, onChange, ...props }: Props) => {
  return (
    <NumericFormat
      {...props}
      getInputRef={ref}
      onValueChange={(values) => {
        if (onChange) onChange({ target: { value: values.value } });
      }}
    />
  );
};
export default NumberFormatCustom;
