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
     * Memo - FormState
     * ******************************************************************************************************************/

    const size = useMemo(() => ifUndefined(initSize, formSize), [initSize, formSize]);
    const color = useMemo(() => ifUndefined(initColor, formColor), [initColor, formColor]);
    const fullWidth = useMemo(() => ifUndefined(initFullWidth, formFullWidth), [initFullWidth, formFullWidth]);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const variant = useMemo(() => {
      if (initVariant) {
        return initVariant;
      } else {
        switch (type) {
          case 'submit':
            return 'contained';
          default:
            return 'outlined';
        }
      }
    }, [initVariant, type]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <PdgButton
        ref={ref}
        className={classNames(className, 'FormButton')}
        type={type}
        variant={variant}
        size={size}
        color={color}
        fullWidth={fullWidth}
        onClick={onClick}
        {...props}
      />
    );
  }
);

export default FormButton;
