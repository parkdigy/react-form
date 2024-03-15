import { NumericFormatProps } from 'react-number-format';
import React from 'react';
interface NumberFormatCustomProps extends Omit<NumericFormatProps, 'onChange'> {
    onChange: (value: any) => void;
}
declare const NumberFormatCustom: React.ForwardRefExoticComponent<NumberFormatCustomProps & React.RefAttributes<HTMLInputElement>>;
export default NumberFormatCustom;
