import React, { useMemo } from 'react';
import classNames from 'classnames';
import { FormButtonProps as Props } from './FormButton.types';
import { useFormState } from '../../FormContext';
import { PdgButton } from '@pdg/react-component';
import { ifUndefined } from '@pdg/util';

const FormButton = React.forwardRef<HTMLButtonElement, Props>(
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
      <PdgButton
        ref={ref}
        className={classNames(className, 'FormButton')}
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

export default React.memo(FormButton);
