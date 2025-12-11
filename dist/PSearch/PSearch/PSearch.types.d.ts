import { PFormCommands, PFormProps } from '../../PForm';
import { PCommonSxProps } from '../../@types';
export interface PSearchCommands extends PFormCommands {
}
export interface PSearchProps extends PCommonSxProps, Pick<PFormProps, 'color' | 'spacing' | 'focused' | 'labelShrink' | 'onValueChange' | 'onValueChangeByUser' | 'onSubmit'> {
    autoSubmit?: boolean;
}
