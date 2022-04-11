import { HTMLProps } from 'react';

export interface DescriptionListProps extends HTMLProps<HTMLDListElement> {
  divider?: boolean;
}
