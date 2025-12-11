import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { InputAdornment, IconButton, Icon, styled } from '@mui/material';
import PFormText, { PFormTextProps } from '../PFormText';
import { notEmpty } from '@pdg/compare';
import { PFormPasswordProps as Props, PFormPasswordValue, PFormPasswordCommands } from './PFormPassword.types';
import './PFormPassword.scss';
import { InputBaseProps } from '@mui/material/InputBase/InputBase';

const StyledEyeInputAdornment = styled(InputAdornment)`
  visibility: hidden;
`;

const PFormPassword = React.forwardRef<PFormPasswordCommands, Props>(
  ({ className, slotProps: initSlotProps, clear = false, eye = true, onChange, ...props }, ref) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [type, setType] = useState<PFormTextProps['type']>('password');
    const [showEye, setShowEye] = useState(notEmpty(props.value));

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const slotProps = useMemo(() => {
      return {
        ...initSlotProps,
        input: {
          ...initSlotProps?.input,
          endAdornment: (
            <>
              {eye && (
                <StyledEyeInputAdornment
                  position='end'
                  className={classNames('eye-icon-button-wrap', showEye && 'show')}
                >
                  <IconButton
                    size='small'
                    tabIndex={-1}
                    onClick={() => {
                      setType(type === 'password' ? 'text' : 'password');
                    }}
                  >
                    <Icon fontSize='inherit'>{type === 'password' ? 'visibility' : 'visibility_off'}</Icon>
                  </IconButton>
                </StyledEyeInputAdornment>
              )}
              {(initSlotProps?.input as InputBaseProps)?.endAdornment}
            </>
          ),
        },
      };
    }, [eye, initSlotProps, showEye, type]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleChange = useCallback(
      (value: PFormPasswordValue) => {
        setShowEye(notEmpty(value));
        onChange && onChange(value);
      },
      [onChange]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <PFormText
        ref={ref}
        className={classNames(className, 'PFormPassword')}
        onChange={handleChange}
        type={type}
        slotProps={slotProps}
        clear={clear}
        {...props}
      />
    );
  }
);

PFormPassword.displayName = 'PFormPassword';

export default PFormPassword;
