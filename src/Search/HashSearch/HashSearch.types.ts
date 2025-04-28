import { SearchProps } from '../Search';

export interface HashSearchProps extends Omit<SearchProps, 'autoSubmit'> {
  onRequestHashChange(hash: string): void;
}
