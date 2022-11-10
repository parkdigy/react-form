import React, { useEffect, useLayoutEffect, useId, useCallback } from 'react';
import classNames from 'classnames';
import { FormHelperText, Grid, Box } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { FormColProps as Props, FormColDefaultProps } from './FormCol.types';
import { useFormState } from '../../FormContext';
import { FormLabel } from '../../FormCommon';
import FormContextProvider from '../../FormContextProvider';
import { useAutoUpdateState } from '@pdg/react-hook';

const FormCol = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      variant: initVariant,
      size: initSize,
      color: initColor,
      spacing: initSpacing,
      focused: initFocused,
      labelShrink: initLabelShrink,
      fullWidth: initFullWidth,
      //----------------------------------------------------------------------------------------------------------------
      gap: initGap,
      icon,
      label,
      hidden,
      error,
      helperText,
      helperTextShift,
      //----------------------------------------------------------------------------------------------------------------
      xs,
      className,
      children,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // ID --------------------------------------------------------------------------------------------------------------

    const id = useId();

    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      spacing: formSpacing,
      formColGap: formFormColGap,
      focused: formFocused,
      labelShrink: formLabelShrink,
      fullWidth: formFullWidth,
      formColAutoXs,
      onAddFormCol,
      onRemoveFormCol,
      ...otherFormState
    } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [spacing] = useAutoUpdateState<Props['spacing']>(initSpacing == null ? formSpacing : initSpacing);
    const [focused] = useAutoUpdateState<Props['focused']>(initFocused || formFocused);
    const [labelShrink] = useAutoUpdateState<Props['labelShrink']>(initLabelShrink || formLabelShrink);
    const [fullWidth] = useAutoUpdateState<Props['fullWidth']>(initFullWidth == null ? formFullWidth : initFullWidth);

    // State - Gap -----------------------------------------------------------------------------------------------------

    const [gap] = useAutoUpdateState<Props['gap']>(initGap == null ? formFormColGap : initGap);

    // ResizeDetector --------------------------------------------------------------------------------------------------

    const { width: formColWidth, ref: resizeDetectorRef } = useResizeDetector();

    // State - style ---------------------------------------------------------------------------------------------------

    const [style] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        if (hidden) {
          return { ...initStyle, display: 'none' };
        } else {
          return initStyle;
        }
      }, [initStyle, hidden])
    );

    // LayoutEffect ----------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (onAddFormCol) onAddFormCol(id, xs);
      return () => {
        if (onRemoveFormCol) onRemoveFormCol(id);
      };
    }, [xs]);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(resizeDetectorRef.current);
        } else {
          ref.current = resizeDetectorRef.current;
        }
      }
    }, []);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormContextProvider
        value={{
          variant,
          size,
          color,
          spacing,
          focused,
          labelShrink,
          fullWidth,
          formColXs: xs || formColAutoXs || 12,
          formColWidth,
          formColWithLabel: !!label,
          formColWithHelperText: !!helperText,
          ...otherFormState,
        }}
      >
        <Grid
          ref={resizeDetectorRef}
          item
          xs={xs || formColAutoXs || 12}
          className={classNames(className, 'FormCol', !!label && 'with-label', !!helperText && 'with-helper-text')}
          style={style}
          sx={sx}
        >
          <Grid container direction='column'>
            {label && (
              <Grid item>
                <div style={{ position: 'relative', height: 20 }}>
                  <FormLabel
                    className='FormCol-FormLabel'
                    size={size}
                    icon={icon}
                    focused={focused}
                    color={color}
                    error={error}
                    style={{ position: 'absolute', left: 5, top: 0 }}
                  >
                    {label}
                  </FormLabel>
                </div>
              </Grid>
            )}
            <Grid item xs={2}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap }}>{children}</Box>
            </Grid>
            {helperText && (
              <Grid item>
                <FormHelperText error={error} style={{ marginLeft: helperTextShift ? 14 : 5 }}>
                  {helperText}
                </FormHelperText>
              </Grid>
            )}
          </Grid>
        </Grid>
      </FormContextProvider>
    );
  }
);

FormCol.displayName = 'FormCol';
FormCol.defaultProps = FormColDefaultProps;

export default FormCol;
