import { ReactNode } from 'react';
import { CommonSxProps } from '../../@types';
import { FormProps } from '../../Form';
import { FormIconProps } from '../../FormCommon';

export interface FormDividerProps extends CommonSxProps {
  size?: FormProps['size'];
  color?: FormProps['color'];
  //--------------------------------------------------------------------------------------------------------------------
  icon?: FormIconProps['children'];
  label?: ReactNode;
  line?: boolean;
  lineVerticalMargin?: string | number;
  hidden?: boolean;
}

export const FormDividerDefaultProps: FormDividerProps = {
  lineVerticalMargin: 9,
};
