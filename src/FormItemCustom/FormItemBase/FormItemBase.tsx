import React, { CSSProperties, useMemo } from 'react';
import classNames from 'classnames';
import { FormControl, FormHelperText, Input, InputLabel, OutlinedInput, FilledInput } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { FormItemBaseProps as Props } from './FormItemBase.types';
import { useFormState } from '../../FormContext';
import './FormItemBase.scss';
import { PdgIcon } from '@pdg/react-component';
import { ifUndefined } from '@pdg/util';

const FormItemBase = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      fullWidth: initFullWidth,
      //----------------------------------------------------------------------------------------------------------------
      control,
      controlHeight,
      controlSingleHeight,
      controlVerticalCenter,
      controlContainerStyle,
      required,
      labelIcon,
      label,
      focused,
      helperText,
      helperTextProps,
      error,
      hideLabel,
      hidden,
      autoSize,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style,
      sx,
    },
    ref
  ) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      fullWidth: formFullWidth,
      formColWithLabel,
      formColWithHelperText,
    } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const variant = ifUndefined(initVariant, formVariant);
    const size = ifUndefined(initSize, formSize);
    const color = ifUndefined(initColor, formColor);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

    /********************************************************************************************************************
     * State - inputHeight
     * ******************************************************************************************************************/

    const { ref: inputRef, height: resizedInputHeight } = useResizeDetector({ handleWidth: false });
    const inputHeight = ifUndefined(resizedInputHeight, 0);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const controlMarginTop = useMemo(() => {
      let topMargin = 0;
      if (inputHeight && controlHeight && controlVerticalCenter) {
        if (controlHeight > inputHeight) {
          if (controlSingleHeight) {
            topMargin = inputHeight / 2 - controlSingleHeight / 2;
          } else {
            topMargin = 0;
          }
        } else {
          topMargin = inputHeight / 2 - controlHeight / 2;
        }
      } else {
        topMargin = 0;
      }

      let withLabelControlAddTopMargin: number;
      if (size === 'small') {
        withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 13;
      } else {
        withLabelControlAddTopMargin = controlVerticalCenter ? 7 : 15;
      }

      let controlMarginTop = 0;

      switch (variant) {
        case 'outlined':
        case 'filled':
          if (label || formColWithLabel) {
            controlMarginTop = topMargin + withLabelControlAddTopMargin;
          } else {
            controlMarginTop = topMargin;
          }
          break;
        case 'standard':
          controlMarginTop = 0;
          break;
      }

      return controlMarginTop;
    }, [
      controlHeight,
      controlSingleHeight,
      controlVerticalCenter,
      formColWithLabel,
      inputHeight,
      label,
      size,
      variant,
    ]);

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    // wrapStyle
    const wrapStyle: CSSProperties = {
      display: hidden ? 'none' : fullWidth ? 'block' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
    };
    if (formColWithLabel) {
      wrapStyle.marginTop = -20;
    }

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <div style={wrapStyle}>
        <FormControl
          ref={ref}
          variant='standard'
          className={classNames(
            className,
            'FormItemBase',
            !!label && 'with-label',
            `variant-${variant}`,
            controlVerticalCenter && 'control-vertical-center',
            !!error && 'error'
          )}
          style={style}
          color={color}
          error={error}
          focused={focused}
          sx={sx}
        >
          {!formColWithLabel && label && (
            <InputLabel shrink className='FormItemBase-InputLabel' size={size} required={required}>
              {labelIcon ? (
                <>
                  <PdgIcon style={{ verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 }}>
                    {labelIcon}
                  </PdgIcon>
                  <span style={{ verticalAlign: 'middle' }}>{label}</span>
                </>
              ) : (
                label
              )}
            </InputLabel>
          )}
          <div
            className='FormItemBase-Control-wrap'
            style={{ display: 'grid', marginTop: hideLabel ? 0 : undefined, ...controlContainerStyle }}
          >
            {autoSize ? (
              <>
                {variant === 'standard' && (
                  <Input
                    ref={inputRef}
                    size={size}
                    fullWidth={false}
                    disabled
                    style={{ visibility: 'hidden', width: 0 }}
                  />
                )}
                {variant === 'outlined' && (
                  <OutlinedInput
                    ref={inputRef}
                    size={size}
                    fullWidth={false}
                    disabled
                    style={{ visibility: 'hidden', width: 0 }}
                  />
                )}
                {variant === 'filled' && (
                  <FilledInput
                    ref={inputRef}
                    size={size}
                    fullWidth={false}
                    disabled
                    style={{ visibility: 'hidden', width: 0 }}
                  />
                )}
                <div
                  className='FormItemBase-Control'
                  style={{
                    width: fullWidth ? '100%' : 'auto',
                    display: 'grid',
                    marginTop: -inputHeight,
                    height: ifUndefined(controlHeight, inputHeight) > inputHeight ? controlHeight : undefined,
                    alignItems: 'flex-start',
                    paddingTop: controlMarginTop,
                    position: 'relative',
                  }}
                >
                  {control}
                </div>
              </>
            ) : (
              <div
                style={{
                  width: fullWidth ? '100%' : 'auto',
                  display: 'grid',
                  marginTop: controlMarginTop,
                }}
              >
                {control}
              </div>
            )}
          </div>
          {!formColWithHelperText && helperText && (
            <FormHelperText component='div' {...helperTextProps}>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      </div>
    );
  }
);

FormItemBase.displayName = 'FormItemBase';

export default FormItemBase;
