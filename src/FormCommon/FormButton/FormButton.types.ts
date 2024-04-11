import { PartialPick } from '../../@types';
import { FormContextValue } from '../../FormContext';
import { PdgButtonProps } from '@pdg/react-component';

export interface FormButtonProps
  extends PartialPick<FormContextValue, 'color' | 'size'>,
    Omit<PdgButtonProps, 'color' | 'size'> {
  type?: 'button' | 'submit';
}

export const FormButtonDefaultProps: FormButtonProps = {
  type: 'button',
};
