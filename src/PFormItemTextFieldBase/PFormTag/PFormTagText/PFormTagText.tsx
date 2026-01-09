import React, { useCallback, useState } from 'react';
import { type PFormTagTextProps as Props } from './PFormTagText.types';
import PFormText from '../../PFormText';
import { notEmpty } from '@pdg/compare';
import { styled } from '@mui/material';

export const PFormTagText = ({ ref, allowSpace, onKeyDown, onBlur, onAppendTag, ...props }: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const [value, setValue] = useState<string>('');

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const appendTag = useCallback(() => {
    onAppendTag(value);
    setValue(' ');
    setTimeout(() => {
      setValue('');
    });
  }, [onAppendTag, value]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const appendKeys = allowSpace ? [',', 'Enter'] : [' ', ',', 'Enter'];
      if (appendKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();

        if (notEmpty(value)) {
          appendTag();
        }
      } else {
        if (onKeyDown) onKeyDown(e);
      }
    },
    [allowSpace, appendTag, onKeyDown, value]
  );

  const handleChange = useCallback(
    (value: string) => {
      setValue(allowSpace ? value.replace(/,/g, '') : value.replace(/ /g, '').replace(/,/g, ''));
    },
    [allowSpace]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (notEmpty(value)) {
        appendTag();
      }
      if (onBlur) onBlur(e);
    },
    [value, onBlur, appendTag]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledFormText
      ref={ref}
      {...props}
      clear={false}
      value={value}
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
