import React, { CSSProperties, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Grid, Box } from '@mui/material';
import { PFormDividerProps as Props } from './PFormDivider.types';
import { useFormState } from '../../PFormContext';
import { StyledErrorLineBox, StyledLineBox, StyledWarningLineBox } from './PFormDivider.style.private';
import { PIcon } from '@pdg/react-component';

const DEFAULT_LINE_STYLE: CSSProperties = { flex: 1, position: 'relative' };

const PFormDivider = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      size: initSize,
      //----------------------------------------------------------------------------------------------------------------
      icon,
      label,
      line,
      lineVerticalMargin = 9,
      hidden,
      collapse,
      collapseIn,
      error,
      warning,
      onCollapseChange,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    /********************************************************************************************************************
     * FormState
     * ******************************************************************************************************************/

    const { size: formSize } = useFormState();

    /********************************************************************************************************************
     * Memo - FormState
     * ******************************************************************************************************************/

    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);

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

    const lineStyle = useMemo(() => {
      if (lineVerticalMargin) {
        return { ...DEFAULT_LINE_STYLE, marginTop: lineVerticalMargin, marginBottom: lineVerticalMargin };
      } else {
        return DEFAULT_LINE_STYLE;
      }
    }, [lineVerticalMargin]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleClick = useCallback(() => {
      if (collapse) {
        onCollapseChange && onCollapseChange(!collapseIn);
      }
    }, [collapse, collapseIn, onCollapseChange]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <Grid ref={ref} size={{ xs: 12 }} style={style} className={classNames(className, 'PFormDivider')} sx={sx}>
        <Box
          sx={{
            display: 'flex',
            py: 1,
            alignItems: 'center',
            justifyItems: 'center',
            padding: 0,
            cursor: collapse ? 'pointer' : undefined,
          }}
          onClick={handleClick}
        >
          {icon && (
            <PIcon
              style={{ opacity: 0.54, marginRight: 5 }}
              color={error ? 'error' : warning ? 'warning' : undefined}
              size={size}
            >
              {icon}
            </PIcon>
          )}
          {label && (
            <Box
              sx={{
                paddingRight: '10px',
                color: error ? 'error.main' : warning ? 'warning.main' : 'text.secondary',
                fontWeight: 700,
                fontSize: size === 'small' ? '11.5px' : '12px',
              }}
            >
              {label}
            </Box>
          )}
          {(line || collapse) && (
            <div style={lineStyle}>
              {error ? <StyledErrorLineBox /> : warning ? <StyledWarningLineBox /> : <StyledLineBox />}
            </div>
          )}
          {collapse && (
            <PIcon sx={{ opacity: 0.6, ml: 1 }} color={error ? 'error' : warning ? 'warning' : undefined}>
              {collapseIn ? 'KeyboardDoubleArrowUp' : 'KeyboardDoubleArrowDown'}
            </PIcon>
          )}
        </Box>
      </Grid>
    );
  }
);

export default PFormDivider;
