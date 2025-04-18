import { CSSProperties, ReactNode } from 'react';

export interface FormBodyProps {
  children?: ReactNode;
  hidden?: boolean;
  fullHeight?: boolean;
  style?: CSSProperties;
}
