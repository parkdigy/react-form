import React from 'react';
export interface PrivateTimeSelectProps {
    ref?: React.Ref<PrivateTimeSelectCommands>;
    list: number[];
    listInterval?: number;
    unit: string;
    cols?: 1 | 2 | 3;
    disableList?: number[];
    value?: number | null;
    onSelect?: (value: number) => void;
}
export interface PrivateTimeSelectCommands {
    scrollToValue: (value: number) => void;
}
