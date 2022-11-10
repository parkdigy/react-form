import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Grid } from '@mui/material';
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

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <FormContext.Provider
        value={{ variant, size, color, spacing, focused, labelShrink, fullWidth, ...otherFormState }}
      >
        {(icon || label || line) && (
          <FormDivider
            size={size}
            icon={icon}
            color={color}
            label={label}
            line={line}
            lineVerticalMargin={lineVerticalMargin}
            hidden={hidden}
          />
        )}
        <StyledWrapGrid ref={ref} item xs={12} className={classNames(className, 'FormBlock')} style={style} sx={sx}>
          <Grid container spacing={spacing}>
            {children}
          </Grid>
        </StyledWrapGrid>
      </FormContext.Provider>
    );
  }
);

FormBlock.displayName = 'FormBlock';
FormBlock.defaultProps = FormBlockDefaultProps;

export default FormBlock;
