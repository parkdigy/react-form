import React from 'react';

export function ToForwardRefExoticComponent<T>(
  component: T,
  ext?: Pick<React.ForwardRefExoticComponent<any>, 'displayName' | 'defaultProps'>
) {
  const fComponent = component as React.ForwardRefExoticComponent<any>;
  fComponent.displayName = ext?.displayName;
  fComponent.defaultProps = ext?.defaultProps;
  return component as typeof component &
    Pick<React.ForwardRefExoticComponent<any>, 'displayName' | 'propTypes' | 'defaultProps' | '$$typeof'>;
}

export function AutoTypeForwardRef<T, P = object>(
  render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null
): (props: P & React.RefAttributes<T>) => React.ReactElement | null {
  return React.forwardRef(render) as (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
