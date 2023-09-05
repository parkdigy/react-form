import { NumericFormatProps } from 'react-number-format';
import { FormNumberProps } from './FormNumber.types';
import React from 'react';
interface NumberFormatCustomProps extends Omit<NumericFormatProps, 'onChange'> {
    onChange: FormNumberProps['onChange'];
}
declare const NumberFormatCustom: React.ForwardRefExoticComponent<NumberFormatCustomProps & React.RefAttributes<HTMLInputElement>>;
export default NumberFormatCustom;
