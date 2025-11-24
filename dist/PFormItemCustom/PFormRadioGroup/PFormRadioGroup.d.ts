import React from 'react';
import { PFormRadioGroupProps, PFormRadioGroupCommands, PFormRadioGroupSingleValue, PFormRadioGroupItems } from './PFormRadioGroup.types';
declare const PFormRadioGroup: (<BaseValue extends PFormRadioGroupSingleValue, Items extends PFormRadioGroupItems<BaseValue>>(props: PFormRadioGroupProps<BaseValue, Items, Items[number]["value"]> & React.RefAttributes<PFormRadioGroupCommands<BaseValue>>) => React.ReactElement | null) & Pick<React.ForwardRefExoticComponent<any>, "displayName" | "propTypes" | "$$typeof">;
export default PFormRadioGroup;
