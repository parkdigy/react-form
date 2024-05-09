import React, { CSSProperties, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { FormControl, FormHelperText, Input, InputLabel, OutlinedInput, FilledInput } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { FormItemBaseProps as Props } from './FormItemBase.types';
import { useFormState } from '../../FormContext';
import './FormItemBase.scss';
import { PdgIcon } from '@pdg/react-component';

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
      controlVerticalCenter,
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
     * Ref
     * ******************************************************************************************************************/

    const inputRef = useRef<HTMLInputElement>(null);
    const realControlContainerRef = useRef<HTMLDivElement>(null);

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

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const wrapStyle = useMemo(() => {
      const wrapStyle: CSSProperties = {
        display: hidden ? 'none' : fullWidth ? 'block' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
      };
      if (formColWithLabel) {
        wrapStyle.marginTop = -20;
      }
      return wrapStyle;
    }, [formColWithLabel, fullWidth, hidden]);

    /********************************************************************************************************************
     * State - inputHeight
     * ******************************************************************************************************************/

    const [inputHeight, setInputHeight] = useState(0);

    useResizeDetector({
      targetRef: inputRef,
      handleWidth: false,
      handleHeight: true,
      onResize() {
        setInputHeight(inputRef.current?.getBoundingClientRect()?.height || 0);
      },
    });

    /********************************************************************************************************************
     * State - realControlHeight
     * ******************************************************************************************************************/

    const [realControlHeight, setRealControlHeight] = useState(0);

    useResizeDetector({
      targetRef: realControlContainerRef,
      handleWidth: false,
      handleHeight: true,
      onResize() {
        setRealControlHeight(realControlContainerRef.current?.getBoundingClientRect()?.height || 0);
      },
    });

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const bottomMargin = useMemo(() => {
      const realHeight = realControlHeight || 0;
      const height = controlHeight || 0;
      const checkInputHeight = variant === 'standard' ? inputHeight + 16 : inputHeight;

      let bottomMargin = 0;
      if (height > checkInputHeight) {
        bottomMargin = height - checkInputHeight;
      } else {
        if (realHeight > 0 && height > 0 && realHeight > height) {
          bottomMargin = realHeight - height;
        }
      }

      return bottomMargin;
    }, [variant, realControlHeight, controlHeight, inputHeight]);

    const controlMarginTop = useMemo(() => {
      let topMargin = 0;
      if (inputHeight && controlHeight && controlVerticalCenter) {
        topMargin = inputHeight / 2 - controlHeight / 2;
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
    }, [controlHeight, controlVerticalCenter, formColWithLabel, inputHeight, label, size, variant]);

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
            <InputLabel
              shrink
              className='FormItemBase-InputLabel'
              size={size === 'medium' ? 'normal' : size}
              required={required}
            >
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
          <div className='FormItemBase-Control-wrap' style={{ display: 'grid', marginTop: hideLabel ? 0 : undefined }}>
            {autoSize ? (
              <>
                {variant === 'standard' && (
                  <Input ref={inputRef} size={size} fullWidth disabled style={{ visibility: 'hidden' }} />
                )}
                {variant === 'outlined' && (
                  <OutlinedInput ref={inputRef} size={size} fullWidth disabled style={{ visibility: 'hidden' }} />
                )}
                {variant === 'filled' && (
                  <FilledInput ref={inputRef} size={size} fullWidth disabled style={{ visibility: 'hidden' }} />
                )}
                <div style={{ height: bottomMargin, visibility: 'hidden' }} />
                <div
                  ref={realControlContainerRef}
                  className='FormItemBase-Control'
                  style={{
                    width: fullWidth ? '100%' : 'auto',
                    display: 'grid',
                    marginTop: controlMarginTop,
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

export default FormItemBase;
