import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { InputAdornment, IconButton, Icon, styled } from '@mui/material';
import FormText, { FormTextProps } from '../FormText';
import { notEmpty } from '@pdg/util';
import { FormPasswordProps as Props, FormPasswordValue, FormPasswordCommands } from './FormPassword.types';
import './FormPassword.scss';
import { InputBaseProps } from '@mui/material/InputBase/InputBase';

const StyledEyeInputAdornment = styled(InputAdornment)`
  visibility: hidden;
`;

const FormPassword = React.forwardRef<FormPasswordCommands, Props>(
  ({ className, slotProps: initSlotProps, clear = false, eye = true, onChange, ...props }, ref) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [type, setType] = useState<FormTextProps['type']>('password');
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
      (value: FormPasswordValue) => {
        setShowEye(notEmpty(value));
        onChange && onChange(value);
      },
      [onChange]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormText
        ref={ref}
        className={classNames(className, 'FormPassword')}
        onChange={handleChange}
        type={type}
        slotProps={slotProps}
        clear={clear}
        {...props}
      />
    );
  }
);

FormPassword.displayName = 'FormPassword';

export default FormPassword;
