import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router';

const LinkBehavior = ({
  href,
  ...props
}: Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] } & {
  ref?: React.Ref<HTMLAnchorElement>;
}) => {
  return <RouterLink data-testid='custom-link' to={href} {...props} />;
};

export default LinkBehavior;
