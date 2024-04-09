import React, { useMemo } from 'react';
import classNames from 'classnames';
import { FormButtonProps as Props, FormButtonDefaultProps } from './FormButton.types';
import { useFormState } from '../../FormContext';
import { PdgButton } from '@pdg/react-component';

const FormButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      size: initSize,
      color: initColor,
      variant: initVariant,
      fullWidth: initFullWidth,
      className,
      type,
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

    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

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

FormButton.displayName = 'FormButton';
FormButton.defaultProps = FormButtonDefaultProps;

export default FormButton;
