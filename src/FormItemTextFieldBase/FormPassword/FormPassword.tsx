import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { InputAdornment, IconButton, Icon, styled } from '@mui/material';
import { useAutoUpdateState } from '@pdg/react-hook';
import FormText, { FormTextProps } from '../FormText';
import { notEmpty } from '../../@util';
import { FormValueItemBaseCommands } from '../../@types';
import { FormPasswordProps as Props, FormPasswordDefaultProps } from './FormPassword.types';
import './FormPassword.scss';

const StyledEyeInputAdornment = styled(InputAdornment)`
  visibility: hidden;
`;

const FormPassword = React.forwardRef<FormValueItemBaseCommands, Props>(
  ({ className, InputProps: initMuiInputProps, eye, onChange, ...props }, ref) => {
    // State -----------------------------------------------------------------------------------------------------------

    const [type, setType] = useState<FormTextProps['type']>('password');
    const [showEye, setShowEye] = useState(notEmpty(props.value));

    // State - muiInputProps -------------------------------------------------------------------------------------------

    const [muiInputProps] = useAutoUpdateState<Props['InputProps']>(
      useCallback(() => {
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
      }, [initMuiInputProps, type, eye, showEye])
    );

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleChange = useCallback(
      (value: Props['value']) => {
        setShowEye(notEmpty(value));
        if (onChange) onChange(value);
      },
      [onChange]
    );

    // Render ----------------------------------------------------------------------------------------------------------

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
