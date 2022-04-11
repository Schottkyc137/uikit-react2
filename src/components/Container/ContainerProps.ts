import { HTMLProps } from 'react';

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  sizeModifier?: 'expand' | 'xlarge' | 'large' | 'small' | 'xsmall';
}
