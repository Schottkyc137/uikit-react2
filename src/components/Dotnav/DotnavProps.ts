import { HTMLProps } from 'react';

export interface DotnavProps
  extends Omit<HTMLProps<HTMLUListElement>, 'children'> {
  vertical?: boolean;
  count?: number;
  active?: number;
  activeChanges?: (newValue: number) => void;
}
