import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { FormHelperText, Grid } from '@mui/material';
import { PFormRowProps as Props, PFormColsInRowMap } from './PFormRow.types';
import { useFormState } from '../../PFormContext';
import PFormDivider from '../PFormDivider';
import { StyledWrapGrid } from './PFormRow.style.private';
import { ifUndefined } from '@pdg/compare';
import PFormContextProvider from '../../PFormContextProvider';

const PFormRow = React.forwardRef<HTMLDivElement, Props>(
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
      fullHeight,
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

    const [formCols] = useState<PFormColsInRowMap>({});
    const [formColAutoXs, setFormColAutoXs] = useState<number>(12);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const style = useMemo(() => {
      const style: Props['style'] = { width: '100%', ...initStyle };
      if (hidden) {
        style.display = 'none';
      }
      if (fullHeight) {
        style.height = '100%';
      }
      return style;
    }, [fullHeight, hidden, initStyle]);

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
          formColAutoXs,
          onAddFormCol: handleAddFormCol,
          onRemoveFormCol: handleRemoveFormCol,
        }}
      >
        <Grid ref={ref} size={{ xs: 12 }} className={classNames(className, 'PFormRow')} style={style} sx={sx}>
          <Grid container spacing={spacing} style={fullHeight ? { height: '100%' } : undefined}>
            {(icon || label || line) && (
              <PFormDivider
                className={classNames(className, 'PFormRow-header')}
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
            <StyledWrapGrid
              size={{ xs: 12 }}
              className='PFormRow-body'
              style={fullHeight ? { height: '100%' } : undefined}
            >
              <Grid
                className='PFormRow-content'
                container
                spacing={spacing}
                direction='row'
                style={{ flexWrap: 'nowrap', height: fullHeight ? '100%' : undefined }}
              >
                {children}
              </Grid>
              {helperText && (
                <FormHelperText className='PFormRow-helper-text' component='div' error={error}>
                  {helperText}
                </FormHelperText>
              )}
            </StyledWrapGrid>
          </Grid>
        </Grid>
      </PFormContextProvider>
    );
  }
);

export default PFormRow;
