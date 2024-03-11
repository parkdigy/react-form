import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { InputAdornment, IconButton, Icon, styled } from '@mui/material';
import FormText, { FormTextProps } from '../FormText';
import { notEmpty } from '../../@util';
import {
  FormPasswordProps as Props,
  FormPasswordDefaultProps,
  FormPasswordValue,
  FormPasswordCommands,
} from './FormPassword.types';
import './FormPassword.scss';

const StyledEyeInputAdornment = styled(InputAdornment)`
  visibility: hidden;
`;

const FormPassword = React.forwardRef<FormPasswordCommands, Props>(
  ({ className, InputProps: initMuiInputProps, eye, onChange, ...props }, ref) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [type, setType] = useState<FormTextProps['type']>('password');
    const [showEye, setShowEye] = useState(notEmpty(props.value));

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const muiInputProps = useMemo(() => {
      if (eye) {
        const newProps: Props['InputProps'] = { ...initMuiInputProps };
        newProps.endAdornment = (
          <>
            <StyledEyeInputAdornment position='end' className={classNames('eye-icon-button-wrap', showEye && 'show')}>
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
            {newProps.endAdornment}
          </>
        );
        return newProps;
      } else {
        return initMuiInputProps;
      }
    }, [eye, initMuiInputProps, showEye, type]);

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
        InputProps={muiInputProps}
        {...props}
      />
    );
  }
);

FormPassword.displayName = 'FormPassword';
FormPassword.defaultProps = FormPasswordDefaultProps;

export default FormPassword;
