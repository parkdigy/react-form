import { SearchProps } from '../Search';
export interface HashSearchProps extends SearchProps {
    onRequestHashChange(hash: string): void;
}
