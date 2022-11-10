import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Icon } from '@mui/material';
import { FormIconProps as Props, FormIconDefaultProps } from './FormIcon.types';
import { useAutoUpdateState } from '@pdg/react-hook';

const FormIcon = React.forwardRef<HTMLAnchorElement, Props>(({ className, children: initChildren, ...props }, ref) => {
  // State - children ------------------------------------------------------------------------------------------------

  const [children] = useAutoUpdateState<Props['children']>(
    useCallback(() => {
      return initChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`);
    }, [initChildren])
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <Icon ref={ref} {...props} className={classNames('FormIcon', className)}>
      {children}
    </Icon>
  );
});

FormIcon.displayName = 'FormIcon';
FormIcon.defaultProps = FormIconDefaultProps;

export default FormIcon;
