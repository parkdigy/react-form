import React from 'react';
import { PFormCommands, PFormProps } from '../../PForm';
import { PCommonSxProps } from '../../@types';
export interface PSearchCommands extends PFormCommands {
}
export interface PSearchProps extends PCommonSxProps, Pick<PFormProps, 'color' | 'spacing' | 'focused' | 'labelShrink' | 'onValueChange' | 'onValueChangeByUser' | 'onSubmit'> {
    ref?: React.Ref<PSearchCommands>;
    autoSubmit?: boolean;
}
