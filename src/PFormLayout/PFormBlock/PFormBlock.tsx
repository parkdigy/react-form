import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { Collapse, Grid } from '@mui/material';
import { PFormBlockProps as Props } from './PFormBlock.types';
import { PFormContext, useFormState } from '../../PFormContext';
import PFormDivider from '../PFormDivider';
import { useAutoUpdateState } from '@pdg/react-hook';
import { StyledWrapGrid } from './PFormBlock.style.private';
import { ifUndefined } from '@pdg/compare';

const PFormBlock = ({
  ref,
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
}: Props) => {
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
   * Memo - FormState
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

  const [collapseIn, setCollapseIn] = useAutoUpdateState(initCollapseIn);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const style = useMemo(() => {
    if (hidden) {
      return { ...initStyle, display: 'none' };
    } else {
      return initStyle;
    }
  }, [hidden, initStyle]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setCollapseIn(initCollapseIn);
  }, [initCollapseIn, setCollapseIn]);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const Container = useMemo(() => {
    return collapse ? Collapse : React.Fragment;
  }, [collapse]);

  const containerProps = useMemo(() => {
    return collapse ? { in: collapseIn } : undefined;
  }, [collapse, collapseIn]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormContext.Provider
      value={{ ...otherFormState, variant, size, color, spacing, focused, labelShrink, fullWidth }}
    >
      <Grid ref={ref} size={{ xs: 12 }} className={classNames(className, 'PFormBlock')} style={style} sx={sx}>
        <Grid container spacing={spacing}>
          {(icon || label || line || collapse) && (
            <PFormDivider
              className='PFormBlock-header'
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
          <StyledWrapGrid size={{ xs: 12 }}>
            <Container {...containerProps}>
              <Grid container spacing={spacing}>
                <StyledWrapGrid size={{ xs: 12 }} className='PFormBlock-body'>
                  <Grid className='PFormBlock-content' container spacing={spacing}>
                    {children}
                  </Grid>
                </StyledWrapGrid>
              </Grid>
            </Container>
          </StyledWrapGrid>
        </Grid>
      </Grid>
    </PFormContext.Provider>
  );
};

export default PFormBlock;
