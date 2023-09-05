import React, { useEffect, useLayoutEffect, useId, useCallback, useMemo, useRef } from 'react';
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
      warning,
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

    // Ref ---------------------------------------------------------------------------------------------------------------

    const gridRef = useRef<HTMLDivElement>(null);

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

    // Memo - FormState ------------------------------------------------------------------------------------------------

    const variant = useMemo(() => (initVariant == null ? formVariant : initVariant), [initVariant, formVariant]);
    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);
    const color = useMemo(() => (initColor == null ? formColor : initColor), [initColor, formColor]);
    const spacing = useMemo(() => initSpacing || formSpacing, [initSpacing, formSpacing]);
    const focused = useMemo(() => (initFocused == null ? formFocused : initFocused), [initFocused, formFocused]);
    const labelShrink = useMemo(
      () => (initLabelShrink == null ? formLabelShrink : initLabelShrink),
      [initLabelShrink, formLabelShrink]
    );
    const fullWidth = useMemo(
      () => (initFullWidth == null ? formFullWidth : initFullWidth),
      [initFullWidth, formFullWidth]
    );

    // Memo --------------------------------------------------------------------------------------------------------------

    const gap = useMemo(() => (initGap == null ? formFormColGap : initGap), [formFormColGap, initGap]);

    // ResizeDetector --------------------------------------------------------------------------------------------------

    const { width: formColWidth } = useResizeDetector({
      targetRef: gridRef,
      handleWidth: true,
      handleHeight: false,
    });

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xs]);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(gridRef.current);
        } else {
          ref.current = gridRef.current;
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
          ref={gridRef}
          item
          xs={xs || formColAutoXs || 12}
          className={classNames(className, 'FormCol', !!label && 'with-label', !!helperText && 'with-helper-text')}
          style={style}
          sx={sx}
        >
          <Grid container direction='column'>
            {label && (
              <Grid item className='FormCol-header'>
                <div style={{ position: 'relative', height: 20 }}>
                  <FormLabel
                    className='FormCol-FormLabel'
                    size={size}
                    icon={icon}
                    focused={focused}
                    color={color}
                    error={error}
                    warning={warning}
                    style={{ position: 'absolute', left: 5, top: 0 }}
                  >
                    {label}
                  </FormLabel>
                </div>
              </Grid>
            )}
            <Grid item xs={2} className='FormCol-content'>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap }}>{children}</Box>
            </Grid>
            {helperText && (
              <Grid item className='FormCol-helper-text'>
                <FormHelperText component='div' error={error} style={{ marginLeft: helperTextShift ? 14 : 5 }}>
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
