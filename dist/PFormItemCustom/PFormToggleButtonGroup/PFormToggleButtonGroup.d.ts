import React from 'react';
import { PFormToggleButtonGroupProps, PFormToggleButtonGroupCommands, PFormToggleButtonGroupSingleValue, PFormToggleButtonGroupValue, PFormToggleButtonGroupItems } from './PFormToggleButtonGroup.types';
import './PFormToggleButtonGroup.scss';
declare const PFormToggleButtonGroup: (<T extends PFormToggleButtonGroupSingleValue, Multiple extends boolean | undefined = undefined, Items extends PFormToggleButtonGroupItems<T> = PFormToggleButtonGroupItems<T>>(props: PFormToggleButtonGroupProps<T, Multiple, Items, Items[number]["value"], PFormToggleButtonGroupValue<Items[number]["value"], Multiple>> & React.RefAttributes<PFormToggleButtonGroupCommands<T, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default PFormToggleButtonGroup;
