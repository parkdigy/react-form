import React, { useEffect, useLayoutEffect, useId, useMemo } from 'react';
import classNames from 'classnames';
import { FormHelperText, Grid } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { PFormColProps as Props } from './PFormCol.types';
import { useFormState } from '../../PFormContext';
import PFormContextProvider from '../../PFormContextProvider';
import { StyledContentContainerBox, StyledFormLabel, StyledFormLabelContainerDiv } from './PFormCol.style.private';
import { ifUndefined } from '@pdg/compare';

const PFormCol = ({
  ref,
  variant: initVariant,
  size: initSize,
  color: initColor,
  spacing: initSpacing,
  focused: initFocused,
  labelShrink: initLabelShrink,
  fullWidth: initFullWidth,
  fullHeight,
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
}: Props) => {
  /********************************************************************************************************************
   * ID
   * ******************************************************************************************************************/

  const id = useId();

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
   * Variable - FormState
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
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo(() => {
    const newStyle = { ...initStyle };
    if (hidden) {
      newStyle.display = 'none';
    }
    if (fullHeight) {
      newStyle.height = '100%';
    }
    return newStyle;
  }, [fullHeight, hidden, initStyle]);

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: gridRef, width: resizedFormColWidth } = useResizeDetector({ handleHeight: false });
  const formColWidth = ifUndefined(resizedFormColWidth, 0);

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
    <PFormContextProvider
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
        ref={(ref) => {
          gridRef.current = ref;
        }}
        size={{ xs: xs || formColAutoXs || 12 }}
        className={classNames(className, 'PFormCol', !!label && 'with-label', !!helperText && 'with-helper-text')}
        style={style}
        sx={sx}
      >
        <div>
          {label && (
            <div className='FormCol-header'>
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
            </div>
          )}
          <div className='FormCol-content'>
            <StyledContentContainerBox gap={formColGap}>{children}</StyledContentContainerBox>
          </div>
          {helperText && (
            <div className='FormCol-helper-text'>
              <FormHelperText component='div' error={error} style={{ marginLeft: helperTextShift ? 14 : 5 }}>
                {helperText}
              </FormHelperText>
            </div>
          )}
        </div>
      </Grid>
    </PFormContextProvider>
  );
};

export default PFormCol;
