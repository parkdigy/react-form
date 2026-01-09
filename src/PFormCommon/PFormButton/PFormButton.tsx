import React from 'react';
import classNames from 'classnames';
import { type PFormButtonProps as Props } from './PFormButton.types';
import { useFormState } from '../../PFormContext';
import { PButton } from '@pdg/react-component';

const PFormButton = ({
  ref,
  size: initSize,
  color: initColor,
  variant: initVariant,
  fullWidth: initFullWidth,
  className,
  type = 'button',
  onClick,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const { size: formSize, color: formColor, fullWidth: formFullWidth } = useFormState();

  /********************************************************************************************************************
   * FormState
   * ******************************************************************************************************************/

  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PButton
      ref={ref}
      className={classNames(className, 'PFormButton')}
      type={type}
      variant={initVariant ? initVariant : type === 'submit' ? 'contained' : 'outlined'}
      size={size}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    />
  );
};

export default PFormButton;
