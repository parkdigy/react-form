import React from 'react';
import { PFormToggleButtonGroupProps, PFormToggleButtonGroupCommands, PFormToggleButtonGroupSingleValue } from './PFormToggleButtonGroup.types';
import './PFormToggleButtonGroup.scss';
declare const PFormToggleButtonGroup: (<T extends PFormToggleButtonGroupSingleValue, Multiple extends boolean | undefined>(props: PFormToggleButtonGroupProps<T, Multiple> & React.RefAttributes<PFormToggleButtonGroupCommands<T, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default PFormToggleButtonGroup;
