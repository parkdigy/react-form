import { FormTextProps } from '../FormText';
import { FormValueItemBaseCommands } from '../../@types';

export type FormHiddenProps = Pick<FormTextProps, 'className' | 'name' | 'value'>;

export const FormHiddenDefaultProps = {};

export interface FormHiddenCommands extends FormValueItemBaseCommands {}
