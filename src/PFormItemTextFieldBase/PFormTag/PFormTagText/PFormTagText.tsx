import React, { useCallback, useRef } from 'react';
import { PFormTagTextProps as Props } from './PFormTagText.types';
import PFormText from '../../PFormText';
import { notEmpty } from '@pdg/compare';
import { useForceUpdate } from '@pdg/react-hook';
import { styled } from '@mui/material';

export const PFormTagText = ({ ref, allowSpace, onKeyDown, onBlur, onAppendTag, ...props }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const forceUpdate = useForceUpdate();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const valueRef = useRef<string>('');

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const appendTag = useCallback(() => {
    onAppendTag(valueRef.current);
    valueRef.current = ' ';
    forceUpdate();
    setTimeout(() => {
      valueRef.current = '';
      forceUpdate();
    });
  }, [forceUpdate, onAppendTag]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const appendKeys = allowSpace ? [',', 'Enter'] : [' ', ',', 'Enter'];
      if (appendKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();

        if (notEmpty(valueRef.current)) {
          appendTag();
        }
      } else {
        if (onKeyDown) onKeyDown(e);
      }
    },
    [allowSpace, appendTag, onKeyDown]
  );

  const handleChange = useCallback(
    (value: string) => {
      valueRef.current = allowSpace ? value.replace(/,/g, '') : value.replace(/ /g, '').replace(/,/g, '');
    },
    [allowSpace]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (notEmpty(valueRef.current)) {
        appendTag();
      }
      if (onBlur) onBlur(e);
    },
    [onBlur, appendTag]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledFormText
      ref={ref}
      {...props}
      clear={false}
      value={valueRef.current}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

export default PFormTagText;

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const StyledFormText = styled(PFormText)`
  .PFormTag-Input {
    flex: 1;
    min-width: 50px;
    padding-left: 5px;
  }
  &.variant-outlined {
    .MuiInputBase-root {
      .PFormTag-Input {
        padding-top: 7px;
        padding-bottom: 8px;
      }

      &.MuiInputBase-sizeSmall {
        .PFormTag-Input {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
`;
