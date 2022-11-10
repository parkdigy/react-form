import React, { useCallback } from 'react';
import FormText from '../FormText';
import classNames from 'classnames';
import { notEmpty } from '../../@util';
import { FormValueItemBaseCommands } from '../../@types';
import { FormTelProps as Props, FormTelDefaultProps } from './FormTel.types';

const FormTel = React.forwardRef<FormValueItemBaseCommands, Props>(({ className, onValue, ...props }, ref) => {
  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleOnValue = useCallback(
    (value: Props['value']) => {
      let newValue = value;
      if (newValue && notEmpty(newValue)) {
        newValue = newValue.replace(/[^0-9]/gi, '');
      }
      newValue = getTelAutoDash(newValue);
      return onValue ? onValue(newValue) : newValue;
    },
    [onValue]
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <FormText
      ref={ref}
      className={classNames(className, 'FormTel')}
      onValue={handleOnValue}
      maxLength={13}
      {...props}
    />
  );
});

FormTel.displayName = 'FormTel';
FormTel.defaultProps = FormTelDefaultProps;

export default FormTel;

function getTelAutoDash(tel: string | undefined): string | undefined {
  if (tel == null) return undefined;

  const str = tel.replace(/[^0-9*]/g, '');
  const isLastDash = tel.substring(tel.length - 1, tel.length) === '-';

  if (str.substring(0, 1) !== '0' && !['15', '16', '18'].includes(str.substring(0, 2))) {
    return tel;
  }

  let tmp = '';
  let preLen;

  switch (str.substring(0, 2)) {
    case '02':
      preLen = 2;
      break;
    case '15':
    case '16':
    case '18':
      preLen = 4;
      break;
    default:
      preLen = 3;
  }

  if (['15', '16', '18'].includes(str.substring(0, 2))) {
    if (str.length <= preLen) {
      tmp = str;
    } else if (str.length <= preLen + 4) {
      tmp += str.substring(0, preLen);
      tmp += '-';
      tmp += str.substring(preLen);
    } else {
      tmp = str;
    }
  } else if (str.length <= preLen) {
    tmp = str;
  } else if (str.length <= preLen + 3) {
    tmp += str.substring(0, preLen);
    tmp += '-';
    tmp += str.substring(preLen);
  } else if (str.length <= preLen + 7) {
    tmp += str.substring(0, preLen);
    tmp += '-';
    tmp += str.substring(preLen, preLen + 3);
    tmp += '-';
    tmp += str.substring(preLen + 3);
  } else if (str.length <= preLen + 8) {
    tmp += str.substring(0, preLen);
    tmp += '-';
    tmp += str.substring(preLen, preLen + 4);
    tmp += '-';
    tmp += str.substring(preLen + 4);
  } else {
    tmp = str;
  }

  if (isLastDash) {
    if (str.length === preLen) {
      tmp += '-';
    }
  }

  return tmp;
}
