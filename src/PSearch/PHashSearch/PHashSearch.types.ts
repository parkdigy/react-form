import { PSearchProps } from '../PSearch';

export interface PHashSearchProps extends Omit<PSearchProps, 'autoSubmit'> {
  noAutoSubmit?: boolean;
  onRequestHashChange: (hash: string) => void;
}
