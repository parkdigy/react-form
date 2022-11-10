import React, { CSSProperties, useCallback } from 'react';
import { Grid, Box } from '@mui/material';
import { FormDividerProps as Props, FormDividerDefaultProps } from './FormDivider.types';
import { FormIcon } from '../../FormCommon';
import { useFormState } from '../../FormContext';
import { useAutoUpdateState } from '@pdg/react-hook';

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
      //----------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // FormState -------------------------------------------------------------------------------------------------------

    const { size: formSize } = useFormState();

    // State - FormState -----------------------------------------------------------------------------------------------

    const [size] = useAutoUpdateState<Props['size']>(initSize || formSize);

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

    // State - lineStyle -----------------------------------------------------------------------------------------------

    const [lineStyle] = useAutoUpdateState<CSSProperties>(
      useCallback(() => {
        if (lineVerticalMargin) {
          return { ...DEFAULT_LINE_STYLE, marginTop: lineVerticalMargin, marginBottom: lineVerticalMargin };
        } else {
          return DEFAULT_LINE_STYLE;
        }
      }, [lineVerticalMargin])
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Grid ref={ref} item xs={12} style={style} className={className} sx={sx}>
        <Box sx={{ display: 'flex', py: 1, alignItems: 'center', justifyItems: 'center', padding: 0 }}>
          {icon && (
            <FormIcon style={{ opacity: 0.54, marginRight: 5 }} fontSize={size}>
              {icon}
            </FormIcon>
          )}
          {label && (
            <Box
              sx={{
                paddingRight: '10px',
                color: 'text.secondary',
                fontWeight: 700,
                fontSize: size === 'small' ? '11.5px' : '12px',
              }}
            >
              {label}
            </Box>
          )}
          {line && (
            <div style={lineStyle}>
              <div
                style={{
                  borderBottom: 'thin solid #dfdfdf',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  width: '100%',
                }}
              />
            </div>
          )}
        </Box>
      </Grid>
    );
  }
);

FormDivider.displayName = 'FormDivider.';
FormDivider.defaultProps = FormDividerDefaultProps;

export default FormDivider;
