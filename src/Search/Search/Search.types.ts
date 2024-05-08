import { FormCommands, FormProps } from '../../Form';
import { CommonSxProps } from '../../@types';
export interface SearchCommands extends FormCommands {}

export interface SearchProps
  extends CommonSxProps,
    Pick<
      FormProps,
      'color' | 'spacing' | 'focused' | 'labelShrink' | 'onValueChange' | 'onValueChangeByUser' | 'onSubmit'
    > {
  autoSubmit?: boolean;
}
