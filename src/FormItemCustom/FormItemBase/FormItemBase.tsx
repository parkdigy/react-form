import React, { CSSProperties, useCallback, useState } from 'react';
import classNames from 'classnames';
import { FormControl, FormHelperText, Input, InputLabel, OutlinedInput, FilledInput } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { useAutoUpdateState } from '@pdg/react-hook';
import { FormItemBaseProps as Props } from './FormItemBase.types';
import { useFormState } from '../../FormContext';
import { FormIcon } from '../../FormCommon';
import './FormItemBase.scss';

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
      //----------------------------------------------------------------------------------------------------------------
      className,
      style,
      sx,
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      fullWidth: formFullWidth,
      formColWithLabel,
      formColWithHelperText,
    } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [fullWidth] = useAutoUpdateState<Props['fullWidth']>(initFullWidth == null ? formFullWidth : initFullWidth);

    // State - wrapStyle -----------------------------------------------------------------------------------------------

    const [wrapStyle] = useAutoUpdateState<CSSProperties>(
      useCallback(() => {
        const wrapStyle: CSSProperties = {
          display: fullWidth ? 'block' : 'inline-flex',
          width: fullWidth ? '100%' : undefined,
        };
        if (formColWithLabel) {
          wrapStyle.marginTop = -20;
        }
        return wrapStyle;
      }, [formColWithLabel])
    );

    // State - inputHeight ---------------------------------------------------------------------------------------------

    const [inputHeight, setInputHeight] = useState(0);

    const { ref: inputResizeDetectorRef } = useResizeDetector({
      handleHeight: true,
      handleWidth: false,
      onResize() {
        setInputHeight(inputResizeDetectorRef.current.getBoundingClientRect().height);
      },
    });

    // State - realControlHeight ---------------------------------------------------------------------------------------

    const [realControlHeight, setRealControlHeight] = useState(0);

    const { ref: realControlResizeDetectorRef } = useResizeDetector({
      handleHeight: true,
      handleWidth: false,
      onResize() {
        setRealControlHeight(realControlResizeDetectorRef.current.getBoundingClientRect().height);
      },
    });

    // State - bottomMargin --------------------------------------------------------------------------------------------

    const [bottomMargin] = useAutoUpdateState<number>(
      useCallback(() => {
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
      }, [variant, realControlHeight, controlHeight, inputHeight, label, formColWithLabel])
    );

    // State - controlMarginTop ----------------------------------------------------------------------------------------

    const [controlMarginTop] = useAutoUpdateState<number>(
      useCallback(() => {
        let topMargin = 0;
        if (inputHeight && controlHeight && controlVerticalCenter) {
          topMargin = inputHeight / 2 - controlHeight / 2;
        }

        let withLabelControlAddTopMargin = 0;
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
      }, [inputHeight, controlHeight, controlVerticalCenter, size, label, formColWithLabel])
    );

    // Render ----------------------------------------------------------------------------------------------------------

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
                  <FormIcon style={{ verticalAlign: 'middle', marginRight: 3, marginTop: -4, marginBottom: -2 }}>
                    {labelIcon}
                  </FormIcon>
                  <span style={{ verticalAlign: 'middle' }}>{label}</span>
                </>
              ) : (
                label
              )}
            </InputLabel>
          )}
          <div className='FormItemBase-Control-wrap' style={{ display: 'grid' }}>
            {variant === 'standard' && (
              <Input ref={inputResizeDetectorRef} size={size} fullWidth disabled style={{ visibility: 'hidden' }} />
            )}
            {variant === 'outlined' && (
              <OutlinedInput
                ref={inputResizeDetectorRef}
                size={size}
                fullWidth
                disabled
                style={{ visibility: 'hidden' }}
              />
            )}
            {variant === 'filled' && (
              <FilledInput
                ref={inputResizeDetectorRef}
                size={size}
                fullWidth
                disabled
                style={{ visibility: 'hidden' }}
              />
            )}
            <div style={{ height: bottomMargin, visibility: 'hidden' }} />
            <div
              ref={realControlResizeDetectorRef}
              className='FormItemBase-Control'
              style={{
                width: fullWidth ? '100%' : 'auto',
                display: 'grid',
                marginTop: controlMarginTop,
              }}
            >
              {control}
            </div>
          </div>
          {!formColWithHelperText && helperText && <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>}
        </FormControl>
      </div>
    );
  }
);

FormItemBase.displayName = 'FormItemBase';

export default FormItemBase;
