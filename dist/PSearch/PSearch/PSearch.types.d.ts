import React from 'react';
import { type PFormCommands, type PFormProps } from '../../PForm';
import { type PCommonSxProps } from '../../@types';
export interface PSearchCommands extends PFormCommands {
}
export interface PSearchProps extends PCommonSxProps, Pick<PFormProps, 'color' | 'spacing' | 'focused' | 'labelShrink' | 'onValueChange' | 'onValueChangeByUser' | 'onSubmit'> {
    ref?: React.Ref<PSearchCommands>;
    autoSubmit?: boolean;
}
