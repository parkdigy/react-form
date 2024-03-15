import React from 'react';
export declare function ToForwardRefExoticComponent<T>(component: T, ext?: Pick<React.ForwardRefExoticComponent<any>, 'displayName' | 'defaultProps'>): T & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "defaultProps" | "propTypes" | "$$typeof">;
export declare function AutoTypeForwardRef<T, P = object>(render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
