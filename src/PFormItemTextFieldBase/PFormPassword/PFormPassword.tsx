import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { InputAdornment, IconButton, Icon, styled } from '@mui/material';
import PFormText from '../PFormText';
import { notEmpty } from '@pdg/compare';
import { PFormPasswordProps as Props, PFormPasswordValue } from './PFormPassword.types';
import './PFormPassword.scss';
import { InputBaseProps } from '@mui/material/InputBase/InputBase';
import { useAutoUpdateRef } from '@pdg/react-hook';

const StyledEyeInputAdornment = styled(InputAdornment)`
  visibility: hidden;
`;

const PFormPassword = ({
  className,
  slotProps: initSlotProps,
  clear = false,
  eye = true,
  onChange,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const onChangeRef = useAutoUpdateRef(onChange);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [showEye, setShowEye] = useState(notEmpty(props.value));
  const [type, setType] = useState<'text' | 'password'>('password');

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const eyeAdornment = useMemo(
    () =>
      eye && (
        <StyledEyeInputAdornment position='end' className={classNames('eye-icon-button-wrap', showEye && 'show')}>
          <IconButton
            size='small'
            tabIndex={-1}
            onClick={() => {
              setType((prev) => (prev === 'password' ? 'text' : 'password'));
            }}
          >
            <Icon fontSize='inherit'>{type === 'password' ? 'visibility' : 'visibility_off'}</Icon>
          </IconButton>
        </StyledEyeInputAdornment>
      ),
    [eye, showEye, type]
  );

  const slotProps = useMemo(() => {
    return {
      ...initSlotProps,
      input: {
        ...initSlotProps?.input,
        endAdornment: (
          <>
            {eyeAdornment}
            {(initSlotProps?.input as InputBaseProps)?.endAdornment}
          </>
        ),
      },
    };
  }, [eyeAdornment, initSlotProps]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleChange = useCallback(
    (value: PFormPasswordValue) => {
      setShowEye(notEmpty(value));
      onChangeRef.current?.(value);
    },
    [onChangeRef]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PFormText
      className={classNames(className, 'PFormPassword')}
      onChange={handleChange}
      type={type}
      slotProps={slotProps}
      clear={clear}
      {...props}
    />
  );
};

export default PFormPassword;
