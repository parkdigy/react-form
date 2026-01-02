import React, { useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { FormHelperText, Grid } from '@mui/material';
import { PFormRowProps as Props, PFormColsInRowMap } from './PFormRow.types';
import { useFormState } from '../../PFormContext';
import PFormDivider from '../PFormDivider';
import { StyledWrapGrid } from './PFormRow.style.private';
import PFormContextProvider from '../../PFormContextProvider';

const PFormRow = ({
  ref,
  /********************************************************************************************************************/
  variant: initVariant,
  size: initSize,
  color: initColor,
  spacing: initSpacing,
  focused: initFocused,
  labelShrink: initLabelShrink,
  fullWidth: initFullWidth,
  /********************************************************************************************************************/
  icon,
  label,
  line,
  lineVerticalMargin,
  fullHeight,
  endAdornment,
  /********************************************************************************************************************/
  hidden,
  error,
  warning,
  helperText,
  /********************************************************************************************************************/
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
   * Value
   * ******************************************************************************************************************/

  const variant = initVariant ?? formVariant;
  const size = initSize ?? formSize;
  const color = initColor ?? formColor;
  const spacing = initSpacing ?? formSpacing;
  const focused = initFocused ?? formFocused;
  const labelShrink = initLabelShrink ?? formLabelShrink;
  const fullWidth = initFullWidth ?? formFullWidth;

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const formColsRef = useRef<PFormColsInRowMap>({});
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
   * Function
   * ******************************************************************************************************************/

  /** makeFormColXs */
  const makeFormColXs = useCallback(() => {
    const formColKeys = Object.keys(formColsRef.current);

    let autoXs = 12;
    let autoXsCount = formColKeys.length;

    formColKeys.forEach((id) => {
      const xs = formColsRef.current[id];
      if (xs != null) {
        autoXs -= xs;
        autoXsCount -= 1;
      }
    });

    setFormColAutoXs(autoXsCount === 0 ? autoXs : autoXs / autoXsCount);
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** handleAddFormCol */
  const handleAddFormCol = useCallback(
    (id: string, xs: number | undefined) => {
      formColsRef.current = { ...formColsRef.current, [id]: xs };
      makeFormColXs();
    },
    [makeFormColXs]
  );

  /** handleRemoveFormCol */
  const handleRemoveFormCol = useCallback(
    (id: string) => {
      delete formColsRef.current[id];
      makeFormColXs();
    },
    [makeFormColXs]
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
              endAdornment={endAdornment}
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
};

export default PFormRow;
