import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Icon } from '@mui/material';
import { FormIconProps as Props, FormIconDefaultProps } from './FormIcon.types';

const FormIcon = React.forwardRef<HTMLAnchorElement, Props>(({ className, children: InitChildren, ...props }, ref) => {
  return useMemo(() => {
    const iconProps = { ...props, className: classNames('FormIcon', className) };
    return typeof InitChildren === 'string' ? (
      <Icon ref={ref} {...iconProps}>
        {InitChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)}
      </Icon>
    ) : (
      <InitChildren {...iconProps} />
    );
  }, [InitChildren, className, props, ref]);
});

FormIcon.displayName = 'FormIcon';
FormIcon.defaultProps = FormIconDefaultProps;

export default FormIcon;
