import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { Collapse, Grid } from '@mui/material';
import { FormBlockProps as Props, FormBlockDefaultProps } from './FormBlock.types';
import { FormContext, useFormState } from '../../FormContext';
import FormDivider from '../FormDivider';
import { useAutoUpdateState } from '@pdg/react-hook';
import { StyledWrapGrid } from './FormBlock.style';

const FormBlock = React.forwardRef<HTMLDivElement, Props>(
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
      icon,
      label,
      line,
      lineVerticalMargin,
      error,
      warning,
      //----------------------------------------------------------------------------------------------------------------
      hidden,
      collapse,
      collapseIn: initCollapseIn,
      //----------------------------------------------------------------------------------------------------------------
      children,
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const {
      variant: formVariant,
      size: formSize,
      color: formColor,
      spacing: formSpacing,
      focused: formFocused,
      labelShrink: formLabelShrink,
      fullWidth: formFullWidth,
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

    // State -------------------------------------------------------------------------------------------------------------

    const [collapseIn, setCollapseIn] = useAutoUpdateState(initCollapseIn);

    // Memo --------------------------------------------------------------------------------------------------------------

    const style = useMemo(() => {
      if (hidden) {
        return { ...initStyle, display: 'none' };
      } else {
        return initStyle;
      }
    }, [hidden, initStyle]);

    // Effect ------------------------------------------------------------------------------------------------------------

    useEffect(() => {
      setCollapseIn(initCollapseIn);
    }, [initCollapseIn, setCollapseIn]);

    // Memo --------------------------------------------------------------------------------------------------------------

    const Container = useMemo(() => {
      return collapse ? Collapse : React.Fragment;
    }, [collapse]);

    const containerProps = useMemo(() => {
      return collapse ? { in: collapseIn } : undefined;
    }, [collapse, collapseIn]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormContext.Provider
        value={{ variant, size, color, spacing, focused, labelShrink, fullWidth, ...otherFormState }}
      >
        <Grid item ref={ref} xs={12} className={classNames(className, 'FormBlock')} style={style} sx={sx}>
          <Grid container spacing={spacing}>
            {(icon || label || line || collapse) && (
              <FormDivider
                className='FormBlock-header'
                collapse={collapse}
                collapseIn={collapseIn}
                size={size}
                icon={icon}
                color={color}
                label={label}
                line={line}
                error={error}
                warning={warning}
                lineVerticalMargin={lineVerticalMargin}
                hidden={hidden}
                onCollapseChange={collapse ? (newCollapseIn) => setCollapseIn(newCollapseIn) : undefined}
              />
            )}
            <StyledWrapGrid item xs={12}>
              <Container {...containerProps}>
                <Grid container spacing={spacing}>
                  <StyledWrapGrid item xs={12} className='FormBlock-body'>
                    <Grid className='FormBlock-content' container spacing={spacing}>
                      {children}
                    </Grid>
                  </StyledWrapGrid>
                </Grid>
              </Container>
            </StyledWrapGrid>
          </Grid>
        </Grid>
      </FormContext.Provider>
    );
  }
);

FormBlock.displayName = 'FormBlock';
FormBlock.defaultProps = FormBlockDefaultProps;

export default FormBlock;
