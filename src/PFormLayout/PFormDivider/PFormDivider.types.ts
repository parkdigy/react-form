import React, { type ReactNode } from 'react';
import { type PCommonSxProps } from '../../@types';
import { type PFormProps } from '../../PForm';
import { type PIconProps } from '@pdg/react-component';

export interface PFormDividerProps extends PCommonSxProps {
  ref?: React.Ref<HTMLDivElement>;
  size?: PFormProps['size'];
  color?: PFormProps['color'];
  //--------------------------------------------------------------------------------------------------------------------
  icon?: PIconProps['children'];
  label?: ReactNode;
  line?: boolean;
  lineVerticalMargin?: string | number;
  hidden?: boolean;
  collapse?: boolean;
  collapseIn?: boolean;
  error?: boolean;
  warning?: boolean;
  endAdornment?: ReactNode;
  onCollapseChange?: (collapseIn: boolean) => void;
}
