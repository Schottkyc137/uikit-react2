import { ReactNode } from 'react';

export interface LabelProps {
  look?: 'success' | 'warning' | 'danger';

  children?: ReactNode;
}
