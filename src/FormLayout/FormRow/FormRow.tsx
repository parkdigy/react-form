import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { FormHelperText, Grid } from '@mui/material';
import { FormRowProps as Props, FormRowDefaultProps, FormColsInRowMap } from './FormRow.types';
import { FormContext, useFormState } from '../../FormContext';
import FormDivider from '../FormDivider';
import { useAutoUpdateState } from '@pdg/react-hook';
import { StyledWrapGrid } from './FormRow.style';

const FormRow = React.forwardRef<HTMLDivElement, Props>(
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
      error,
      helperText,
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

    // State -----------------------------------------------------------------------------------------------------------

    const [formCols] = useState<FormColsInRowMap>({});
    const [formColAutoXs, setFormColAutoXs] = useState<number>(12);

    // State - style ---------------------------------------------------------------------------------------------------

    const [style] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        const style: Props['style'] = { width: '100%', ...initStyle };
        if (hidden) {
          style.display = 'none';
        }
        return style;
      }, [initStyle, hidden])
    );

    // Function - makeFormColXs ----------------------------------------------------------------------------------------

    const makeFormColXs = useCallback(() => {
      const formColKeys = Object.keys(formCols);

      let autoXs = 12;
      let autoXsCount = formColKeys.length;

      formColKeys.forEach((id) => {
        const xs = formCols[id];
        if (xs != null) {
          autoXs -= xs;
          autoXsCount -= 1;
        }
      });

      setFormColAutoXs(autoXsCount === 0 ? autoXs : autoXs / autoXsCount);
    }, []);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleAddFormCol = useCallback((id: string, xs: number | undefined) => {
      formCols[id] = xs;
      makeFormColXs();
    }, []);

    const handleRemoveFormCol = useCallback((id: string) => {
      delete formCols[id];
      makeFormColXs();
    }, []);

    //------------------------------------------------------------------------------------------------------------------

    return (
      <FormContext.Provider
        value={{
          variant,
          size,
          color,
          spacing,
          focused,
          labelShrink,
          fullWidth,
          formColAutoXs,
          onAddFormCol: handleAddFormCol,
          onRemoveFormCol: handleRemoveFormCol,
          ...otherFormState,
        }}
      >
        <Grid item ref={ref} xs={12} className={classNames(className, 'FormRow')} style={style} sx={sx}>
          <Grid container spacing={spacing}>
            {(icon || label || line) && (
              <FormDivider
                className={classNames(className, 'FormRow-header')}
                size={size}
                icon={icon}
                color={color}
                label={label}
                line={line}
                lineVerticalMargin={lineVerticalMargin}
                hidden={hidden}
              />
            )}
            <StyledWrapGrid item xs={12} className='FormRow-body'>
              <Grid
                className='FormRow-content'
                container
                spacing={spacing}
                direction='row'
                style={{ flexWrap: 'nowrap' }}
              >
                {children}
              </Grid>
              {helperText && (
                <FormHelperText className='FormRow-helper-text' component='div' error={error}>
                  {helperText}
                </FormHelperText>
              )}
            </StyledWrapGrid>
          </Grid>
        </Grid>
      </FormContext.Provider>
    );
  }
);

FormRow.displayName = 'FormRow';
FormRow.defaultProps = FormRowDefaultProps;

export default FormRow;
