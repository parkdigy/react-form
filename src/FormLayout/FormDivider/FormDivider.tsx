import React, { CSSProperties, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Grid, Box } from '@mui/material';
import { FormDividerProps as Props, FormDividerDefaultProps } from './FormDivider.types';
import { FormIcon } from '../../FormCommon';
import { useFormState } from '../../FormContext';
import { StyledErrorLineBox, StyledLineBox } from './FormDivider.style';

const DEFAULT_LINE_STYLE: CSSProperties = { flex: 1, position: 'relative' };

const FormDivider = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      size: initSize,
      //----------------------------------------------------------------------------------------------------------------
      icon,
      label,
      line,
      lineVerticalMargin,
      hidden,
      collapse,
      collapseIn,
      error,
      onCollapseChange,
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const { size: formSize } = useFormState();

    // Memo - FormState ------------------------------------------------------------------------------------------------

    const size = useMemo(() => (initSize == null ? formSize : initSize), [initSize, formSize]);

    // Memo --------------------------------------------------------------------------------------------------------------

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

    // Event Handler -----------------------------------------------------------------------------------------------------

    const handleClick = useCallback(() => {
      if (collapse) {
        onCollapseChange && onCollapseChange(!collapseIn);
      }
    }, [collapse, collapseIn, onCollapseChange]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Grid ref={ref} item xs={12} style={style} className={classNames(className, 'FormDivider')} sx={sx}>
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
            <FormIcon style={{ opacity: 0.54, marginRight: 5 }} color={error ? 'error' : undefined} fontSize={size}>
              {icon}
            </FormIcon>
          )}
          {label && (
            <Box
              sx={{
                paddingRight: '10px',
                color: error ? 'error.main' : 'text.secondary',
                fontWeight: 700,
                fontSize: size === 'small' ? '11.5px' : '12px',
              }}
            >
              {label}
            </Box>
          )}
          {(line || collapse) && <div style={lineStyle}>{error ? <StyledErrorLineBox /> : <StyledLineBox />}</div>}
          {collapse && (
            <FormIcon sx={{ opacity: 0.6, ml: 1 }} color={error ? 'error' : undefined}>
              {collapseIn ? 'KeyboardDoubleArrowUp' : 'KeyboardDoubleArrowDown'}
            </FormIcon>
          )}
        </Box>
      </Grid>
    );
  }
);

FormDivider.displayName = 'FormDivider.';
FormDivider.defaultProps = FormDividerDefaultProps;

export default FormDivider;
