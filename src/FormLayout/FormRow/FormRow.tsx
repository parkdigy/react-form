import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { FormHelperText, Grid } from '@mui/material';
import { FormRowProps as Props, FormColsInRowMap } from './FormRow.types';
import { useFormState } from '../../FormContext';
import FormDivider from '../FormDivider';
import { StyledWrapGrid } from './FormRow.style.private';
import { ifUndefined } from '@pdg/util';
import FormContextProvider from '../../FormContextProvider';

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
      warning,
      helperText,
      //----------------------------------------------------------------------------------------------------------------
      children,
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Value
     * ******************************************************************************************************************/

    const variant = ifUndefined(initVariant, formVariant);
    const size = ifUndefined(initSize, formSize);
    const color = ifUndefined(initColor, formColor);
    const spacing = ifUndefined(initSpacing, formSpacing);
    const focused = ifUndefined(initFocused, formFocused);
    const labelShrink = ifUndefined(initLabelShrink, formLabelShrink);
    const fullWidth = ifUndefined(initFullWidth, formFullWidth);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [formCols] = useState<FormColsInRowMap>({});
    const [formColAutoXs, setFormColAutoXs] = useState<number>(12);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const style = useMemo(() => {
      const style: Props['style'] = { width: '100%', ...initStyle };
      if (hidden) {
        style.display = 'none';
      }
      return style;
    }, [hidden, initStyle]);

    /********************************************************************************************************************
     * Function - makeFormColXs
     * ******************************************************************************************************************/

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
    }, [formCols]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleAddFormCol = useCallback(
      (id: string, xs: number | undefined) => {
        formCols[id] = xs;
        makeFormColXs();
      },
      [formCols, makeFormColXs]
    );

    const handleRemoveFormCol = useCallback(
      (id: string) => {
        delete formCols[id];
        makeFormColXs();
      },
      [formCols, makeFormColXs]
    );

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
          formColAutoXs,
          onAddFormCol: handleAddFormCol,
          onRemoveFormCol: handleRemoveFormCol,
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
                error={error}
                warning={warning}
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
      </FormContextProvider>
    );
  }
);

export default FormRow;
