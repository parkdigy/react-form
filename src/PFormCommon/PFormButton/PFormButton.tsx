import React from 'react';
import classNames from 'classnames';
import { PFormButtonProps as Props } from './PFormButton.types';
import { useFormState } from '../../PFormContext';
import { PButton } from '@pdg/react-component';
import { ifUndefined } from '@pdg/compare';

const PFormButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      size: initSize,
      color: initColor,
      variant: initVariant,
      fullWidth: initFullWidth,
      className,
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const { size: formSize, color: formColor, fullWidth: formFullWidth } = useFormState();

    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const size = ifUndefined(initSize, formSize);
    const color = ifUndefined(initColor, formColor);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

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
  }
);

export default React.memo(PFormButton);
