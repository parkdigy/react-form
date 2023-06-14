import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

    // State - FormState -----------------------------------------------------------------------------------------------

    const [variant] = useAutoUpdateState<Props['variant']>(initVariant || formVariant);
    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);
    const [color] = useAutoUpdateState<Props['color']>(initColor || formColor);
    const [spacing] = useAutoUpdateState<Props['spacing']>(initSpacing == null ? formSpacing : initSpacing);
    const [focused] = useAutoUpdateState<Props['focused']>(initFocused || formFocused);
    const [labelShrink] = useAutoUpdateState<Props['labelShrink']>(initLabelShrink || formLabelShrink);
    const [fullWidth] = useAutoUpdateState<Props['fullWidth']>(initFullWidth == null ? formFullWidth : initFullWidth);

    // State -------------------------------------------------------------------------------------------------------------

    const [collapseIn, setCollapseIn] = useState(initCollapseIn);

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

    // Effect ------------------------------------------------------------------------------------------------------------

    useEffect(() => {
      setCollapseIn(initCollapseIn);
    }, [initCollapseIn]);

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
