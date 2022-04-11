import { HTMLProps } from 'react';

export interface MarkerProps extends HTMLProps<HTMLAnchorElement> {
  /**
   * The x-position, starting from the left edge of the parent component
   */
  x: number;

  /**
   * The y-position, starting from the top edge of the parent component
   */
  y: number;
}
