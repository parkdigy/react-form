import React, { useEffect, useLayoutEffect, useId, useRef } from 'react';
import classNames from 'classnames';
import { FormHelperText, Grid } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { FormColProps as Props } from './FormCol.types';
import { useFormState } from '../../FormContext';
import FormContextProvider from '../../FormContextProvider';
import { StyledContentContainerBox, StyledFormLabel, StyledFormLabelContainerDiv } from './FormCol.style.private';
import { ifUndefined } from '@pdg/util';

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
    /********************************************************************************************************************
     * ID
     * ******************************************************************************************************************/

    const id = useId();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const gridRef = useRef<HTMLDivElement>(null);

    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const variant = ifUndefined(initVariant, formVariant);
    const size = ifUndefined(initSize, formSize);
    const color = ifUndefined(initColor, formColor);
    const spacing = ifUndefined(initSpacing, formSpacing);
    const focused = ifUndefined(initFocused, formFocused);
    const labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);
    const formColGap = ifUndefined(initGap, formFormColGap);

    /********************************************************************************************************************
     * ResizeDetector
     * ******************************************************************************************************************/

    const { width: formColWidth } = useResizeDetector({
      targetRef: gridRef,
      handleWidth: true,
      handleHeight: false,
    });

    /********************************************************************************************************************
     * LayoutEffect
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      if (onAddFormCol) onAddFormCol(id, xs);
      return () => {
        if (onRemoveFormCol) onRemoveFormCol(id);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xs]);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormContextProvider
        value={{
          ...otherFormState,
          variant,
          size,
          color,
          spacing,
          focused,
          labelShrink,
          fullWidth,
          formColGap,
          formColXs: xs || formColAutoXs || 12,
          formColWidth,
          formColWithLabel: !!label,
          formColWithHelperText: !!helperText,
        }}
      >
        <Grid
          ref={gridRef}
          item
          xs={xs || formColAutoXs || 12}
          className={classNames(className, 'FormCol', !!label && 'with-label', !!helperText && 'with-helper-text')}
          style={hidden ? { ...initStyle, display: 'none' } : initStyle}
          sx={sx}
        >
          <Grid container direction='column'>
            {label && (
              <Grid item className='FormCol-header'>
                <StyledFormLabelContainerDiv>
                  <StyledFormLabel
                    className='FormCol-FormLabel'
                    size={size}
                    icon={icon}
                    focused={focused}
                    color={color}
                    error={error}
                    warning={warning}
                  >
                    {label}
                  </StyledFormLabel>
                </StyledFormLabelContainerDiv>
              </Grid>
            )}
            <Grid item xs={2} className='FormCol-content'>
              <StyledContentContainerBox gap={formColGap}>{children}</StyledContentContainerBox>
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

export default FormCol;
