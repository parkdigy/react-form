import { NumberFormatProps } from 'react-number-format';
import { FormNumberProps } from './FormNumber.types';
import React from 'react';
interface NumberFormatCustomProps extends Omit<NumberFormatProps, 'onChange'> {
    onChange: FormNumberProps['onChange'];
}
declare const NumberFormatCustom: React.ForwardRefExoticComponent<NumberFormatCustomProps & React.RefAttributes<HTMLInputElement>>;
export default NumberFormatCustom;
