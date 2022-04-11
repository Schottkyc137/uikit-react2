import { HTMLProps } from 'react';

export interface SectionProps extends HTMLProps<HTMLDivElement> {
  styleModifier?: 'default' | 'muted' | 'primary' | 'secondary';

  preserveColors?: boolean;

  sizeModifier?: 'xsmall' | 'small' | 'large' | 'xlarge';

  overlap?: boolean;
}
