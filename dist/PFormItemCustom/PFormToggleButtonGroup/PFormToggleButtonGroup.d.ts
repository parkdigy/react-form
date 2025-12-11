import React from 'react';
import { PFormToggleButtonGroupProps, PFormToggleButtonGroupCommands, PFormToggleButtonGroupSingleValue, PFormToggleButtonGroupValue, PFormToggleButtonGroupItems } from './PFormToggleButtonGroup.types';
import './PFormToggleButtonGroup.scss';
declare const PFormToggleButtonGroup: (<T extends PFormToggleButtonGroupSingleValue, Multiple extends boolean | undefined = undefined, Items extends PFormToggleButtonGroupItems<T> = PFormToggleButtonGroupItems<T>, SingleValue extends Items[number]["value"] = Items[number]["value"]>(props: PFormToggleButtonGroupProps<T, Multiple, Items, Items[number]["value"], PFormToggleButtonGroupValue<Items[number]["value"], Multiple>> & React.RefAttributes<PFormToggleButtonGroupCommands<SingleValue, Multiple>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default PFormToggleButtonGroup;
